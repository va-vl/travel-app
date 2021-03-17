import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countrySearchReducer from './countrySearchReducer/countrySearchReducer';
import countryListReducer from './countryListReducer/countryListReducer';
import countryPageReducer from './countryPageReducer/countryPageReducer';
import registerReducer from './registerReducer/registerReducer';

const store = createStore(combineReducers({
  countrySearchReducer,
  countryListReducer,
  countryPageReducer,
  registerReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
