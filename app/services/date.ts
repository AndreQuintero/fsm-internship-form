
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

export const convertHoursToDays = (hours: number) => {
    const DAYS_IN_HOURS = 24
    const days = hours / DAYS_IN_HOURS
    return Math.round(days)
}

export const addHoursToDate = (date: Date, hours: number) => {
    const newDate = new Date(date)
    // Convert hours to milliseconds (1 hour = 3,600,000 ms)
    const millisecondsToAdd = hours * 60 * 60 * 1000
    newDate.setTime(newDate.getTime() + millisecondsToAdd)
    return newDate
}

export const isDateExpired = (initialDate: Date, targetDate: Date) => {
    return targetDate < initialDate
}