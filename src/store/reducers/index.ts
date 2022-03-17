import { combineReducers } from 'redux';
import peopleReducer from './people';
import personReducer from './person';

const rootReducer = combineReducers({
  people: peopleReducer,
  person: personReducer
});

export default rootReducer;