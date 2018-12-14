
import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { StackNavigator,createAppContainer } from "react-navigation";

import Home from './Home';
import DetailWord from './DetailWord';

const RootStack = StackNavigator(
  {
    Home: Home,
    DetailWord: DetailWord, 
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
