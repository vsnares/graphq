import React, { PropTypes } from 'react';

export default class Contact extends React.Component {
  render() {
    return(
      <li className="contact">
        <div className="contact-info">
          <div className="contact-name"> {this.props.title} </div>
          <div className="contact-number"> {this.props.content} </div>
        </div>
      </li>
    );
  }
}
