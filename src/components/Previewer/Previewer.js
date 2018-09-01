import React from 'react';
import './Preview.css';

const Preview = ({ preview }) => {
  return <div dangerouslySetInnerHTML={preview} id="preview" />;
};

export default Preview;
