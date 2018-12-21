import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import ProductList from './ProductList';
import ProductAdd from './ProductAdd';

const RootStack = createStackNavigator(
  {
    ProductList: ProductList,
    ProductAdd: ProductAdd,
  },
  {
    initialRouteName: 'ProductList',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
