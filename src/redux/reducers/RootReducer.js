import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import CartReducer from './CartReducer';

const RootReducer = combineReducers({
    ProductsReducer,
    CartReducer
});

export default RootReducer;