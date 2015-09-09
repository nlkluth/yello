'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import Router, {Route, DefaultRoute} from 'react-router';
import YelloApp from './yello.jsx';
import ChatBox from './chat/chatBox.jsx';
import ViewerBox from './viewers/viewerBox.jsx';
import BroadcastBox from './broadcast/broadcastBox.jsx';
import store from '../stores';

React.render(
  <Provider store={store}>
    {() =>
      <Router>
        <Route name="Home" component={YelloApp} path="/" />
        <Route name="Viewers" component={ViewerBox} />
        <Route name="Chat" component={ChatBox} />
      </Router>
    }
  </Provider>,
  document.getElementById('content')
);
