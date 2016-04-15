import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box.jsx';
import Map from './components/Map.jsx';
import './css/main.css';

class Main extends React.Component {
  render() {
    return <Map />
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
