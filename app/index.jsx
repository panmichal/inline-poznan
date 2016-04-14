import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';
import './css/main.css';

class Main extends React.Component {
  render() {
    return <Hello />
  }
}

let app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
