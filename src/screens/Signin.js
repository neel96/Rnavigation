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
<<<<<<< HEAD
      <Text> Sign In 3</Text> 
=======
      <Text> Sign In 2 </Text> 
>>>>>>> f7b30b1495a8333618cf78234fc36de0d9823778
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

