import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import ShootingStar from './components/ShootingStar';
import './App.css';
import './styles/components.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ShootingStar />
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
