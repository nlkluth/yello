'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import Router, {Route, DefaultRoute} from 'react-router';
import YelloApp from './yello.jsx';
import ChatBox from './chat/chatBox.jsx';
import ViewerBox from './viewers/viewerBox.jsx';
import BroadcastBox from './broadcast/broadcastBox.jsx';
import store from '../stores';

let routes = (
  <Route name="Home" handler={YelloApp} path="/">
    <Route name="Viewers" handler={ViewerBox} />
    <Route name="Chat" handler={ChatBox} />
    <DefaultRoute handler={BroadcastBox} />
  </Route>
);

Router.run(routes, (Handler, routerState) =>
  React.render(
  <Provider store={store}>
    {() => <Handler routerSate={routerState} />}
  </Provider>,
  document.getElementById('content')
));
