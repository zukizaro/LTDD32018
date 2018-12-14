import React from 'react';
import { StackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Home from './Home';
import DetailWord from './DetailWord';

const RootStack = createStackNavigator(
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
