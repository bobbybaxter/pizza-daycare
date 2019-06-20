import React from 'react';
import './App.scss';
import pizzaData from './pizza';
import Pizza from '../components/Pizza/Pizza';

class App extends React.Component {
  state = {
    pizzas: [],
  }

  componentDidMount() {
    this.setState({ pizzas: pizzaData });
  }

  render() {
    const { pizzas } = this.state;

    return (
      <div className="App">
      <Pizza pizzas={pizzas} />
    </div>
    );
  }
}

export default App;
