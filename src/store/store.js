import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countryListReducer from './countryListReducer/countryListReducer';
import countrySearchReducer from './countrySearchReducer/countrySearchReducer';

const store = createStore(combineReducers({
  countryListReducer,
  countrySearchReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
