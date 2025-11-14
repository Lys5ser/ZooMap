import React from 'react';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="status-left">
        <span className="time">9:41</span>
      </div>
      <div className="status-right">
        <i className="fas fa-signal"></i>
        <i className="fas fa-wifi"></i>
        <i className="fas fa-battery-full"></i>
      </div>
    </div>
  );
};

export default StatusBar;
