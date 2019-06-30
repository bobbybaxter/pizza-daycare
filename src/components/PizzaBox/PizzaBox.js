import React from 'react';
import PropTypes from 'prop-types';
import pizzaShape from '../../helpers/propz/pizzaShape';
import './PizzaBox.scss';

import pizzaData from '../../App/pizza';
import Pizza from '../Pizza/Pizza';

class PizzaBox extends React.Component {
  static propTypes = {
    pizza: PropTypes.arrayOf(pizzaShape.pizzaShape),
  }

  state = {
    pizzas: [],
  }

  componentDidMount() {
    this.setState({
      pizzas: pizzaData,
    });
  }

  render() {
    const makePizzas = this.state.pizzas.map(pizza => (
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
