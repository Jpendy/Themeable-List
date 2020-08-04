import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, previousPage, nextPage }) => {
  return (
    <div>
      <button disabled={page === 0} onClick={previousPage}>&lt;</button>
      <button onClick={nextPage}>&gt;</button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default Pagination;
