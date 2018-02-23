import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.text}</p>
      <p>{props.username}</p>
    </div>
  );
};

export default UserOutput;