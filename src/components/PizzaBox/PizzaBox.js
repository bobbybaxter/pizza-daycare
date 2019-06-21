import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import pizzaShape from '../../helpers/propz/pizzaShape';
import './PizzaBox.scss';
import Pizza from '../Pizza/Pizza';

class PizzaBox extends React.Component {
  static propTypes = {
    pizza: PropTypes.arrayOf(pizzaShape.pizzaShape),
  }

  render() {
    const { pizzas } = this.props;
    const makePizzas = pizzas.map(pizza => (
      <Pizza key={pizza.id} pizza={pizza} />
    ));

    return (
      <div className="PizzaBox d-flex flex-row flex-wrap justify-content-around">
        {makePizzas}
      </div>
    );
  }
}

export default PizzaBox;
