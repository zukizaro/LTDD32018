/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';
import App from './ProductGet';
 
AppRegistry.registerComponent(appName, () => App);
