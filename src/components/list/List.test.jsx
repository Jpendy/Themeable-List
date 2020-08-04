import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List characters={[{ image: 'image', name: 'Rick', species: 'human', status: 'alive' }, { image: 'image', name: 'Morty', species: 'human', status: 'alive' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
