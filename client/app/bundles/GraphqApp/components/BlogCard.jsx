import React from 'react'

export default class BlogCard extends React.Component {

  static propTypes = {
    blog: React.PropTypes.object.isRequired,
    handleCancel: React.PropTypes.func.isRequired,
  }

  render () {
    return (
      <div>
        <input
          value={this.props.blog.title}
          placeholder='Title'
          readOnly={true}
        />
        <input
          value={this.props.blog.content}
          placeholder='Content'
          readOnly={true}
        />
        <button onClick={this.props.handleCancel}>Cancel</button>
      </div>
    )
  }
}
