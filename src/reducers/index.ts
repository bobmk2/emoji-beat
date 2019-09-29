import { State } from './../types/states/index';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducer = combineReducers<State>({
  routing: routerReducer
});

export default reducer;
