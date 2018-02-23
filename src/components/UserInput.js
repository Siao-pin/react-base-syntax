import React from 'react';

const UserInput = (props) => {
  const styles = {
    padding: '5px',
    boxSizing: 'border-box',
    border: '2px solid #444',
    font: '14px/16px Arial, sans-serif', 
  };

  return (
    <input style={styles} onChange={props.change} defaultValue={props.value} />
  );
};

export default UserInput;