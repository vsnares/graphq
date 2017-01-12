import React from 'react';
import ReactOnRails from 'react-on-rails';

import MainContainer from '../containers/MainContainer';

const GraphqApp = (props) => (
  <MainContainer {...props} />
);

// This is how react_on_rails can see the GraphqApp in the browser.
ReactOnRails.register({ GraphqApp });
