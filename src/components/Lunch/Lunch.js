import React from 'react';

import './Lunch.scss';

class Lunch extends React.Component {
  render() {
    const { lunch } = this.props;

    return (
      <div className="Lunch">
        <div className="card d-flex flex-row">
          <div className="card-body p-1">
            <h5 className="card-title">{lunch.date}</h5>
            <p className="card-text">{lunch.employeeName}</p>
            <p className="card-text">{lunch.pizzaType}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Lunch;
