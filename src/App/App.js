import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Navbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }


  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <Navbar authed={authed}/>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
