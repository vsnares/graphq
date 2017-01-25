import ReactOnRails from 'react-on-rails';
import React, { PropTypes } from 'react';
import {HashRouter, Match, Miss} from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import BlogList from '../components/BlogList';
import NewBlogWithData from '../components/NewBlog';
import BlogPage from '../components/BlogPage';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphs/simple' }),
  dataIdFromObject: o => o.id
});

const RoutingNoRedux = () => {
  return (
    <HashRouter hashType='hashbang'>
      <div className='App__wrapper'>
        <Match component={BlogList}
            exactly
            pattern='/'
        />

        <Match component={NewBlogWithData}
            exactly
            pattern='/new_blog'
        />

  
      </div>
    </HashRouter>
  )
}

class GraphqApp extends React.Component {
  render() {
    return (
        <div>
          <ApolloProvider client={client}>
            <RoutingNoRedux />
          </ApolloProvider>
        </div>
    );
  }
}

// This is how react_on_rails can see the GraphqApp in the browser.
ReactOnRails.register({ GraphqApp });
