import { useGetReservationsQuery } from '../services/reservationsApi'
import { useSelector, useDispatch } from 'react-redux';
import { setOriginalData, setFilteredData, setSortedData } from '../slices/dataSlice';
import Table from 'react-bootstrap/Table';
import { useEffect, useMemo } from 'react';

function ReservationList() {
    const { data } = useGetReservationsQuery();
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const filteredData = useSelector((state) => state.data.filteredData);
    const sortedData = useSelector((state) => state.data.sortedData);
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

    const filteredReservations = useMemo(() => {
        if (!data) return [];
        const [startDate, endDate] = filter.dateRange.map((dateString) =>
            dateString ? new Date(dateString) : null
        );
        const filteredData = data.record.reservations.filter((reservation) => {
            const reservationStartDate = new Date(reservation.start);
            const reservationEndDate = new Date(reservation.start);
            const meetsStatus = filter.status === '' || reservation.status === filter.status;
            const meetsShift = filter.shift === '' || reservation.shift === filter.shift;
            const meetsArea = filter.area === '' || reservation.area === filter.area;
            const meetsDateRange = !startDate || !endDate || (reservationStartDate >= startDate && reservationEndDate <= endDate);
            return meetsStatus && meetsShift && meetsArea && meetsDateRange;
        });
        return filteredData;
    }, [data, filter, dispatch]);


    useEffect(() => {
        if (data) {
            dispatch(setOriginalData(data.record));
        }
    }, [data, dispatch])


    useEffect(() => {
        dispatch(setFilteredData(filteredReservations));
    }, [filteredReservations, dispatch]);
    
    const combinedData = sortedData.length > 0 ? sortedData : filteredData;

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
                    {combinedData.map(renderRow)}
                </tbody>
            </Table>
        </>
    )
}

export default ReservationList;