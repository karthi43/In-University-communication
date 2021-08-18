import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SearchStackNavigator, FavStackNavigator, ProfileStackNavigator, HomeStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#EC407A',
        style: {
            
            backgroundColor: '#0E0005',            
            borderColor:"pink",
            borderTopWidth:0.5,
            paddingBottom:10,
            height:60,
            },
      }}>
        <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }}
        name="Home" component={HomeStackNavigator} />

        <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
        name="Search" component={SearchStackNavigator} />

        <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-circle" color={color} size={size} />
          ),
        }} 
        name="Favourites" component={FavStackNavigator} />

         <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }} 
        name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    );
  };

export default BottomTabNavigator;