import React, { PropTypes } from 'react';

class Blog extends React.Component {
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

// const Contact = (props) => {
//   if (props.data.loading) {
//     return (<div>Loading</div>)
//   }
//   return (
//     <li className="contact">
//       <div className="contact-info">
//
//         <div className="contact-name">Title: {  props.data.blog.title } </div>
//         <div className="contact-number">Content: { props.data.blog.content } </div>
//       </div>
//     </li>
//   )
// };
//
// Contact.propTypes = {
//   data: PropTypes.shape({
//     loading: PropTypes.bool.isRequired,
//     blog: PropTypes.object,
//   }).isRequired,
// };

export default Blog


// export default class Contact extends React.Component {
//   render() {
//     return(
//
//     );
//   }
// }
