import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';
import Signup from './Signup';
import {createStackNavigator , createAppContainer} from 'react-navigation';
import First from './First';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style ={{flex : 1}}> 
      <Text> Sign In 2 </Text> 
      <Button title = 'SIGN UP' onPress = {() => this.props.navigation.navigate('Signup')} />
      </View>
    );
  }
}
// const AppnavigatorSignin = createStackNavigator(
  
//   {

//   Signin : Signin,
//   Signup : Signup,
//   First : First

//  },{

//   initialRouteName : 'Signin'
//  }


// );

// export default createAppContainer(AppnavigatorSignin);

