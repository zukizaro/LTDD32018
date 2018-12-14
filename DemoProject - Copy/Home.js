

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';  
export default class Home extends Component {

  render() {
    return (
      <View></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Price: {
    color: '#333333',
  },
  Image: {
    marginRight: 5,
    marginBottom: 5,
    width: 70,
    height: 70,
    resizeMode: 'contain'
  },
});
