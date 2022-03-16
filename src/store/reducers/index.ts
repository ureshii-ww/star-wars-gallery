import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import { browserHistory } from '../../routes/history';
import peopleReducer from './people';

const rootReducer = combineReducers({
  router: createRouterReducer(browserHistory),
  people: peopleReducer,
});

export default rootReducer;