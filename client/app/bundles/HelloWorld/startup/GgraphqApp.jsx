import React from 'react';
import ReactOnRails from 'react-on-rails';

import HelloWorld from '../containers/HelloWorld';

const GraphqApp = (props) => (
  <HelloWorld {...props} />
);

// This is how react_on_rails can see the GraphqApp in the browser.
ReactOnRails.register({ GraphqApp });
