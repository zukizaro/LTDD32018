

import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text,Button, View  } from 'react-native';
import ProductItem from './ProductItem';
import {host} from './app.json'; 

export default class ProductList extends React.Component {

  static navigationOptions = {
    title: 'Products',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch(host+'/LTDD3WS/ProductGet.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  } 


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:10}}>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => <ProductItem code={item.code} name={item.name} quantity={item.quantity} image={item.image} navigation={this.props.navigation}/>}
        />
        <Button style={{paddingTop:10}}
          onPress={() => this.props.navigation.navigate('ProductAdd')}
          title="Add New Product"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}