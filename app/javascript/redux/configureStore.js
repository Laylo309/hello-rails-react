import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './Greetings/greeting';

const reducer = combineReducers({
  greeting: rootReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
