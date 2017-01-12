import React, { PropTypes } from 'react';
import BlogList from '../components/BlogList';
import Blog from '../components/Blog';
import NewBlogWithData from '../components/NewBlog';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphs/simple' }),
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

export default class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <NewBlogWithData />
        </ApolloProvider>
      </div>
    );
  }
}