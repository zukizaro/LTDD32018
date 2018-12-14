
import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
export default class DetailWord extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerTitle: <TextInput
      placeholder="Nhập từ cần tra"
      placeholderTextColor='lightgray'
      style={{
        height: 50,
        width: 150,
        borderColor: 'white',
      }} />,
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Mua Hang"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
