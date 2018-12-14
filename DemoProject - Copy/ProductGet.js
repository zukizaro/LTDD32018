

import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import Product from './Product';
export default class ProductGet extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.8/LTDD3WS/ProductGet.php')
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
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Product code={item.code} name={item.name} quantity={item.quantity} image={item.image}/>}
         
        />
      </View>
    );
  }
}