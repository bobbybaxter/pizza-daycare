import React from 'react';
import {
  Form, Label, Input,
} from 'reactstrap';

import './LunchForm.scss';

class LunchForm extends React.Component {
  loadPizzaSelectors = (pizzaId) => {
    const pizza = this.props.pizzas.find(x => x.id === pizzaId);
    const { pizzaOption } = this.props;
    return (
      pizzaOption === pizza.type ? (
        <option key={pizza.id} selected>
          {pizza.type}
        </option>
      ) : (
        <option key={pizza.id}>
          {pizza.type}
        </option>
      )
    );
  };

  loadEmployeeSelectors = (employeeId) => {
    const employee = this.props.employees.find(x => x.id === employeeId);
    const { employeeOption } = this.props;
    return (
      employeeOption === employee.name ? (
        <option key={employee.id} selected>
          {employee.name}
        </option>
      ) : (
        <option key={employee.id}>
          {employee.name}
        </option>
      )
    );
  };

  saveLunch = (e) => {
    e.preventDefault();
    this.props.saveNewLunch();
  }

  render() {
    const { lunchEditing } = this.props;
    const { dateOption } = this.props;
    const dateExists = dateOption.length > 0;
    const dateToPrint = dateExists ? dateOption : '';

    return (
      <div className="LunchForm container w-50">
        <Form className="form-face shadow p-5">
          <h3>{Object.keys(lunchEditing).length > 1 ? 'Edit Lunch' : 'Create New Lunch'}</h3>
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
            <Input type="date" name="date" id="lunchDate" defaultValue={dateToPrint} onChange={this.props.dateOptionChange}></Input>
          </div>
          {
            Object.keys(lunchEditing).length > 1 ? (
              <button type="submit" className="mt-3 btn btn-primary" onClick={this.saveLunch}>Edit Lunch</button>
            ) : (
              <button type="submit" className="mt-3 btn btn-primary" onClick={this.saveLunch}>Add New Lunch</button>
            )
          }
        </Form>
      </div>
    );
  }
}

export default LunchForm;
