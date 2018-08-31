import React from 'react';

const Preview = ({ preview }) => {
  return <div dangerouslySetInnerHTML={preview} id="preview" />;
};

export default Preview;
