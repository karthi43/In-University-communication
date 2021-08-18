import * as React from 'react';
import { Image, StyleSheet, View,Button,TextInput,Alert,Text, StatusBar, TouchableOpacity } from 'react-native';
//import { SocialIcon } from 'react-native-elements';
import { Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

 const Separator = () => (
   <View style={styles.separator} />
 );

 export default function App({navigation}) {
  return (
    <View style={{ flex: 1, alignSelf:"center", justifyContent:"center" }}>
      <StatusBar style="auto" />
      <Text style={{color:"#17A9CF",margin:20,fontSize:30, alignSelf:"center", fontWeight:"bold"}}>Say HELLO to your app!</Text>
      <TouchableOpacity 
    onPress={() => navigation.navigate("signin")}
      style={{ backgroundColor: '#17A9CF',borderRadius:20,width:350,alignItems:'center',margin:5,height:50,justifyContent:"center",margin:20 }}>
      <Text style={{ fontSize:20, color: '#fff' }}>Sign in</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => navigation.navigate("signup")}
      style={{ backgroundColor: '#ffffff',borderRadius:20,width:350,alignItems:'center',margin:5,height:50,justifyContent:"center",borderColor:'#E91E63',borderWidth:2,margin:20 }}>
      <Text style={{ fontSize:20, color: '#17A9CF' }}>Sign up</Text>
    </TouchableOpacity>
      
    </View>
  );
 }

 
const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#17A9CF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});