import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);