import { Entity } from "../models"
import { Pagination, Errors } from "../util"

export interface DataTransform<T extends Entity<number|string>> {

    pagination(data: any, page: number): Pagination<T>
    errors(data: any): Errors

}

export class HydraDataTransform<T extends Entity<number|string>> implements DataTransform<T> {

    public pagination(data: any, page: number): Pagination<T> {
        page = Math.max(1, page)
        const items = data['hydra:member']
        const totalItems = data['hydra:totalItems']

        return {
            page,
            items,
            totalItems,
        }
    }

    public errors(data: any): Errors {
        const message = data['hydra:title']
        const description = data['hydra:description']
        const violations = data['violations']
        const fields = new Map<string,string[]>()
        if (violations) {
            for (let violation of violations) {
                const path = violation.propertyPath
                if (path && violation.message) {
                    if (!fields.has(path)) {
                        fields.set(path, [])
                    }
                    // @ts-ignore
                    fields.get(path).push(violation.message)
                }
            }
        }

        return {
            message,
            description,
            fields
        }
    }
}