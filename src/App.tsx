import React from "react";

import { StoreProvider } from "./stores";
import { rootStore } from './stores/root-store';

import "./App.css";

function App() {
  return (
    <StoreProvider value={rootStore}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
