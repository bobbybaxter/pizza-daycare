import React from 'react';
import {
  Form, Label, Input,
} from 'reactstrap';

import './LunchForm.scss';

class LunchForm extends React.Component {
  loadPizzaSelectors = (pizzaId) => {
    const pizza = this.props.pizzas.find(x => x.id === pizzaId);
    return (
      <option key={pizza.id}>
        {pizza.type}
      </option>
    );
  };

  loadEmployeeSelectors = (employeeId) => {
    const employee = this.props.employees.find(x => x.id === employeeId);
    return (
      <option key={employee.id}>
        {employee.name}
      </option>
    );
  };

  saveLunch = (e) => {
    e.preventDefault();
    this.props.saveNewLunch();
  }

  render() {
    return (
      <div className="LunchForm container w-50">
        <Form className="form-face shadow p-5">
          <div className="form-group">
            <Label htmlFor="pizzaFormSelections">Select a Pizza</Label>
            <Input type="select" placeholder="" name="select" id="pizzaFormSelections" onChange={this.props.pizzaOptionChange}>
              {this.props.pizzaIds.map(this.loadPizzaSelectors)}
            </Input>
          </div>
          <div className="form-group">
            <Label htmlFor="employeeFormSelections">Select an Employee</Label>
            <Input type="select" placeholder="" name="select" id="employeeFormSelections" onChange={this.props.employeeOptionChange}>
              {this.props.employeeIds.map(this.loadEmployeeSelectors)}
            </Input>
          </div>
          <div className="form-group">
            <Label htmlFor="lunchDate">Select a Date</Label>
            <Input type="date" name="select" id="lunchDate" onChange={this.props.dateOptionChange}></Input>
          </div>
          <button type="submit" className="mt-3 btn btn-primary" onClick={this.saveLunch}>Add New Lunch</button>
        </Form>
      </div>
    );
  }
}

export default LunchForm;
