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
        <div className="card">
          <img className="card-img-top pizza-header" src={employee.picture} alt={employee.name}/>
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
         </div>
        </div>
      </div>
    );
  }
}

export default Employee;
