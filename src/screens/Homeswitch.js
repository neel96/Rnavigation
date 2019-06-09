import React, { Component } from 'react';
import { View, Text , ActivityIndicator, StatusBar, AsyncStorage } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer , createDrawerNavigator, DrawerItems} from 'react-navigation';
import Signin  from './Signin';
import Signup from './Signup' ;
import First from './First';
import Second from './Second';




class Homeswitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
    
 }

  
 

  componentDidMount () {

    AsyncStorage.getItem('logginkey').then(value => {
        
        this.props.navigation.navigate( value == 'success' ? 'App' : 'Auth');
        console.log(value + "homeswitch");

    });

    

   
  }

  render() {
    return (
        <View>
            <Text> NAVIGATION </Text>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    ); 
  }
}
export const customnavigator = (props) => ( 
    
   


    <View style = {{flex : 1}}>
        <View style = {{height : 100, backgroundColor : 'yellow', justifyContent : 'space-around', alignItems : "center", flexDirection : 'column'}}>
         <Text> Homeswitch </Text>
         <ActivityIndicator />

        </View>

     <DrawerItems {...props}  />

     <View> 
         <Text> NEXT ITEM </Text> 
    </View>

     </View>

)
const AuthStack = createStackNavigator({ Signin: Signin, Signup: Signup });
const AppStack = createDrawerNavigator({ 
    
    First: First , Second : Second 

},{

    contentComponent : <customnavigator />
}

);

export default createAppContainer(createSwitchNavigator(
  {
    Homeswitch: Homeswitch,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Homeswitch',
  }
));