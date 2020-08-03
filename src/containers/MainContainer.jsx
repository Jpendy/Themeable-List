import React from 'react';
import { useCharacters } from '../hooks/appContext';
import List from '../components/list/List';

const MainContainer = () => {
    
  const characters = useCharacters();
  console.log(characters);
  return (
    <>
    hello
      <List characters={characters}/>
    </>
  );
};

export default MainContainer;
