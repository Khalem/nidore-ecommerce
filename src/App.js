import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Catalogue from './pages/catalogue/catalogue.component';
import ProductPage from './pages/product/product-page.component';
import Nav from './components/nav/nav.component';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Redirect strict exact from='/(womens|mens)/' to={'/(womens|mens)'} />
        <Route exact path='/womens' component={Catalogue} />
        <Route exact path='/mens' component={Catalogue} />
        <Route path='/:category(womens|mens)/:productID' component={ProductPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
