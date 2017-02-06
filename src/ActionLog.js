import React from 'react';
import Log from './Log';

const ActionLog = props => {
  return (
    <ul className="contact-list">
      {props.actionLog.map((log, index) => {
        return (
          <Log
            key={index}
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
