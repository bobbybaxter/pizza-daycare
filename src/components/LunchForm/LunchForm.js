import React from 'react';
import pizzaData from '../../helpers/data/pizzasData';

class LunchForm extends React.Component {
  state = {
    pizzas: [],
    pizzaSelectors: [],
  }

  loadPizzas = () => {
    pizzaData.getPizzas()
      .then(pizzas => this.setState({ pizzas }))
      .catch(err => console.error('pizzas didnt load', err));
  }

  componentDidMount() {
    this.loadPizzas();
  }

  loadPizzaSelectors = (items) => {
    const pizzaArray = [];
    items.forEach((item) => {
      console.error(item.type);
      pizzaArray.push(`<option>${item.type}</option>`);
    });
    console.error(pizzaArray.toString());
    return pizzaArray.toString();
  };

  render() {
    const { pizzas } = this.state;

    return (
      <div className="LunchForm container w-50">
        <form>
          <div className="form-group">
            <label htmlFor="pizzaFormSelections">Select a Pizza</label>
            <select className="form-control" id="pizzaFormSelections">
              {this.loadPizzaSelectors(pizzas)}
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Add Lunch</button>
        </form>
      </div>
    );
  }
}

export default LunchForm;
