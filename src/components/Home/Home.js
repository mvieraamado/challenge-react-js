import { CardContainer } from '../CardContainer/CardContainer';
import { Col, Container, Row } from "react-bootstrap";
import './home.css';
import { Link } from 'react-router-dom';

const HomeContainer = () => {
  
  return (
    <Container fluid className='home p-lg-2'>  
      <Row className="w-100">
        <h3 className='text-center text-uppercase text-light p-4 fs-3'>Superhero Team</h3>
        <p>Welcome! If you don't have heroes yet, find them here <Link to={'/search'} className='text-decoration-none text-dark'>Search</Link> </p>
        <Col className='d-flex p-4 justify-content-evenly align-items-center flex-wrap'>
          <CardContainer />
        </Col>
      </Row>  
    </Container>
  );
};

export default HomeContainer;