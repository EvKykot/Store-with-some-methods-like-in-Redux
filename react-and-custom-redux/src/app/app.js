import React from 'react';

import store from "../redux/boot/store";
import {ReduxProvider} from "../redux/boot/redux-provider";

import logo from '../logo.svg';
import Counter from '../pages/counter/counter';

import './app.css';

const App = () => (
  <ReduxProvider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  </ReduxProvider>
);

export default App;
