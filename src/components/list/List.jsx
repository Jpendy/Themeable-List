import React from 'react';
import PropTypes from 'prop-types';

const List = ({ characters }) => {

  const listElement = characters.map((item, i) => {
    return (
      <li key={i} >
        <img src={item.image} />
        <p>{item.name}</p>
        <p>Species: {item.species}</p>
        <p>Status: {item.status}</p>
      </li>
    );
  });

  return (
    <ul>
      {listElement}
    </ul>
  );
};

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default List;
