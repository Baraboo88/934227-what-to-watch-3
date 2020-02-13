import PropTypes from 'prop-types';

export const cardPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}).isRequired;
