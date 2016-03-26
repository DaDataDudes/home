import Firebase from 'firebase';
import Rebase from 're-base';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from 'routes';
import configureStore from 'store';
import { FIREBASE_URL } from 'config';
import 'styles/app.css';

const store = configureStore({
  base: Rebase.createClass(FIREBASE_URL),
});
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
