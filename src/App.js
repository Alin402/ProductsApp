import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import AddProduct from './components/products/AddProduct';
import PrintProducts from './components/products/PrintProducts';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/alert/Alert';
import Product from './components/products/Product';
import ProductList from './components/productList/ProductList';
import PrintList from './components/products/PrintList';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section style={{marginTop: '100px'}}>
            <Alert />
            <Switch>
              <Route exact path='/' component={Products} />
              <Route exact path='/product/add' component={AddProduct} />
              <Route exact path='/product/print' component={PrintProducts} />
              <Route exact path='/product/:id' component={Product} />
              <Route exact path='/productlist' component={ProductList} />
              <Route exact path='/printlist' component={PrintList} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
