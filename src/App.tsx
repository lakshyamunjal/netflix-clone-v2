import React from "react";

import Root from "./screens/root/RootScreen";

import { StoreProvider } from "./stores";
import { rootStore } from "./stores/root-store";

import "./App.scss";

function App() {
  return (
    <StoreProvider value={rootStore}>
      <div className="app">
        <Root />
      </div>
    </StoreProvider>
  );
}

export default App;
