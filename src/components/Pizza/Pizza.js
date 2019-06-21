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
      <div className="Pizza d-flex flex-row flex-wrap">
        <div className="card">
          <img className="card-img-top pizza-header" src={pizza.imageUrl} alt={pizza.type}/>
          <div className="card-body">
            <h5 className="card-title">{pizza.type}</h5>
            <p className="card-text">{pizza.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pizza;
