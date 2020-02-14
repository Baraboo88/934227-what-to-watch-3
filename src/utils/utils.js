import PropTypes from 'prop-types';

export const cardPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avgMark: PropTypes.number.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string.isRequired),
  director: PropTypes.string.isRequired,
  stares: PropTypes.arrayOf(PropTypes.string.isRequired),
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}).isRequired;
