import React from "react";
import { StatusBar } from "react-native";

import Drawer from "./components/header/drawer"

import { Provider } from 'react-redux';
import store from "./store"

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#008c85"
        animated={true}
        hidden={true}
      />
          <Drawer />
    </Provider>
  );
}
