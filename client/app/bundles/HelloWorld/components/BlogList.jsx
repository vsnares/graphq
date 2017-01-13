import React, { PropTypes } from 'react';
import Blog from '../components/Blog';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Redirect from 'react-router/Redirect'

class BlogList extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("render")
    if (this.props.data.loading) {
      return (
        <p className="navbar-text navbar-right">
          Loading...
        </p>
      );
    } else if (this.props.data.all_blogs)  {
        return (
          <div className="blogs">
            <Link to='/new_blog'>Create New Blog</Link><br />
            <ul className="blogs-list">
              {
                this.props.data.all_blogs.map(element => {
                  return <Blog key=     {element.id}
                                  title=   {element.title}
                                  content= {element.content}/>
                })
              }
            </ul>
          </div>
        );
      }
    }
  }

BlogList.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    all_blogs: PropTypes.array,
  }).isRequired,
};

export default BlogList;
