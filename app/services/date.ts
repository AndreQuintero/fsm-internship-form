
export const disableDaysBeforeToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to midnight
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0); // Normalize the input date to midnight
    return normalizedDate < today; // Disable only past dates (not today)
}

export const convertDateToIsoString = (date: Date) => {
    if(date) {
        return new Date(date).toISOString()
    }
    return date
} 