import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import ReservationFilterConteiner from './containers/ReservationFilterContainer';
import { useGetReservationsQuery } from './services/reservationsApi'
import ReservationList from './components/ReservationsList'


/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The main application component.
 */
function App() {
  const { isLoading, error } = useGetReservationsQuery();
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Container>
        {isLoading ? (
          <Row>
            <Spinner className="mx-auto my-5" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        ) : (
          <>
            <ReservationFilterConteiner />
            <Row>
              <Col><ReservationList /></Col>
            </Row>
          </>
        )}
      </Container>
    </>
  )
}

export default App
