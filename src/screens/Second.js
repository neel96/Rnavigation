import React, { Component } from 'react';
import { View, Text ,Button,Image, StyleSheet, AsyncStorage} from 'react-native';

export default class Second extends Component {
    static navigationOptions = {
        drawerLabel: 'Second',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./chats-icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  setName = () => {
    AsyncStorage.setItem('logginkey', 'fail');

    this.props.navigation.navigate('Homeswitch');
   
 }
  

  render() {
    return (
      <View>
        <Text> Second </Text>
        <Button title = 'LogOUT' onPress = {() => this.setName()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });