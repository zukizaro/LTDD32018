

import React, {Component} from 'react';
 
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import {host} from './app.json'; 
 
export default class ProductAdd extends React.Component
{
    
    static navigationOptions = {
        title: 'Add new product',
    };
    
    constructor()
    {
        super();
        this.state = { 
          code: '', 
          name: '', 
          quantity: '',
          ActivityIndicator_Loading: false, 
        }
    }
 
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch(host+'/LTDD3WS/InsertProduct.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  code : this.state.code,
                  name : this.state.name,
                  quantity : this.state.quantity
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
                this.props.navigation.navigate('ProductList')
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
 
    render()
    {
        return(
 
            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Nhập mã sản phẩm"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ code: TextInputText })} />
 
                <TextInput 
                  placeholder = "Nhập tên sản phẩm"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ name: TextInputText })} />
 
                <TextInput  
                  placeholder = "Nhập số lương" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ quantity: TextInputText })} />
    
                <View>

                </View>
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>
                    <Text style = { styles.TextStyle }>Thêm sản phẩm</Text>
                </TouchableOpacity> 
                {
                    this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
 
    },
 
    TextInputStyleClass:
    {
 
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
 
    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});