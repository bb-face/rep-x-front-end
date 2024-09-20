import React from 'react';

const Terminal = ({ children }) => {
  return (
    <span className="font-mono">{children}</span>
  );
};

export default Terminal;