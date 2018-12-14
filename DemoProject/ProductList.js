

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Product from './Product'
export default class ProductList extends Component {
  render() {   
    return (
      <View style={styles.container}>
         <Product style={styles.product} name="Sữa" price="2000000" image="16000" quantity="145"></Product>
         <Product style={styles.product} name="Kem" price="5500000" image="22000" quantity="1020"></Product>
         <Product style={styles.product} name="Bánh" price="1000000" image="61000" quantity="164"></Product>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { 
    padding: 10,
  },  
});
