import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countryListReducer from './CountryListReducer/CountryListReducer';

const store = createStore(combineReducers({
  countryListReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
