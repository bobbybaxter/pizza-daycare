import React from 'react';
import './App.scss';
import pizzaData from './pizza';
import employeeData from './employees';
import PizzaBox from '../components/PizzaBox/PizzaBox';
import Employee from '../components/Employee/Employee';

class App extends React.Component {
  state = {
    pizzas: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({
      pizzas: pizzaData,
      employees: employeeData,
    });
  }

  render() {
    const { pizzas } = this.state;
    const { employees } = this.state;

    return (
      <div className="App">
      <PizzaBox pizzas={pizzas} />
      <Employee employees={employees} />
    </div>
    );
  }
}

export default App;
