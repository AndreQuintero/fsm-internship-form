export const setUrl = (url: string, hash_id?: string) => {
    return `${url}${hash_id ? "?hash_id="+hash_id : ""}`
}