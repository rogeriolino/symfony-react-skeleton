import { Client } from './api';
import { Entity } from '../models';
import { Pagination } from '../util';
import { DataTransform } from './data';

interface UnauthorizedError extends Error {
    code: 401
    unauthorized: true
    exception: Error
}

export class RestRepository<T extends Entity<string|number>> {
    constructor(
        protected api: Client,
        protected transformer: DataTransform<T>,
        protected path: string
    ) {}

    public async findById(id: string|number): Promise<T> {
        return await this.try(async () => {
            return this.api.get(`${this.path}/${id}`)
        })
    }

    public async find(params: any = {}): Promise<Pagination<T>> {
        return await this.try(async () => {
            const data = await this.api.get(this.path, params)
            return this.transformer.pagination(data, params.page)
        })
    }

    public async save(entity: T): Promise<T> {
        return await this.try(() => {
            if (entity.id) {
                return this.api.put(`${this.path}/${entity.id}`, entity)
            }
            return this.api.post(this.path, entity)
        })
    }

    public async remove(entity: T) {
        return await this.try(() => {
            return this.api.delete(`${this.path}/${entity.id}`, entity)
        })
    }

    protected async try(fn: Function) {
        try {
            return await fn()
        } catch (e) {
            if (e.response?.status === 401) {
                throw {
                    code: 401,
                    unauthorized: true,
                    exception: e
                }
            }
            const data = e.response?.data
            if (data) {
                const errors = this.transformer.errors(data)
                throw errors
            }
            // unknown error
            throw e
        }
    }
}