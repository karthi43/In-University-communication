/*import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signin from  "I:/React-native/react1.0/yojana/OMG/signin.js"
import signup from  "I:/React-native/react1.0/yojana/OMG/signup.js"
import splash from  "I:/React-native/react1.0/yojana/OMG/splash.js"
import home from  "I:/React-native/react1.0/yojana/OMG/home"
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" 
      screenOptions={{ headerStyle: { backgroundColor: "#fff"},
    headerTintColor: "#E91E63",
  }}>
      <Stack.Screen options={{headerShown: false}} name="splash" component={splash} />
        <Stack.Screen  name="signin" component={signin} />
        <Stack.Screen  name="signup" component={signup} />
        <Stack.Screen options={{headerShown: false}} name="home" component={home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App; */
import * as React from 'react';
 import {View , Button, StyleSheet,Text,TextInput,ImageBackground ,Image ,TouchableOpacity, StatusBar, ScrollView, Alert} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import { Linking} from 'react-native';
 //import { SocialIcon } from 'react-native-elements';
 const Separator = () => (
   <View style={styles.separator} />
 );
 
 function Index({ navigation }) {
   return (
    
     <View style={styles.container}> 
     <StatusBar style="auto" />
       <Text style={styles.index}>BookBird</Text>          
     <View style={styles.rightcontainer}>
    
    <TextInput placeholder='@klh.edu.in' placeholderTextColor='#12635B'
  style={{ height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
  
        <TextInput placeholder="Password" placeholderTextColor="#12635B"
       returnKeyType='go'
        secureTextEntry autoCorrect={false}
            style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}}
            />
         <Button
   color='#1CD8C3'
   headingText = '10'
   width = '1000'
   
         title="LOGIN"  onPress={() => navigation.navigate('Home')} />
      <Button
         color='#51B467'
         title="signup"  
         onPress={() => navigation.navigate('Signup')}/>
          
     </View>
 </View>  
      
   );
 }
 function Signup({ navigation }){
   return (
     <View style={styles.container}>
       <Text style={styles.index}> 𝖇⚈⚈ₖ𝖇𝓲𝓻𝓭</Text>
  <TextInput placeholder='First name ' placeholderTextColor='#12635B'
  style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,alignSelf:"center"}} />
  <TextInput placeholder='Last name  ' placeholderTextColor='#12635B'
  style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,alignSelf:"center"}} />
  <TextInput placeholder='ID' placeholderTextColor='#12635B'
  style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,alignSelf:"center"}} />
  <TextInput placeholder='Email Id--@klh.edu.in' placeholderTextColor='#12635B'
  style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,alignSelf:"center"}} />
   <TextInput placeholder='Phone number' placeholderTextColor='#12635B'
  style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,alignSelf:"center"}} />
   <TextInput placeholder='Your Designation' placeholderTextColor='#12635B'
  style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,alignSelf:"center"}} />
  <TextInput placeholder='Password' placeholderTextColor='#12635B'
  returnKeyType='go'
  secureTextEntry 
  autoCorrect={false}
  style={{height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,alignSelf:"center"}} />
          <View style={styles.rightcontainer}>
       <Button
         color='#51B467'
         title="Submit"  onPress={() => navigation.navigate('otp')}/>
 
       <TouchableOpacity activeOpacity={0.5}
         onPress={() => navigation.navigate('Home')}>
           <Text style={styles.index}>Already a user?</Text>
       </TouchableOpacity>
      </View>
      </View>
 
 
   );
 }

 function otp({navigation}){
  
  
   return (
      <View style={styles.container}> 
        <Text style={styles.index}>𝖇⚈⚈ₖ𝖇𝓲𝓻𝓭</Text>
         <Text style={styles.index}>Confirmation of Email</Text>
         <TextInput placeholder='OTP' placeholderTextColor='#12635B'
        style={{ height:50,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
           <Button
          color='#51B467'
          title="Submit"  onPress={() => navigation.navigate('Home')}/>
         <TouchableOpacity 
           activeOpacity={0.5}
            onPress={() => navigation.navigate('otp')}><Text style={{fontSize: 25,
             justifyContent: "center",
             fontWeight:"bold",
         color: '#03A9F4',
         margin:10,}}>verify with phone</Text></TouchableOpacity>
 
      </View>
   );
 }
 function Home({navigation}){
 
  return (
         <View style={styles.homestyle}>
           <View style={styles.headerstyle}>
          
           <View style={styles.icons}>
           <TouchableOpacity activeOpacity={0.5}
               onPress={() => navigation.navigate('profile')} style={{padding:10, alignSelf:"center"}}>
                <MaterialCommunityIcons name="account-circle" color="white" size={35} />
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.5} 
             onPress={() => navigation.navigate('notifications')} style={{padding:10, alignSelf:"center"}}>
               <MaterialCommunityIcons name="bell" color="white" size={35} />
             </TouchableOpacity> 
             <Text  style={{ fontSize:35, alignSelf:"center", color:"white",fontWeight:"bold", padding:20}}>
             𝖇⚈⚈ₖ𝖇𝓲𝓻𝓭
           </Text>
             <TouchableOpacity activeOpacity={0.5}
             onPress={() => navigation.navigate('Search')} style={{padding:10, alignSelf:"center"}}>
                <MaterialCommunityIcons name="magnify" color="white" size={35} />
             </TouchableOpacity>
             <TouchableOpacity  activeOpacity={0.5} 
             onPress={() => navigation.navigate('chatbox')} style={{padding:10, alignSelf:"center"}}>
               <MaterialCommunityIcons name="message-reply-text" color="white" size={35} />
             </TouchableOpacity>
 
           
             
           </View>
           </View>
           <ScrollView>
             <TouchableOpacity activeOpacity={0.5} onPress={() => {Linking.openURL('https://www.codechef.com/'); }}>
               <Text style={{ fontSize:30, fontWeight:'bold',padding:20,alignSelf:"center",color:'back'}}>
                 Codechef ALERT!
               </Text>
               <Text style={{ fontSize:15, alignSelf:"center",color:'#12635B'}}>
                 Challenge will start on dd/mm/yyyy 
               </Text>
             </TouchableOpacity>
             <Separator style={{}} />
             <TouchableOpacity activeOpacity={0.5} onPress={() => {Linking.openURL('https://www.hackerearth.com'); }}>
               <Text style={{ fontSize:30, fontWeight:'bold',padding:20,alignSelf:"center",color:'black'}}>
               HackerEarth ALERT!
               </Text>
               <Text style={{ fontSize:15, alignSelf:"center",color:'#12635B'}}>
                 Challenge will start on dd/mm/yyyy
               </Text>
             </TouchableOpacity>
             <Separator />
             <TouchableOpacity activeOpacity={0.5} onPress={() => {Linking.openURL('https://www.hackerrank.com/'); }}>
      <Text style={{ fontSize:30, fontWeight:'bold',padding:20,alignSelf:"center",color:'black'}}>Hackerrank ALERT!</Text>
         <Text style={{ fontSize:15, alignSelf:"center",color:'#12635B'}}>Challenge will start on dd/mm/yyyy </Text>
         </TouchableOpacity>
             <Separator />
           </ScrollView>
         </View>
        
  );
 }
 function About({navigation}){
   return (
    
     <View style={styles.container}>
        <Text style={styles.index}>About 𝖇⚈⚈ₖ𝖇𝓲𝓻𝓭</Text>
        <Text style={styles.index}>LMS/CMS ( Learning /Collage management system )  It  makes User's work faster and easier to manage your organization related work 
         </Text>
            <StatusBar style="auto" /> 
    </View>  
 
       
     
   );
 }
 function chatbox({navigation}){
   return (
    
     <View style={styles.container}> 
      <TouchableOpacity  activeOpacity={0.5} onPress={() => Alert.alert('CONNECTED')}>
     <Text style={styles.index}>Connect to Contacts</Text> 
     </TouchableOpacity>  
     <Separator /> 
     <ScrollView>
       <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Sithara")}>
     <View style={styles.leftContainer}>
     <View style={styles.rightContainer}>
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("contactdetails")}  >
              <Image source={require('./assets/AVATHAR.jpg')} 
             style={styles.ImageIconStyle}
           />
         </TouchableOpacity>
         <Text style={styles.name}>Sithara{"\n"}New Message:Time</Text>
         <Text style={styles.number}>9+</Text>
         </View>
         </View>
         </TouchableOpacity>
         <Separator />
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("message")}>
         <View style={styles.leftContainer}>
     <View style={styles.rightContainer}>
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("contactdetails")} >
              <Image source={require('./assets/AVATHAR.jpg')} 
             style={styles.ImageIconStyle}
           />
         </TouchableOpacity>
         <Text style={styles.name}>ChatterName {"\n"}New Message:Time</Text>
         <Text style={styles.number}>1+</Text>
         </View>
         </View>
         </TouchableOpacity>
         <Separator />
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("message")}>
         <View style={styles.leftContainer}>
     <View style={styles.rightContainer}>
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("contactdetails")} >
              <Image source={require('./assets/AVATHAR.jpg')} 
             style={styles.ImageIconStyle}
           />
         </TouchableOpacity>
         <Text style={styles.name}>ChatterName{"\n"}New Message:Time</Text>
         <Text style={styles.number}>3+</Text>
         </View>
         </View>
         </TouchableOpacity>
         <Separator />
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("message")}>
         <View style={styles.leftContainer}>
     <View style={styles.rightContainer}>
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("contactdetails")}>
              <Image source={require('./assets/AVATHAR.jpg')} 
             style={styles.ImageIconStyle}
           />
         </TouchableOpacity>
         <Text style={styles.name}>ChatterName {"\n"}New Message:Time</Text>
         <Text style={styles.number}>:)</Text>
         </View>
         </View>
         </TouchableOpacity>
         <Separator />
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("message")}>
         <View style={styles.leftContainer}>
     <View style={styles.rightContainer}>
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("contactdetails")}>
              <Image source={require('./assets/AVATHAR.jpg')} 
             style={styles.ImageIconStyle}
           />
         </TouchableOpacity>
         <Text style={styles.name}>ChatterName {"\n"}New Message:Time</Text>
         <Text style={styles.number}>:(</Text>
         </View>
         </View>
         </TouchableOpacity>
         <Separator />
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("message")}>
         <View style={styles.leftContainer}>
     <View style={styles.rightContainer}>
         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("contactdetails")}>
              <Image source={require('./assets/AVATHAR.jpg')} 
             style={styles.ImageIconStyle}
           />
         </TouchableOpacity>
         <Text style={styles.name}>ChatterName {"\n"}New Message:Time</Text>
         <Text style={styles.number}>:)</Text>
         </View>
         </View>
         </TouchableOpacity>
 
         
     </ScrollView>
 </View>  
       
     
   );
 }
 function profile({navigation}){
   return (
    
     <View style={styles.container}>
       <Image
              source={require('./assets/AVATHAR.jpg')}
              style={{ height:200,width:200,justifyContent: 'center', borderRadius:200}}
            />
        <Text style={styles.index}>USER NAME</Text>
        <Text style={styles.index}>Email-id</Text>
        <Text style={styles.index}>Roll No</Text>
        <Text style={styles.index}>Phone</Text>
        <Text style={styles.index}>Address</Text>
        <Text style={styles.index}>Password</Text>
            <StatusBar style="auto" />
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Index")}>
         <Text style={{fontSize: 25,
             justifyContent: "center",
             fontWeight:"bold",
         color: '#03A9F4',
         margin:10,}}>LOG OUT</Text>
         </TouchableOpacity>
            
    </View>  
 
       
     
   );
 }
 function message ({navigation}){
   return(
     <View style={styles.mcontainer}>
       <ScrollView>
       <Text style={styles.Time}>17-SEP--4:50pm</Text>
       <Text style={styles.smsg}>Hello</Text>
       <Text style={styles.rmsg}>Hello</Text>
       </ScrollView>
     <TextInput placeholder='send message' placeholderTextColor="#1D8348" style={{display: "flex", height: 50,
    borderColor: '#1D8348', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,color:"#1D8348", alignSelf:"stretch"}} />
   </View>
   );
 }
 function contactdetails(){
   return(
     <View style={styles.container}> 
   <Image source={{ uri: 'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png' }} 
             style={styles.propic}
           />
           <Text style={styles.details}>@Name</Text>
           <Text style={styles.details}>Phone Number</Text>
           <Text style={styles.details}>Messages</Text>
           <Text style={styles.details}>Recents</Text>
           </View>
           );
 }
 function Search({navigation}){
  return (
    <View>
       <TextInput placeholder='Search' placeholderTextColor='#12635B'
        style={{ height:30,width:300,borderColor: '#12635B', borderWidth: 5,paddingLeft:20,margin:'auto',borderRadius:20,borderWidth:1}} />
        <TouchableOpacity 
          activeOpacity={0.5}
           onPress={() => navigation.navigate('chatter')}><Text  style = {styles.chatterstyle}>Chatter1</Text></TouchableOpacity>
    </View>

  );
}

 
 const Stack = createStackNavigator();
 function MyTabs() {
         return (
           <NavigationContainer>
             <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#1BD8A9" },
         headerTintColor: "white",
         headerBackTitle: "Back",
         marginTop:5
       }}>
               
               <Stack.Screen options={{headerShown: false}} name="Index" component={Index} />              
               <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
               <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />   
               <Stack.Screen  name="About" component={About} />  
               <Stack.Screen  name="otp" component={otp} />
               <Stack.Screen  name="chatbox" component={chatbox} />   
               <Stack.Screen  name="profile" component={profile} />   
               <Stack.Screen name="message" component={message} />
               <Stack.Screen  name="contactdetails" component={contactdetails} />
               <Stack.Screen name="Search" component={Search} />                
             </Stack.Navigator>
           </NavigationContainer>
         );
       }
 
       const styles = StyleSheet.create({
         mcontainer: {
           flex:1,
           backgroundColor: 'white',
          //marginTop:30,
           padding:5,
           //justifyContent:"center"
         }, 
             leftContainer: {
               flex: 1,
               //margin:1,
               flexDirection:"column",
               justifyContent: "center",
               //alignItems:'flex-start',
               
             },
             rightContainer: {
               flex: 1,
               //margin:1,
               flexDirection:"row",
               //justifyContent:"center",
               alignItems:"center",
               
             },
             ImageIconStyle: {
               margin: 5,
               height:70,
               width: 70,
               borderRadius:100,
               borderColor:"green",
               borderWidth:0.5
             },
             propic:{
               padding: 2,
               margin: 10,
               height:200,
               width: 200,
               borderRadius:100,
               borderColor:"black",
               borderWidth:0.5,
               alignSelf:"center",
             },
             name:{
               fontSize:15,
               //fontWeight:'bold',
               color:'black',
               padding:10,
               alignSelf:"center",
             },
             number:{
               fontSize:18,
               fontWeight:'bold',
               color:'#1D8348',
               padding:10,
               marginLeft:90,
               alignSelf:"auto",
               borderColor:"#1D8348",
               borderRadius:200,
               borderWidth:0.5
        },
        smsg:{
         fontSize:25,
         fontWeight:'bold', 
             paddingLeft:10,
             margin:10,
             color:"#51B467",
        },
        rmsg:{
         fontSize:25,
         fontWeight:'bold',     
             paddingLeft:10,
             margin:10,
             color:"black",
        },
        Time:{
         fontSize:10,
         alignSelf:"center",     
             margin:10,
             color:"black",
        },
        details:{
         fontSize:20,
         color:'black',
         padding:10,
         alignSelf:"center",
        },
         container:{
           flex: 1,
           backgroundColor:"white",
           alignItems: 'center',
           justifyContent:"center",
   },
   index: {
    fontSize: 15,
        justifyContent: "center",
        alignSelf:'center',
        fontWeight:"bold",
    color: 'black',
    margin:10,
     },
     homecontainer: {
       flex: 1,
       alignItems: 'center',
       backgroundColor:"white"
     }, 
     homestyle: {
         //marginTop:2,
         flex: 1,
         //backgroundColor: 'white',
         
       },
       headerstyle: {
         backgroundColor:'#1BD8A9',
         justifyContent : 'center',
         width: '100%',
   
       },
       icons:{
         flex: 1,
     flexDirection:"row",
     justifyContent:"center",
       },
       separator: {
         
         borderBottomWidth:0.5,
         borderBottomColor: '#1D8348',
         margin:5,
         
       },         
 });
       
         
     
       export default MyTabs;
 