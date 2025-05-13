import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contextApi/UserContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from "./src/store";
import { Provider } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RLilMH62PQaH5UP9wK3O4DRAAONk5t0SwgFAaFUWfMaSHiw5a7FEDnmIqNOVVg2umNk1WHepYJvj1QCSaxsqboO00oMuAEz68');
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
