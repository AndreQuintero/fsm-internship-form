export type Response<T = string | string[] | Record<string, string>> = {
    success: boolean
    type?: ErrorTypes
    errors?: T // Errors can be a string, an array of strings, or an object
}

export enum ErrorTypes  {
    SCHEMA_VALIDATION = "SCHEMA_VALIDATION",
    INTEGRATION_ERROR = "INTEGRATION_ERROR"
}