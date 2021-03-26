import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
const middleWare = [thunk];

const inititalState = {};
const store = createStore(
    RootReducer,
    inititalState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;