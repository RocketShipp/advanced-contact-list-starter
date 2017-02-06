import React from 'react';
import Log from './Log';

const ActionLog = props => {
  return (
    <ul className="contact-list">
      {props.actionLog.map(log => {
        return (
          <Log
            key={log._id}
            actionLogArray={props.actionLog}
            log={log}
            clickHandle={props.clickHandle}
          />
        );
      })}
    </ul>
  );
};

export default ActionLog;
