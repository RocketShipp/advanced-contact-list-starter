import React from 'react';

const Contact = props => {
  return (
    <li className="contact animated flipInX" onClick={() => props.clickHandle(props.id)}>
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar"/>
      </div>
      <div className="contact-info">
        <h2>{props.name}</h2>
        {props.occupation}
      </div>
    </li>
  );
};

React.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired,
  handleSelect: React.PropTypes.func.isRequired
};

export default Contact;
