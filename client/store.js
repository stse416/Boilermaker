import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';




// Probably use this as the main rootReducer/store file

const initialState = {};

function dummyReducer (state = initialState, action) {
  return state;
}

const store = createStore(
  dummyReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;