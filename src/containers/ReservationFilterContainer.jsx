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
            <Row className="mt-3">
                <Col md className="mb-3"><ReservationFilter name="status" options={statusOptions} /></Col>
                <Col md className="mb-3"><ReservationFilter name="shift" options={shiftOptions} /></Col>
                <Col md className="mb-3"><ReservationFilter name="area" options={areaOptions} /></Col>
                <Col md className="mb-3"><ReservationDate /></Col>
                <Col md className="mb-3"><ReservationSort name="sort" /></Col>
            </Row>
            <Row className="mb-3">
                <Col><ReservationSearch /></Col>
            </Row>
        </>
    )
}

export default ReservationFilterConteiner