import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Header from "./components/header"
import TabScreen from "./screen/";

import { Provider } from 'react-redux';
import store from "./store"

export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
        <StatusBar
          backgroundColor="#008c85"
          animated={true}
          hidden={true}
        />
        <Header />
          <TabScreen />
      </Provider>
    );
  }
}
