import React from 'react';

import pizzaShape from '../../helpers/propz/pizzaShape';

import './Pizza.scss';

class Pizza extends React.Component {
  static propTypes = {
    pizza: pizzaShape.pizzaShape,
  }

  render() {
    const { pizza } = this.props;

    return (
      <div className="Pizza">
        <div className="card d-flex flex-row">
          <img className="pizza-header" src={pizza.imageUrl} alt={pizza.type}/>
          <div className="card-body p-1">
            <h5 className="card-title">{pizza.type}</h5>
            <p className="card-text">{pizza.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pizza;
