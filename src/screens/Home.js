import React, { Component } from 'react';
import { View, Text } from 'react-native';
import First from './First';
import Signin from './Signin';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loggedIn : false
    };
  }

  checkloggedIn = () => {

    if(this.state.loggedIn){

        return <First />
    }
    else{
      
        return <Signin />

    }


  }

  render() {
    return (
      <View style = {{flex : 1}}>
            {this.checkloggedIn()}
     
      </View>
    );
  }
}
