/**
 * Filters and sorts the reservations based on the provided criteria.
 *
 * @param {Array} reservations - The array of reservations to filter and sort.
 * @param {string} sortCriteria - The criteria to sort the reservations by (e.g., "Customer", "Number").
 * @param {object} filter - The filter object containing various filter criteria.
 * @param {string} filter.status - The status to filter the reservations by.
 * @param {string} filter.shift - The shift to filter the reservations by.
 * @param {string} filter.area - The area to filter the reservations by.
 * @param {object} filter.dateRange - The date range to filter the reservations by.
 * @param {string} filter.dateRange.startDate - The start date of the date range.
 * @param {string} filter.dateRange.endDate - The end date of the date range.
 * @param {string} searchText - The text to search for in the reservations.
 * @return {Array} The array of reservations that are filtered and sorted based on the provided criteria.
 */

const filterAndSortReservations = (
    reservations,
    sortCriteria,
    filter,
    searchText
) => {
    const [startDate, endDate] = filter.dateRange.map((dateString) =>
        dateString ? new Date(dateString) : null
    );
    const sortedAndFilteredData = [...reservations].filter((reservation) => {
        const reservationStartDate = new Date(reservation.start);
        const reservationEndDate = new Date(reservation.start);
        const meetsStatus = filter.status === '' || reservation.status === filter.status;
        const meetsShift = filter.shift === '' || reservation.shift === filter.shift;
        const meetsArea = filter.area === '' || reservation.area === filter.area;
        const meetsDateRange = !startDate || !endDate || (reservationStartDate >= startDate && reservationEndDate <= endDate);
        const searchedItems = `${reservation.customer.firstName} ${reservation.customer.lastName}`.toLowerCase().includes(searchText.toLowerCase()) || reservation.id.toString().toLowerCase().includes(searchText.toLowerCase());
        return meetsStatus && meetsShift && meetsArea && meetsDateRange && searchedItems;
    }).sort((a, b) => {
        if (sortCriteria === 'Customer') {
            return `${a.customer.firstName} ${a.customer.lastName}`.localeCompare(
                `${b.customer.firstName} ${b.customer.lastName}`
            );
        } else if (sortCriteria === 'Number') {
            return a.quantity - b.quantity;
        } else {
            return 0;
        }
    });

    return sortedAndFilteredData;
};

export default filterAndSortReservations