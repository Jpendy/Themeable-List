export const fetchCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(({ results }) => results.map(item => {
      return {
        name: item.name,
        status: item.status,
        species: item.species,
        image: item.image
      };
    }));
}; 

