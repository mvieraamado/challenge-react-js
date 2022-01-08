import { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { HeroContext } from '../../context/HeroContext/HeroContext';

export const AddHeroButton = (props) => {
  const { selectedHero } = useContext(HeroContext)
  const [count, setCount] = useState(0);
  const [isAdded, setAdded] = useState(false);
  
  const handleDuplicate = (id) => {
    const existId = selectedHero?.find((hero) => hero.id === id);
    if (existId !== undefined) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  };
  
  const countPower = (stats) => {
    let totalCount = 0;
    Object.entries(stats).map((entry) => totalCount = totalCount + parseInt(entry[1]));
    setCount(totalCount);
  };
  
  useEffect(() => {
    countPower(props.stats);
  });
  
  const whichButton = (alignment) => {
    if (isAdded === true) {
      return (
        <Button
          disabled
          className="btn btn-secondary col-12"
          style={{ boxShadow: '2px 1px' }}
        >
          Added
        </Button>
      );
    } else if (alignment === 'good' || alignment === 'neutral') {
      return (
        <Button
          variant="success"
          style={{ boxShadow: '2px 1px' }}
          onClick={() => props.addGoodHero()}
        >
          Add
        </Button>
      );
    } else {
      return (
        <Button variant="danger"
        style={{ boxShadow: '2px 1px' }} 
        onClick={() => props.addBadHero()}>
          Add
        </Button>
      );
    }
  };

  useEffect(() => {
    handleDuplicate(props.id);
  });

  return (
    <div>
      {isNaN(count) ? (
        <button
          className="btn btn-dark w-100"
          style={{ cursor: 'default', boxShadow: '2px 1px' }}
        >
        Not available
        </button>
      ) : (
        whichButton(props.alignment)
      )}
    </div>
  );
};
