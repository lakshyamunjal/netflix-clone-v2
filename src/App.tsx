import React from "react";

import Routes from "./routes";

import { StoreProvider } from "./stores";
import { rootStore } from "./stores/root-store";

import "./App.scss";

function App() {
  return (
    <StoreProvider value={rootStore}>
      <div className="app">
        <Routes />
      </div>
    </StoreProvider>
  );
}

export default App;
