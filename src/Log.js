import React from 'react';

const Log = props => {
  return (
    <li className="contact animated flipInX row">
      <div className="xs-col-1">
        <button
          onClick={() => props.clickHandle(props.log)}
          className="fa fa-times-circle"
          aria-hidden="false"
        />
      </div>
      <div className="xs-col-11">
        {props.log}
      </div>
    </li>
  );
};

export default Log;
