import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { Card, ListGroup} from "react-bootstrap";
import './cardItem.css';
import { HeroContext } from "../../context/HeroContext/HeroContext";

export const CardItem = ({ hero }) => {
  const { deleteGoodHero, deleteBadHero } = useContext(HeroContext);

  return (
    <div className="flip-card m-2">
      <Card style={{ width: '18rem' }} className="flip-card-inner">
        <div className="flip-card-front">
          <Card.Img variant="top" src={hero.image} />
          <Card.Body className={`${hero.alignment === "good" ? "card__bt-good" : "card__bt-bad"}`}>
            <Card.Title>{hero.name}</Card.Title>
            <Card.Text>{hero.biography}</Card.Text>
          </Card.Body>
        </div>
        <div className="flip-card-back p-5">
          <h4 className="text-center fs-5 pt-2">PowerStats</h4>
          <ListGroup variant="flush" className="list-unstyled">
            <li className="p-1">Intelligence {hero.stats.intelligence}</li>
            <li className="p-1">Strength {hero.stats.strength}</li>
            <li className="p-1">Speed {hero.stats.speed}</li>
            <li className="p-1">Durability {hero.stats.durability}</li>
            <li className="p-1">Combat {hero.stats.combat}</li>
            <li className="p-1">Power {hero.stats.power}</li>
          </ListGroup>
          <div>
            <Button variant="danger" className="mt-5" onClick={hero.alignment === "good"
              ? () => deleteGoodHero(hero)
              : () => deleteBadHero(hero)}>Delete hero</Button>
          </div>
        </div>
      </Card>
    </div>
  )
};
