/**
 * Generates a table row for a reservation item.
 *
 * @param {object} item - The reservation item.
 * @param {number} index - The index of the reservation item in the list.
 * @return {JSX.Element} - The table row element.
 */
const ReservationItem = (item, index) => {
    return (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.customer.firstName} {item.customer.lastName}</td>
            <td>{item.businessDate}</td>
            <td>{item.shift}</td>
            <td>{item.quantity}</td>
            <td>{item.area}</td>
            <td>{item.status}</td>
            <td>{item.guestNotes}</td>
        </tr>
    )
}
export default ReservationItem