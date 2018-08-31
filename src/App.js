import React, { Component } from 'react';
import marked from 'marked';
import Preview from './Preview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      preview: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      preview: marked(event.target.value),
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
        <Preview preview={{ __html: this.state.preview }} />
      </div>
    );
  }
}

export default App;
