import { Details } from '@material-ui/icons';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Home from '../components/home/Home';
import ProductDetails from '../components/product/ProductDetails';
import Products from '../components/product/Products';

export default function MainRoutes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/details/:id" component={ProductDetails} exact />
        </Switch>
    )
}
