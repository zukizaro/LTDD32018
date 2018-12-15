import React from "react";
import { AppRegistry } from "react-native";
import A from "./A";
import { StackNavigator } from "react-navigation"; 
const reactNavigationSample = props => {
  return <A navigation={props.navigation} />;
};

reactNavigationSample.navigationOptions = {
  title: "Home Screen"
};

const SimpleApp = StackNavigator({
  Home: { screen: reactNavigationSample },
});

AppRegistry.registerComponent("reactNavigationSample", () => SimpleApp);
