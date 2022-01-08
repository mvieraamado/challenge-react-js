import { AddHeroButton } from '../AddHeroButton/AddHeroButton'
import { useContext } from "react";
import { HeroContext } from "../../context/HeroContext/HeroContext";
import { Card, Col } from 'react-bootstrap';

const SearchResults = ({ dataResponse }) => {
  const { addGoodHero, addBadHero, isLoading } = useContext(HeroContext)

  const handleTeam = (result) => {
    return ( 
      <AddHeroButton
        id={result.id}
        addGoodHero={() => addGoodHero(result)}
        addBadHero={() => addBadHero(result)}
        alignment={result.biography.alignment}
        stats={result.powerstats}
      />
    );
  };
  return (
    <>
    {isLoading
      ? dataResponse.results.map((result) => {
          return (
            <Col key={result.id} md={6} lg={3} className='m-2'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={result && result.image.url} alt={result && result.name}/>
                <Card.Body>
                  <Card.Title>{result && result.name}</Card.Title>
                  {handleTeam(result)}
                </Card.Body>
              </Card>
            </Col>
          );
        })
      : null}
    </>
  );
};
export default SearchResults;