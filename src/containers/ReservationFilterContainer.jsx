import { Row, Col } from "react-bootstrap";
import ReservationFilter from '../components/ReservationsFilter';
import ReservationDate from '../components/ReservationsDate';
import statusOptions from '../options/statusOptions';
import shiftOptions from '../options/shiftOptions';
import areaOptions from '../options/areaOptions';
import ReservationSort from "../components/ReservationsSort";
import ReservationSearch from "../components/ReservationsSearch";

/**
 * Renders the ReservationFilterContainer component.
 *
 * @return {ReactElement} The rendered ReservationFilterContainer component.
 */
const ReservationFilterConteiner = () => {
    return (
        <>
            <Row className="my-3">
                <Col><ReservationFilter name="status" options={statusOptions} /></Col>
                <Col><ReservationFilter name="shift" options={shiftOptions} /></Col>
                <Col><ReservationFilter name="area" options={areaOptions} /></Col>
                <Col><ReservationDate /></Col>
                <Col><ReservationSort name="sort" /></Col>
            </Row>
            <Row className="my-3">
                <Col><ReservationSearch /></Col>
            </Row>
        </>
    )
}

export default ReservationFilterConteiner