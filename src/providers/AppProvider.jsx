import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { fetchCharacters } from '../services/rickAndMortyAPI';
import usePagination from '../hooks/usePagination';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { page } = usePagination();

  useEffect(() => {
    fetchCharacters(page)
      .then(characters => dispatch({ type: 'SET_CHARACTERS', payload: characters }));
  }, [page]);

  return (
    <AppContext.Provider value={{ state, dispatch }} >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
