import React, { Fragment, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import Catalogue from './pages/catalogue/catalogue.component';
import ProductPage from './pages/product/product-page.component';
import Nav from './components/nav/nav.component';
import MobileNav from './components/mobile-nav/mobile-nav.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import SignUpPage from './pages/sign-up/sign-up-page.component';
import BagPage from './pages/bag/bag-page.component';
import Checkout from './pages/checkout/checkout.component';
import Search from './components/search/search.component';

import { fetchDataStart } from './redux/shop/shop.actions';
import { checkUserSession, clearErrorMessage } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectBagItemsCount } from './redux/bag/bag.selectors';

import './App.scss';

const App = ({ checkUserSession, fetchDataStart, currentUser, clearUserErrorMessage, history }) => {
  // fetch data when component mounts
  useEffect(() => {
    fetchDataStart();
  }, []);

  // check for user
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // when user changes route, change error message to avoid old errors appearing
  useEffect(() => {
    clearUserErrorMessage();
  }, [history.location]);

  return (
    <Fragment>
      <MediaQuery minWidth={1280}>
        <Nav />
      </MediaQuery>
      <MediaQuery maxWidth={1280}>
        <MobileNav />
      </MediaQuery>
      <Search />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Redirect strict exact from='/(womens|mens)/' to={'/(womens|mens)'} />
        {/* <Route exact path='/womens' component={Catalogue} /> */}
        <Route exact path='/:category(womens|mens)' component={Catalogue} />
        <Route path='/:category(womens|mens)/:productID' component={ProductPage} />
        <Route exact path='/sign-in'>
          {currentUser ? <Redirect to='/' /> : <SignInPage />}
        </Route>
        <Route exact path='/sign-up'>
          {currentUser ? <Redirect to='/' /> : <SignUpPage />}
        </Route>
        <Route exact path='/shopping-bag' component={BagPage} />
        <Route exact path='/checkout'>
          {currentUser ? <Checkout /> : <Redirect to='/sign-in' />}
        </Route>
      </Switch>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  bagItemCount: selectBagItemsCount 
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()), 
  fetchDataStart: () => dispatch(fetchDataStart()),
  clearUserErrorMessage: () => dispatch(clearErrorMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));