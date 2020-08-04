export const fetchCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
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

