import React, { Component } from 'react';
import marked from 'marked';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import initialInput from './initialInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialInput,
      preview: marked(initialInput),
    };
    this.onEditorChange = this.onEditorChange.bind(this);
  }
  onEditorChange(value) {
    this.setState({
      input: value,
      preview: marked(value),
    });
  }
  render() {
    return (
      <div className="App">
        <Editor onEditorChange={this.onEditorChange} value={this.state.input} />
        <Previewer preview={{ __html: this.state.preview }} />
      </div>
    );
  }
}

export default App;
