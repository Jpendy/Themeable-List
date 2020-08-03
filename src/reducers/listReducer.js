
export const initialState = {
  characters: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return { characters: action.payload };

    default: 
      return state;
  }
   
}
