import React from 'react';
import pizzaShape from '../../helpers/propz/pizzaShape';
import './Pizza.scss';

class Pizza extends React.Component {
  static propTypes = {
    pizza: pizzaShape.pizzaShape,
  }

  render() {
    // const { pizza } = this.props;

    return (
      <div className="Pizza border">
        This is a pizza
      </div>
    );
  }
}

export default Pizza;
