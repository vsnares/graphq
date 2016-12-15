// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.

import React, { PropTypes } from 'react';
import Contact from '../components/Contact';

var BLOGS = [
            {
                id: 1,
                title: 'First Blog',
                content: 'Some content of the first',
            }, {
                id: 2,
                title: 'Second Blof',
                content: 'Some content of the second',
            }, {
                id: 3,
                title: 'Third Blog',
                content: 'Some content of the third',
            }, {
                id: 4,
                title: 'Fourth Blog',
                content: 'some content of the fourth',
            }
        ];

export default class ContactList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {displayedBlogs: BLOGS}
  }

  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase()
    let displayedBlogs = BLOGS.filter( el => {
      let searchValue = el.title.toLowerCase()
      return searchValue.indexOf(searchQuery) !== -1
    });

    this.setState({displayedBlogs: displayedBlogs});

  }

  render() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" onChange={this.handleSearch.bind(this)} />
        <ul className="contact-list">
          {
            this.state.displayedBlogs.map(element => {
              return <Contact key=     {element.id}
                              title=   {element.title}
                              content= {element.content}/>
            })
          }
        </ul>
      </div>
    );
  }
}
