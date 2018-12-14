/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';
// import App from './ProductGet';
import App from './Home';
 
AppRegistry.registerComponent(appName, () => App);
