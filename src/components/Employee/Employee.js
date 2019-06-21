import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';
import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    // const { employee } = this.props;

    return (
      <div className="Employee">
        This is an employee card!
      </div>
    );
  }
}

export default Employee;
