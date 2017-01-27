import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class NewBlog extends React.Component {

  static propTypes = {
    router: React.PropTypes.object.isRequired,
    mutate: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired,
  }

  state = {
    title: '',
    content: '',
  }

  render () {
    return (
      <div>
        <input
          value={this.state.title}
          placeholder='title'
          onChange={(e) => this.setState({title: e.target.value})}
        />
      <br/>
        <input
          value={this.state.content}
          placeholder='Content'
          onChange={(e) => this.setState({content: e.target.value})}
        />
        <div>
          <button onClick={this.handleCancel}>Cancel</button>
          {this.canSave()
            ? <button onClick={this.handleSave}>Save</button>
            : <button disabled>Save</button>
          }
        </div>
      </div>
    )
  }

  canSave = () => {
    return this.state.title && this.state.content
  }

  handleSave = () => {
    const {title, content} = this.state
    this.props.mutate({variables: {title, content}})
      .then(() => {
        this.props.router.replace('/blogs')
      })
  }

  handleCancel = () => {
    this.props.router.replace('/blogs')
  }
}

const NEW_BLOG_MUTATION = gql`
  mutation CreateBlogMutation($title: String!, $content: String!) {
    createBlog(title: $title, content: $content) {
        title
        content
    }
  }
`;

const NewBlogWithdata = graphql(NEW_BLOG_MUTATION)(withRouter(NewBlog))

export default NewBlogWithdata
