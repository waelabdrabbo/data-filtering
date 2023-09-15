import { setDateRangeFilter } from "../slices/filterSlice";
import ReservationFilter from '../components/ReservationFilter';
import ReservationDate from '../components/ReservationDate';
import statusOptions from '../options/statusOptions';
import shiftOptions from '../options/shiftOptions';
import areaOptions from '../options/areaOptions';
import { useDispatch } from "react-redux";
import Col from 'react-bootstrap/Col';
import ReservationSort from "../components/ReservationSort";
const ReservationFilterConteiner = () => {
    const dispatch = useDispatch();
    const handleDateRangeChange = (fullDate) => {
        dispatch(setDateRangeFilter(fullDate.map((date) => (date ? date.toISOString() : null))))
    }

    return (
        <>
            <Col><ReservationFilter name="status" options={statusOptions} /></Col>
            <Col><ReservationFilter name="shift" options={shiftOptions} /></Col>
            <Col><ReservationFilter name="area" options={areaOptions} /></Col>
            <Col><ReservationDate onDateRangeChange={handleDateRangeChange} /></Col>
            <Col><ReservationSort /></Col>
        </>
    )
}

export default ReservationFilterConteiner