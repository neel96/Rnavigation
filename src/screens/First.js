import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Second from './Second';
import {createStackNavigator , createAppContainer} from 'react-navigation';
export default class First extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
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

  render() {
    return (
      <View style = {{flex : 1}}> 
      <Text> First 123 </Text> 
      <Button title = 'Second' onPress = {() => this.props.navigation.navigate('Second')} />
      <Button title = 'Toggle' onPress = {() => this.props.navigation.toggleDrawer()} />
      </View>
    );
  }
}

// const AppnavigatorFirst = createStackNavigator(
  
//   {

//   First: First,
//   Second : Second

//  },{

//   initialRouteName : 'First'
//  }


// );

// export default createAppContainer(AppnavigatorFirst);
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
