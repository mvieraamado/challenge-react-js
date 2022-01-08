import {CardItem} from '../CardItem/CardItem'
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroContext/HeroContext';

export const CardContainer = () => {
  const { selectedHero} = useContext(HeroContext);
  return (
    <>
    {selectedHero?.map((hero) => (
      <CardItem key={hero.id} hero={hero}/>
    ))}
    </>
  );
};
