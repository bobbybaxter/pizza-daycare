import React from 'react';

import employeeShape from '../../helpers/propz/employeeShape';

import './Employee.scss';


class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;

    return (
      <div className="Employee">
        <div className="card d-flex flex-row">
          <img className="employee-header" src={employee.picture} alt={employee.name}/>
          <div className="card-body p-1">
            <h5 className="card-title">{employee.name}</h5>
            <p>{employee.email}</p>
            <p>{employee.phone}</p>
         </div>
        </div>
      </div>
    );
  }
}

export default Employee;
