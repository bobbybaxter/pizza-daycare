import React from 'react';
import PizzaBox from '../PizzaBox/PizzaBox';
import StaffRoom from '../StaffRoom/StaffRoom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home col">
        <div className="row">
          <div className="col">
            <PizzaBox />
          </div>
          <div className="col">
            <StaffRoom />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
