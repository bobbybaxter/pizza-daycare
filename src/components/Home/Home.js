import React from 'react';
import PizzaBox from '../PizzaBox/PizzaBox';
import StaffRoom from '../StaffRoom/StaffRoom';
import LunchBox from '../LunchBox/LunchBox';
import LunchForm from '../LunchForm/LunchForm';

import lunchesData from '../../helpers/data/lunchesData';
import pizzaData from '../../helpers/data/pizzasData';
import employeeData from '../../helpers/data/employeesData';

import './Home.scss';

class Home extends React.Component {
  state = {
    pizzaOption: '',
    employeeOption: '',
    dateOption: '',
    pizzas: [],
    pizzaIds: [],
    employees: [],
    employeeIds: [],
    lunches: [],
    lunchEditing: {},
  }

  loadPizzas = () => {
    pizzaData.getPizzas()
      .then((pizzas) => {
        const pIds = [];
        pizzas.map(pizza => pIds.push(pizza.id));
        this.setState({ pizzas, pizzaIds: pIds });
      })
      .catch(err => console.error('pizzas didnt load', err));
  }

  loadEmployees = () => {
    employeeData.getEmployees()
      .then((employees) => {
        const eIds = [];
        employees.map(employee => eIds.push(employee.id));
        this.setState({ employees, employeeIds: eIds });
      })
      .catch(err => console.error('employees didnt load', err));
  }

  loadLunches = () => {
    lunchesData.getLunches()
      .then(lunches => this.setState({ lunches }))
      .catch(err => console.error('didnt load employees', err));
  }

  componentDidMount() {
    this.loadPizzas();
    this.loadEmployees();
    this.loadLunches();
  }

  deleteLunch = (lunchId) => {
    lunchesData.deleteLunch(lunchId)
      .then(() => this.loadLunches())
      .catch(err => console.error('lunch did not delete', err));
  }

  pizzaOptionChange = (e) => {
    e.preventDefault();
    this.setState({ pizzaOption: e.target.value });
  }

  employeeOptionChange = (e) => {
    e.preventDefault();
    this.setState({ employeeOption: e.target.value });
  }

  dateOptionChange = (e) => {
    e.preventDefault();
    this.setState({ dateOption: e.target.value });
  }

  selectLunchToEdit = (lunchId) => {
    const selectedLunch = this.state.lunches.find(x => x.id === lunchId);
    this.setState({
      lunchEditing: selectedLunch,
      pizzaOption: selectedLunch.pizzaType,
      employeeOption: selectedLunch.employeeName,
      dateOption: selectedLunch.date,
    });
  }

  makeNew = () => {
    const selectedPizza = this.state.pizzas.find(pizza => pizza.type === this.state.pizzaOption);
    const selectedEmployee = this.state.employees.find(
      employee => employee.name === this.state.employeeOption,
    );
    const newLunch = {
      date: this.state.dateOption,
      pizzaId: selectedPizza.id,
      employeeId: selectedEmployee.id,
    };
    lunchesData.postLunch(newLunch)
      .then(() => {
        this.setState({
          lunchEditing: {}, pizzaOption: 'Cheese Pizza', employeeOption: 'Sabrina', dateOption: '',
        });
        this.loadLunches();
      })
      .catch(err => console.error('didnt post lunch', err));
  }

  updateExisting = () => {
    const updatedLunch = { ...this.state.lunchEditing };
    const lunchId = updatedLunch.id;
    updatedLunch.pizzaType = this.state.pizzaOption;
    updatedLunch.employeeName = this.state.employeeOption;
    updatedLunch.date = this.state.dateOption;
    const selectedPizza = this.state.pizzas.find(pizza => pizza.type === this.state.pizzaOption);
    const selectedEmployee = this.state.employees.find(
      employee => employee.name === this.state.employeeOption,
    );
    updatedLunch.pizzaId = selectedPizza.id;
    updatedLunch.employeeId = selectedEmployee.id;
    delete updatedLunch.id;
    delete updatedLunch.employeeName;
    delete updatedLunch.pizzaType;
    lunchesData.putLunch(lunchId, updatedLunch)
      .then(() => this.loadLunches())
      .then(() => {
        this.setState({
          lunchEditing: {},
          pizzaOption: 'Cheese Pizza',
          employeeOption: 'Sabrina',
          dateOption: '',
        });
      })
      .catch(err => console.error('didnt update lunch', err));
  }

  saveNewLunch = () => {
    if (Object.keys(this.state.lunchEditing).length > 0) {
      this.updateExisting();
    } else {
      this.makeNew();
    }
  }

  render() {
    const {
      pizzaOption,
      employeeOption,
      dateOption,
      pizzas,
      pizzaIds,
      employees,
      employeeIds,
      lunches,
      lunchEditing,
    } = this.state;
    return (
      <div className="Home d-flex flex-column">
        <div className="pb-3 mb-2 border-bottom">
          <h1>Lunch Form</h1>
          <LunchForm
            pizzaOption={pizzaOption}
            pizzaOptionChange={this.pizzaOptionChange}
            employeeOption={employeeOption}
            employeeOptionChange={this.employeeOptionChange}
            dateOption={dateOption}
            dateOptionChange={this.dateOptionChange}
            saveNewLunch={this.saveNewLunch}
            pizzas={pizzas}
            pizzaIds={pizzaIds}
            employees={employees}
            employeeIds={employeeIds}
            loadPizzas={this.loadPizzas}
            loadEmployees={this.loadEmployees}
            lunchEditing={lunchEditing}
            saveEditedLunch={this.saveEditedOrder}
          />
        </div>
        <div className="row">
          <div className="col">
            <PizzaBox />
          </div>
          <div className="col">
            <StaffRoom />
          </div>
          <div className="col">
            <LunchBox
            pizzas={pizzas}
            employees={employees}
            lunches={lunches}
            deleteLunch={this.deleteLunch}
            selectLunchToEdit={this.selectLunchToEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
