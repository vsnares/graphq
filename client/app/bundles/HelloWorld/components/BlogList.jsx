import React, { PropTypes } from 'react';
import Blog from '../components/Blog';
import ReactDOM from 'react-dom';

class BlogList extends React.Component {
  constructor() {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() {
    console.log("componentWillMount");
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
          <div className="contacts">
            <ul className="contact-list">
              {
                this.props.data.all_blogs.map(element => {
                  return <Blog key=     {element.id}
                                  title=   {element.title}
                                  content= {element.content}/>
                })
              }
            </ul>
            <button onClick={this.update}>{ this.state.val }</button>
          </div>
        );
      }
    }

    componentDidMount() {
      console.log("componentDidMount");
    }

    componentWillMount() {

    }
  }

BlogList.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    all_blogs: PropTypes.array,
  }).isRequired,
};

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<BlogList />, document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='a'></div>
      </div>
    )
  }
}


export default BlogList;
