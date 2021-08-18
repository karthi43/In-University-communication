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
    <View style={{ flex: 1, alignSelf:"center", justifyContent:"center"  }}>
    <StatusBar style="auto" />
    
    <Text style={{color:"#17A9CF", marginBottom:10, marginTop:30, fontSize:30, fontWeight:"bold", alignSelf:"center"}}>Create a new account</Text>
    <TextInput placeholder='Enter Full name' placeholderTextColor="grey" style={{ height:50,width:350,
   borderColor: '#17A9CF', borderWidth: 5,paddingLeft:10,margin:20,borderRadius:20,borderWidth:1,color:"#17A9CF"}} />
    <TextInput placeholder='Enter Phone Number' placeholderTextColor="grey" style={{ height:50,width:350,
   borderColor: '#17A9CF', borderWidth: 5,paddingLeft:10,margin:20,borderRadius:20,borderWidth:1,color:"#17A9CF"}} />
    <TextInput placeholder='Enter Email Address' placeholderTextColor="grey" style={{ height:50,width:350,
   borderColor: '#17A9CF', borderWidth: 5,paddingLeft:10,margin:20,borderRadius:20,borderWidth:1,color:"#17A9CF"}} />
   <TextInput placeholder="Password" 
              placeholderTextColor="grey"
          returnKeyType='go'
   secureTextEntry 
         autoCorrect={false}
         style={{ height: 50,width:350, borderColor: '#17A9CF', borderWidth: 5,paddingLeft:10,margin:20,borderRadius:20,borderWidth:1,color:"#E91E63" }}
         />
     <TouchableOpacity 
     onPress={() => navigation.navigate("home")}
      style={{ backgroundColor: '#E91E63',borderRadius:20,width:350,alignItems:'center',margin:5,height:50,justifyContent:"center",alignSelf:"center" }}>
      <Text style={{ fontSize:20, color: '#fff' }}>Sign up</Text>
    </TouchableOpacity>
       <Text style={{color:"black", margin:30, fontWeight:"bold", fontSize:30, alignSelf:"center"}}>or</Text>   
       <View
            style={{
              flexDirection: 'column',
              justifyContent: "center",
            }}>
             <TouchableOpacity 
       onPress={() => {Linking.openURL('https://www.facebook.com/'); }}
        style={{ backgroundColor: '#3b5998',borderRadius:20,width:350,alignItems:'center',margin:5,height:50,justifyContent:"center",alignSelf:"center" }}>
        <Text style={{ fontSize:20, color: '#fff' }}>Sign in with Facebook</Text>
      </TouchableOpacity> 
      <TouchableOpacity 
       onPress={() => {Linking.openURL('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin'); }}
        style={{ backgroundColor: '#db4a39',borderRadius:20,width:350,alignItems:'center',margin:5,height:50,justifyContent:"center",alignSelf:"center" }}>
        <Text style={{ fontSize:20, color: '#fff' }}>Sign in with Google+</Text>
      </TouchableOpacity>             
              </View>
  </View>
  
   
  );
 }

 
const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#17A9CF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});