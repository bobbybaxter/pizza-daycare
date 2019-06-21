import React from 'react';
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/propz/employeeShape';
import './StaffRoom.scss';
import Employee from '../Employee/Employee';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
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
