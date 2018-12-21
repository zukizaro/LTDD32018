

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {

  static navigationOptions = {
    title: 'Product Detail',
  };

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    const { navigation } = this.props;
    this.state = {
      image: navigation.getParam('image', 'http://i1.taimienphi.vn/tmp/cf/aut/hinh-anh-nguoi-mau.jpg'),
      code: navigation.getParam('code', 'code'),
      name: navigation.getParam('name', 'name'),
      quantity: navigation.getParam('quantity', '1'),
    };

    return (
      <View>
        <View style={styles.containerImage}>
          <Image
            resizeMode="contain"
            source={{ uri: this.state.image }}
            style={styles.image} /> 
        </View>
        <View style={styles.container}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 16}}>Mã sản phẩm: <Text style={{fontWeight:"normal"}}>{this.state.code}</Text></Text>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 16}}>Tên sản phẩm: <Text style={{fontWeight:"normal"}}>{this.state.name}</Text></Text>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 16}}>Số lượng tồn: <Text style={{fontWeight:"normal"}}>{this.state.quantity}</Text></Text>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  containerImage: {
    flex: 0,
    flexDirection: 'row',
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  boxImage: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: null,
    height: 200,
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

