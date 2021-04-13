import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
          <Route exact path='/sign-in'>
            {this.props.currentUser ? <Redirect to='/' /> : <SignInPage />}
          </Route>
          <Route exact path='/sign-up'>
            {this.props.currentUser ? <Redirect to='/' /> : <SignUpPage />}
          </Route>
          <Route exact path='/shopping-bag' component={BagPage} />
          <Route exact path='/checkout'>
            {this.props.currentUser ? <Checkout /> : <Redirect to='/sign-in' />}
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);