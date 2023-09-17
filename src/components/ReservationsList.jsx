import { useGetReservationsQuery } from '../services/reservationsApi'
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredData } from '../slices/dataSlice';
import { useEffect, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import ReservationItem from './ReservationsItem';
import filterAndSortReservations from '../utils/reservationsFilterUtils';

/**
 * Renders a list of reservations with filtering and sorting functionality.
 *
 * @return {JSX.Element} The JSX element containing the reservation list.
 */
function ReservationList() {
    const { data } = useGetReservationsQuery();
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const filteredData = useSelector((state) => state.data.filteredData);
    const searchText = useSelector((state) => state.search.searchText);
    const sortCriteria = useSelector((state) => state.sort.sortCriteria);
    const filteredReservations = useMemo(() => {
        if (!data) return [];
        const filteredData = filterAndSortReservations(data.record.reservations, sortCriteria, filter, searchText);
        return filteredData;
    }, [data, sortCriteria, filter, searchText]);

    useEffect(() => {
        dispatch(setFilteredData(filteredReservations));
    }, [filteredReservations, dispatch]);

    return (
        <>
            <Table striped bordered hover responsive >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Business Date</th>
                        <th>Shift</th>
                        <th>Quantity</th>
                        <th>Area</th>
                        <th>Status</th>
                        <th>Guest Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map(ReservationItem)
                    ) : (
                        <tr>
                            <td colSpan="10">No data</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default ReservationList;