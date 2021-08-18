import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//import {main} from "../screens/main";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
      appIsReady: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: false,
          });
          this.props.navigation.navigate("main")
        }),
      5000,
    );
  }

 




  render() {

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent:'center',
          marginHorizontal: 40,
        }}>
        <Image
        source={require('./assets/splash.png')}
         // source={require('./img/mygif1.gif')} /*for GIF image
          style={{ width: 1500, height: 600 }}
        />
        
        {!this.state.alignsecond ? null : (
          <View style={{ margin: 10 }}>
           <View style={{flexDirection:'row'}}>
           <Text
              style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>
            Go
            </Text>
            <Text
              style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
            4Food
            </Text>
           </View>
          </View>
        )}
      </View>
    );
  }
}