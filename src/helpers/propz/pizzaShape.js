// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const pizzaShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default pizzaShape;
