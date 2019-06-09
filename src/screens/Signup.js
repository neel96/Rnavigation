import React, { Component } from 'react';
import { View, Text, Button ,AsyncStorage} from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  storeData =  () => {
    try {
      
      AsyncStorage.setItem('logginkey', 'success');
     
      this.props.navigation.navigate('First');

    } catch (e) {
      // saving error
    }
  }

  render() {
    return (
      <View>
        <Text> signup </Text>
        <Button title = 'Success' onPress = {() => this.storeData()} />
      </View>
    );
  }
}
