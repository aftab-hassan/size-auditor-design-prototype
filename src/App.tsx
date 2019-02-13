import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const assetsData = require('./assetsData.json')
const modulesData = require('./modulesData.json');

class App extends Component {
  render() {
    console.log(assetsData[0]);
    return (
      <div className="App">
        <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
      
    </tr>
    <tr>
      <td>{assetsData[0].asset}</td>
      <td>{assetsData[0].sizeDifference}</td>
    </tr>
  </table>
      </div>
    );
  }
}

export default App;
