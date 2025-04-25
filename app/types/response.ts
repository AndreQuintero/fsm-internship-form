export type Response<T = string | string[] | Record<string, string>> = {
    success: boolean
    type?: ErrorTypes
    errors?: T // Errors can be a string, an array of strings, or an object
}

export enum ErrorTypes  {
    SCHEMA_VALIDATION = "SCHEMA_VALIDATION",
    SERVER_ERROR = "SERVER_ERROR"
}