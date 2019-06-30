import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-dark bg-dark text-white">
          <span>Pizza Daycare</span>
          { authed ? (
            <button className="btn btn-outline-danger my-2 my-sm-0" onClick={this.logMeOut}>Logout</button>
          ) : (
            ''
          )}
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
