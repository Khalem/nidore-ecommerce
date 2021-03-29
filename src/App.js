import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import HomePage from './pages/homepage/homepage.component';
import Catalogue from './pages/catalogue/catalogue.component';
import ProductPage from './pages/product/product-page.component';
import Nav from './components/nav/nav.component';
import MobileNav from './components/mobile-nav/mobile-nav.component';
import SignInPage from './pages/sign-in/sign-in-page.component';

import './App.scss';

function App() {
  return (
    <Fragment>
      <MediaQuery minWidth={1280}>
        <Nav />
      </MediaQuery>
      <MediaQuery maxWidth={1280}>
        <MobileNav />
      </MediaQuery>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Redirect strict exact from='/(womens|mens)/' to={'/(womens|mens)'} />
        <Route exact path='/womens' component={Catalogue} />
        <Route exact path='/mens' component={Catalogue} />
        <Route path='/:category(womens|mens)/:productID' component={ProductPage} />
        <Route exact path='/sign-in' component={SignInPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
