import React from 'react';

import './Lunch.scss';

class Lunch extends React.Component {
  deleteLunchEvent = (e) => {
    const { lunch, deleteLunch } = this.props;
    e.preventDefault();
    deleteLunch(lunch.id);
  }

  editLunch = (e) => {
    e.preventDefault();
    const { lunch, selectLunchToEdit } = this.props;
    selectLunchToEdit(lunch.id);
  }

  render() {
    const { lunch } = this.props;

    return (
      <div className="Lunch">
        <div className="card d-flex flex-row">
          <div className="card-body p-1">
            <div className="d-flex flex-column">
              <h5 className="card-title">{lunch.date}</h5>
              <p className="card-text">{lunch.employeeName}</p>
              <p className="card-text">{lunch.pizzaType}</p>
            </div>
            <div className="buttonRow d-flex flex-row justify-content-around mt-3">
              <button className="btn btn-outline-primary" onClick={this.editLunch}>edit</button>
              <button className="btn btn-outline-danger" onClick={this.deleteLunchEvent}>delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lunch;
