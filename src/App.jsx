import 'bootstrap/dist/css/bootstrap.min.css'
import { useGetReservationsQuery } from './services/reservationsApi'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReservationList from './components/ReservationList'
import ReservationFilter from './components/ReservationFilter';
import statusOptions from './options/statusOptions';
import shiftOptions from './options/shiftOptions';
import areaOptions from './options/areaOptions';
function App() {
  const { isLoading, error } = useGetReservationsQuery();

  if (isLoading) {
    return <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Container>
        <Row className="my-3">
          <Col><ReservationFilter name="status" options={statusOptions} /></Col>
          <Col><ReservationFilter name="shift" options={shiftOptions} /></Col>
          <Col><ReservationFilter name="area" options={areaOptions} /></Col>
          <Col>Date</Col>
        </Row>
        <Row className="my-3">
          <Col>Search</Col>
        </Row>
        <Row>
          <Col><ReservationList /></Col>
        </Row>
      </Container>
    </>
  )
}

export default App
