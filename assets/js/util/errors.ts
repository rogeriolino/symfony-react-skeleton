
export type Errors = {
    message?: string
    description?: string
    fields?: Map<string,string[]>
}

export function emptyErrors(): Errors {
    return {
        message: '',
        description: '',
        fields: new Map()
    }
}