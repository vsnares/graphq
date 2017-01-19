import ReactOnRails from 'react-on-rails';
import React, { PropTypes } from 'react';
import BlogList from '../components/BlogList';
import Blog from '../components/Blog';
import NewBlogWithData from '../components/NewBlog';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {HashRouter, Match, Miss} from 'react-router'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphs/simple' }),
  dataIdFromObject: o => o.id
});

const MyQuery = gql `query {
  blog(id:3) {
    title
    content
  }
}`;

const AllBlogsQuery = gql` query {
  all_blogs {
    id
    title
    content
  }
}`;

const MyComponentWithData = graphql(MyQuery)(Blog);

const BlogListWithData = graphql(AllBlogsQuery)(BlogList);

const RoutingNoRedux = () => {
  return (
    <HashRouter hashType='hashbang'>
      <div className='App__wrapper'>
        <Match component={BlogListWithData}
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
