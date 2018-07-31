import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render(){
    return (
      <div>Hello, <span style={{color: this.props.color}}>{this.props.value}</span></div>
    );
  }
}
class Text2 extends Component {
  render() {
    return (
    <div>This is the color <span style={{color: this.props.color}}>{this.props.value}</span>.</div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BOB's React</h1>
        </header>
        <h1 className="App-title"><Text color="Red" value="Bob"/></h1>

        <h2 className="App-text"><Text2 color="blue" value="BLUE"/></h2>
        <h2 className="App-text"><Text2 color="red" value="RED"/></h2>

      </div>
    );
  }
}

export default App;
