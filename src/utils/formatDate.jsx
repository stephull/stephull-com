const formatDate = (date) => {
    return (!date) ? null
        : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}
export default formatDate;