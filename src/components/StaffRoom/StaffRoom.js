import React from 'react';
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/propz/employeeShape';
import './StaffRoom.scss';

import employeesData from '../../helpers/data/employeesData';
import Employee from '../Employee/Employee';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  state = {
    employees: [],
  }

  loadEmployees = () => {
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('didnt load employees', err));
  }

  componentDidMount() {
    this.loadEmployees();
  }

  render() {
    const makeEmployees = this.state.employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));

    return (
      <div className="StaffRoom d-flex flex-row flex-wrap justify-content-around">
        { makeEmployees }
      </div>
    );
  }
}

export default StaffRoom;
