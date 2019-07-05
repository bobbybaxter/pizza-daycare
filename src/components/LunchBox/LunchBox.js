import React from 'react';

import Lunch from '../Lunch/Lunch';

import './LunchBox.scss';

class LunchBox extends React.Component {
  renderLunch = () => {
    const lunchList = this.props.lunches.map((lunch) => {
      const l = lunch;
      const selectedEmployee = this.props.employees.find(employee => employee.id === l.employeeId);
      if (selectedEmployee) {
        l.employeeName = selectedEmployee.name;
      }
      const selectedPizza = this.props.pizzas.find(pizza => pizza.id === l.pizzaId);
      if (selectedPizza) {
        l.pizzaType = selectedPizza.type;
      }
      return l;
    });
    return lunchList;
  }

  render() {
    const passedLunch = this.renderLunch();
    console.error(passedLunch);
    const makeLunches = passedLunch.map(lunch => (
      <Lunch key={lunch.id} lunch={lunch}/>
    ));

    return (
      <div className="LunchBox">
        <h2>Lunches</h2>
        { makeLunches }
      </div>
    );
  }
}

export default LunchBox;
