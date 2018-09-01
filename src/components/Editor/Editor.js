import React from 'react';
import './Editor.css';

const Editor = ({ onEditorChange, value }) => {
  const handleChange = (event) => {
    onEditorChange(event.target.value);
  };
  return (
    <section class="section">
      <header class="header">Editor</header>
      <textarea onChange={handleChange} value={value} id="editor" />
    </section>
  );
};

export default Editor;
