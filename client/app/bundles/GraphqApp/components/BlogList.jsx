import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Blog from '../components/Blog';

class BlogList extends React.Component {

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
            {console.log(this.props.data.all_blogs.count)}
            <Link to='/new_blog'>Create New Blog</Link><br />
            <ul className="blogs-list">
              {
                this.props.data.all_blogs.map(element => {
                  return <Blog    key={element.id}
                                  id={element.id}
                                  title={element.title}
                                  content={element.content}/>
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

const AllBlogsQuery = gql` query {
  all_blogs {
    id
    title
    content
  }
}`;

const BlogListWithData = graphql(AllBlogsQuery, {
  options: { forceFetch: true }
})(BlogList);

export default BlogListWithData
