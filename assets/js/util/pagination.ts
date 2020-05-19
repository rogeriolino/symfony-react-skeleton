
export type Pagination<T> = {
    page: number
    totalItems: number
    items: Array<T>
}

export function createPagination<T>(items: T[] = []): Pagination<T> {
    return {
        page: 0,
        totalItems: 0,
        items,
    }
}