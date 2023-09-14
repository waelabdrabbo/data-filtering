import { useGetReservationsQuery } from '../services/reservationsApi'
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

function ReservationList() {
    const { data } = useGetReservationsQuery();
    const filter = useSelector((state) => state.filter);

    const renderRow = (item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.businessDate}</td>
                <td>{item.status}</td>
                <td>{item.shift}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.quantity}</td>
                <td>{item.customer.firstName} {item.customer.lastName}</td>
                <td>{item.area}</td>
                <td>{item.guestNotes}</td>
            </tr>
        )
    }
    const filteredReservations = data.record.reservations.filter((reservation) => {
        const meetsStatus = filter.status === '' || reservation.status === filter.status;
        const meetsShift = filter.shift === '' || reservation.shift === filter.shift;
        const meetsArea = filter.area === '' || reservation.area === filter.area;

        return meetsStatus && meetsShift && meetsArea;
    });
    return (
        <>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Business Date</th>
                        <th>Status</th>
                        <th>Shift</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Quantity</th>
                        <th>Customer</th>
                        <th>Area</th>
                        <th>Guest Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReservations.map(renderRow)}
                </tbody>
            </Table>
        </>
    )
}

export default ReservationList;