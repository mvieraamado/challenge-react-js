import { CardContainer } from '../CardContainer/CardContainer';
import { Container, Row } from "react-bootstrap";
import './home.css';
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroContext/HeroContext';

const HomeContainer = () => {
  const { selectedHero } = useContext(HeroContext)
  return (
    <Container fluid className='home p-lg-2'>  
      <Row className="heroTeamContainer">
        <h3 className='text-center text-uppercase text-white p-4 fs-3'>Superhero Team</h3>
        {selectedHero.length === 0 ?
          <p>You don't have heroes yet. Go find them </p>
        :
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <CardContainer />
        </div>}
      </Row> 
    </Container>
  );
};

export default HomeContainer;