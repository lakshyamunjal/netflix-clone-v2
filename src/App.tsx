import React from "react";

import HomeScreen from "./screens/home/HomeScreen";

import { StoreProvider } from "./stores";
import { rootStore } from "./stores/root-store";

import "./App.scss";

function App() {
  return (
    <StoreProvider value={rootStore}>
      <div className="app">
        <HomeScreen />
      </div>
    </StoreProvider>
  );
}

export default App;
