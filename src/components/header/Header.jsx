import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ theme, dispatch }) => {

  const handleClick = () => {
    dispatch({ type: 'THEME_CHANGE' });
  };

  return (
    <button name='theme' onClick={handleClick} >{theme}</button>
  );
};

export default Header;

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
