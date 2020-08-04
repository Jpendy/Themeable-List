import React from 'react';
import { useCharacters } from '../hooks/appContext';
import List from '../components/list/List';
import Header from '../components/header/Header';
import Pagination from '../components/pagination/Pagination';
import usePagination from '../hooks/usePagination';
import { useTheme, useDispatch } from '../hooks/appContext';

const MainContainer = () => {


  const pageStuff = usePagination();
  const characters = useCharacters();
  const theme = useTheme();
  const dispatch = useDispatch();


  return (
    <>
      <Header theme={theme} dispatch={dispatch} />
      <Pagination {...pageStuff} />
      <List characters={characters} theme={theme}/>
    </>
  );
};

export default MainContainer;
