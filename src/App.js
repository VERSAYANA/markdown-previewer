import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <textarea
          onChange={this.handleChange}
          value={this.state.input}
          id="editor"
        />
      </div>
    );
  }
}

export default App;
