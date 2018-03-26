import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { throttle } from 'lodash';

import 'semantic-ui-css/semantic.min.css';
import 'roboto-fontface/css/roboto-condensed/sass/roboto-condensed-fontface.scss';

import configureStore from './store/configureStore';
import configureHistory from './history/configureHistory';

import MainContainer from './containers/MainContainer';
import { saveState } from './localStorage';

require('./scss/global.scss');

const store = configureStore();
const history = configureHistory();

store.subscribe(throttle(() => {
  saveState({ activeUser: store.getState().ui.activeUser });
}, 5000));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <Component />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

render(MainContainer);

if (module.hot) {
  module.hot.accept('./containers/MainContainer', () => { render(MainContainer); });
}
