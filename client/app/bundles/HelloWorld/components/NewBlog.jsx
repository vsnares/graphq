import React from 'react';
import { graphql } from 'react-apollo';
import { browserHistory } from 'react-router';
import gql from 'graphql-tag';
import Router from 'react-router/BrowserRouter'

class NewBlog extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  navigate() {
    const { router } = this.context
  }

  submitForm(event) {
    event.preventDefault();

    const { submit } = this.props;

    const blogFullName = event.target.blogFullName.value;
    console.log(blogFullName);

    return submit(blogFullName).then((res) => {
      if (!res.errors) {
        this.context.router.transitionTo('/')
      } else {
        this.setState({ errors: res.errors });
      }
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1>Add New Blog</h1>

        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Blog name
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="blogFullName"
              placeholder="blog name"
            />
          </div>

          {errors && (
            <div className="alert alert-danger" role="alert">
              {errors[0].message}
            </div>
          )}


          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

NewBlog.propTypes = {
  submit: React.PropTypes.func.isRequired,
};

NewBlog.contextTypes = {
  router: React.PropTypes.object
}

const NEW_BLOG_MUTATION = gql`
  mutation CreateBlogMutation($blogFullName: String!) {
    createBlog(blogFullName: $blogFullName) {
        title
    }
  }
`;


const NewBlogWithData = graphql(NEW_BLOG_MUTATION, {
  props: ({ mutate }) => ({
    submit: blogFullName => mutate({
      variables: {blogFullName},
    }),
  }),
})(NewBlog);

export default NewBlogWithData;
