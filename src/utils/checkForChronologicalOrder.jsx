export const checkForChronologicalOrder = (date) => {
    return date <= new Date();  // returns true if date is today or before today
}