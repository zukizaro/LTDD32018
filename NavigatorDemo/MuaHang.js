import React from 'react';
import { Button, View, Text } from 'react-native';
export default class MuaHang extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chọn số lượng Mua Hang</Text>    
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        /> 
      </View>
    );
  }
}