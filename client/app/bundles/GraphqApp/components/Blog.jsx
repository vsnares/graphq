import React, { PropTypes } from 'react';
import { Link } from 'react-router'

export default class Blog extends React.Component {

  render() {
    return(
      <div className="blog-prewiew">
        <Link to={`/view/${this.props.id}`}>
          <li className="blog-name"> {this.props.title} </li>
        </Link>
        <p className="blog-content"> {this.props.content} </p>
      </div>
    );
  }
}
