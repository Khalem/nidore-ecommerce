import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import Catalogue from './pages/catalogue/catalogue.component';
import ProductPage from './pages/product/product-page.component';
import Nav from './components/nav/nav.component';
import MobileNav from './components/mobile-nav/mobile-nav.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import SignUpPage from './pages/sign-up/sign-up-page.component';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

        console.log(this.state);
      } else {
        this.setState({ currentUser: userAuth });
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
          <Nav currentUser={this.state.currentUser} />
        </MediaQuery>
        <MediaQuery maxWidth={1280}>
          <MobileNav currentUser={this.state.currentUser} />
        </MediaQuery>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Redirect strict exact from='/(womens|mens)/' to={'/(womens|mens)'} />
          <Route exact path='/womens' component={Catalogue} />
          <Route exact path='/mens' component={Catalogue} />
          <Route path='/:category(womens|mens)/:productID' component={ProductPage} />
          <Route exact path='/sign-in' component={SignInPage} />
          <Route exact path='/sign-up' component={SignUpPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
