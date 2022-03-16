import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import { browserHistory } from '../../routes/history';

const rootReducer = combineReducers({
  router: createRouterReducer(browserHistory),
});

export default rootReducer;