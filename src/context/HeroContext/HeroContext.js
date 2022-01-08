import { useState, createContext } from "react";

export const HeroContext = createContext([]);

const HeroProvider = ({children}) =>{
  const [ selectedHero, setSelectedHero ] = useState([]);
  const [ goodHeroQuantity, setGoodHeroQuantity ]= useState([]);
  const [ villainousQuantity, setVillainousQuantity ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const searchHeroId = (heroId) => {
    let duplicated = selectedHero.find((hero) => hero.id === heroId);
    if (duplicated === undefined) {
      return true;
    } else {
      return false;
    }
  };
    
  const addBadHero = (hero) => {
      if(villainousQuantity.length === 3) {
        console.log('Maximum number of villains reached') 
      }else if(!searchHeroId (hero.id)) {
          console.log('You have that hero')
      }else{
          let badHero= villainousQuantity + 1;
          setVillainousQuantity(badHero)
          heroAdded(hero)
      }
  }
  
  const addGoodHero = (hero) =>{
    if(goodHeroQuantity.length === 3) {
        console.log('Maximum number of heroes with good orientation reached') 
      }else if(!searchHeroId (hero.id)) {
          console.log('You have that hero')
      }else{ 
        let goodHero = goodHeroQuantity + 1;
        setGoodHeroQuantity(goodHero)
        heroAdded(hero)
      }
  }

  const heroAdded = (data) => {
    let hero = {
      id: data.id,
      name: data.name,
      stats: data.powerstats,
      image: data.image.url,
      alignment: data.biography.alignment,
      weight: data.appearance.weight,
      height: data.appearance.height,
    };
    setSelectedHero([...selectedHero, hero]);
  };

  const deleteGoodHero = (hero) => {
    setGoodHeroQuantity(goodHeroQuantity - 1);
    deleteHero(hero)
    // deleteStats(hero)
  };

  const deleteBadHero = (hero) => {
    setVillainousQuantity(villainousQuantity - 1);
    deleteHero(hero)
    // deleteStats(hero)
  };

  const deleteHero = (hero) => {
    const filtered = selectedHero.filter(
      (filterHeros) => filterHeros.id !== hero.id
    );
    setSelectedHero(filtered)
  };

  return (
    <HeroContext.Provider 
      value={{
        addGoodHero,
        addBadHero,
        deleteBadHero, 
        deleteGoodHero,
        deleteHero,
        goodHeroQuantity,
        villainousQuantity,
        setSelectedHero,
        selectedHero,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </HeroContext.Provider>
  )
}
export default HeroProvider;
