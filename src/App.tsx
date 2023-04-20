import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

import { StoreProvider } from "./stores";
import { rootStore } from "./stores/root-store";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { loadStripe } from "@stripe/stripe-js";
import { PUBLIC_KEY, SECRET_KEY } from "./stripe";

const STRIPE_PROMISE = loadStripe(PUBLIC_KEY);

function App() {
  const options = {
    clientSecret: SECRET_KEY,
  };

  return (
    <StoreProvider value={rootStore}>
      <div className="app">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes />
      </div>
    </StoreProvider>
  );
}

export default App;
