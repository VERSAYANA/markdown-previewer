import React from 'react';
import './Preview.css';

const Previewer = ({ preview }) => {
  return (
    <section class="section right">
      <header class="header">Preview</header>
      <div dangerouslySetInnerHTML={preview} id="preview" />
    </section>
  );
};

export default Previewer;
