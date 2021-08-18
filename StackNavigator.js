import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import searchpage from "../screens/searchpage";
import cm from "../screens/cm";
import indierock from "../screens/indierock";
import edm from "../screens/edm";
import electro from "../screens/electro";
import dubstep from "../screens/dubstep";
import jazz from "../screens/jazz";
import pop from "../screens/pop";
import rb from "../screens/rb";
import rock from "../screens/rock";
import techno from "../screens/techno";
import songspage from "../screens/songspage";
import favpage from "../screens/favpage";
import profilepage from "../screens/profilepage";
import settings from "../screens/settings";
import homepage from "../screens/homepage";
import moreartists from "../screens/moreartists";
import morerel from "../screens/morerel";
import morepod from "../screens/morepod";
import devotional from "../screens/devotional";
import top100 from "../screens/top100";
import lang from "../screens/lang";
import imagepicker from "../screens/imagepicker";
/*import splashscreen from "../screens/splashscreen";
import uporin from "../screens/uporin";
import signin from "../screens/signin";
import signup from "../screens/signup";*/
const Stack = createStackNavigator(//{Launch: LanuchStackNavigator}
  );
/*const LanuchStackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="splashscreen" component={splashscreen} />
    <Stack.Screen options={{headerShown: false}} name="uporin" component={uporin} />
    <Stack.Screen options={{headerShown: false}} name="signin" component={signin} />
    <Stack.Screen options={{headerShown: false}} name="signup" component={signup} />
    </Stack.Navigator>
  );
}*/
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="search" component={searchpage} />
      <Stack.Screen options={{headerShown: false}} name="cm" component={cm} />
      <Stack.Screen options={{headerShown: false}} name="dubstep" component={dubstep} />
      <Stack.Screen options={{headerShown: false}} name="edm" component={edm} />
      <Stack.Screen options={{headerShown: false}} name="electro" component={electro} />
      <Stack.Screen options={{headerShown: false}} name="indierock" component={indierock} />
      <Stack.Screen options={{headerShown: false}} name="jazz" component={jazz} />
      <Stack.Screen options={{headerShown: false}} name="pop" component={pop} />
      <Stack.Screen options={{headerShown: false}} name="rb" component={rb} />
      <Stack.Screen options={{headerShown: false}} name="techno" component={techno} />
      <Stack.Screen options={{headerShown: false}} name="rock" component={rock} />
      <Stack.Screen options={{headerShown: false}} name="songspage" component={songspage} />
      <Stack.Screen options={{headerShown: false}} name="favpage" component={favpage} />
    </Stack.Navigator>
  );
}
const FavStackNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="favpage" component={favpage} />
      <Stack.Screen options={{headerShown: false}} name="songspage" component={songspage} />
      </Stack.Navigator>
    );
  }

  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="profilepage" component={profilepage} />
      <Stack.Screen options={{headerShown: false}} name="settings" component={settings} />
      <Stack.Screen options={{headerShown: false}} name="lang" component={lang} />
      <Stack.Screen options={{headerShown: false}} name="imagepicker" component={imagepicker} />
      </Stack.Navigator>
    );
  }

  const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="homepage" component={homepage} />
      <Stack.Screen options={{headerShown: false}} name="songspage" component={songspage} />
      <Stack.Screen options={{headerShown: false}} name="moreartists" component={moreartists} />
      <Stack.Screen options={{headerShown: false}} name="morerel" component={morerel} />
      <Stack.Screen options={{headerShown: false}} name="devotional" component={devotional} />
      <Stack.Screen options={{headerShown: false}} name="morepod" component={morepod} />
      <Stack.Screen options={{headerShown: false}} name="top100" component={top100} />
      </Stack.Navigator>
    );
  }

export { SearchStackNavigator,FavStackNavigator,ProfileStackNavigator,HomeStackNavigator};
