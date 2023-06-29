export const formatDate = (date) => {
    return (!date) ? null
        : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export const getListOfDates = (dates) => {
    return (dates.length > 1)
        ? dates.map((e) => `${formatDate(e.start)} - ${formatDate(e.end) ?? "Present"}, `)
            .join('')
            .slice(0, -2)
        : dates.map((e) => `${formatDate(e.start)} - ${formatDate(e.end) ?? "Present"}`)
            .join('')
}