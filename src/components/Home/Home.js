import React from 'react';
import PizzaBox from '../PizzaBox/PizzaBox';
import StaffRoom from '../StaffRoom/StaffRoom';
import Lunch from '../Lunch/Lunch';
import LunchForm from '../LunchForm/LunchForm';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home d-flex flex-column">
        <div className="pb-3 mb-2 border-bottom">
          <h1>Lunch Form</h1>
          <LunchForm />
        </div>
        <div className="row">
          <div className="col">
            <PizzaBox />
          </div>
          <div className="col">
            <StaffRoom />
          </div>
          <div className="col">
            <Lunch />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
