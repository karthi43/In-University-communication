import React, { Component } from 'react';
import ChatBot from 'react-native-chatbot' 
import {
  StyleSheet,
 // Text,
  View,

} from 'react-native';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    message: 'hello sir',
    trigger: '3',
  },
  {
    id: '3',
    user: true,
    trigger: '4',
  },
  {
    id: '4',
    message: 'what can I do for you?',
    trigger: '5',
  },
  {
    id: '5',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    message: 'sure, It is located In India, Telangana state!',
    trigger: '7',
  },
  {
    id: '7',
    user: true,
    trigger: '8',
  },
  {
    id: '8',
    message: 'Thank you have a nice day!',
    end: true,
  },
 
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize : 25
  }
});

export default class App extends Component {

  render() {

    return (
     <View style={styles.container}>

       <ChatBot steps={steps} />
     </View>
   );
 }
}