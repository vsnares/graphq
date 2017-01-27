import ReactOnRails from 'react-on-rails';
import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import BlogList from '../components/BlogList';
import NewBlogWithData from '../components/NewBlog';
import BlogPage from '../components/BlogPage';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphs/simple' }),
  dataIdFromObject: o => o.id
});


class GraphqApp extends React.Component {
  render() {
    return (
        <div>
          <ApolloProvider client={client}>
            <Router history={browserHistory}>
              <Route path='/blogs' component={BlogList} />
              <Route path='/new_blog' component={NewBlogWithData} />
              <Route path='/view/:blogId' component={BlogPage} />
            </Router>
          </ApolloProvider>
        </div>
    );
  }
}

// This is how react_on_rails can see the GraphqApp in the browser.
ReactOnRails.register({ GraphqApp });
