import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Catalogue from './pages/catalogue/catalogue.component';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/womens' component={Catalogue} />
      <Route exact path='/mens' component={Catalogue} />
    </Switch>
  );
}

export default App;
