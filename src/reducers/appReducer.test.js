import reducer from './appReducer';

describe('list reducer', () => {
  it('sets characters with the SET_CHARACTERS action type', () => {
    const state = {
      characters: []
    };    

    const action = {
      type: 'SET_CHARACTERS',
      payload: [{
        image: 'sample image',
        name: 'Rick',
        species: 'Human',
        status: 'Alive'
      },
      {
        image: 'sample image',
        name: 'Morty',
        species: 'Human',
        status: 'Alive'
      }]
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      characters: [{
        image: 'sample image',
        name: 'Rick',
        species: 'Human',
        status: 'Alive'
      },
      {
        image: 'sample image',
        name: 'Morty',
        species: 'Human',
        status: 'Alive'
      }]
    });
  });

  it('it changes the theme from light to dark', () => {
    const state = {
      theme: 'light'
    };

    const action = {
      type: 'THEME_CHANGE'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'dark'
    });
  });

  it('it changes the theme from dark to light', () => {
    const state = {
      theme: 'dark'
    };

    const action = {
      type: 'THEME_CHANGE'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'light'
    });
  });
});
