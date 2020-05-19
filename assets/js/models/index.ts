
export interface Entity<T> {
    id?: T
}

export interface User extends Entity<string> {
    username: string
}