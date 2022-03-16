import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { browserHistory } from './routes/history';

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter store={store} history={browserHistory}>
      <App />
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);
