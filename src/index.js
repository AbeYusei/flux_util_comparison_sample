import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import count from './model/count';
import App from './App';

// generate Redux store (for Rematch)
const store = init({
  models: {
    count,
  },
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
