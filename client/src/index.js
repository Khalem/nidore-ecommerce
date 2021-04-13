import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { store, persistor} from './redux/store';

import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE);



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
          <ScrollToTop />
          <App />
        </Elements>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
