import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//imports the screens for the app
import Home from "./screens/Home"
import Partners from './screens/Partners';
import SSRGear from './screens/SSRGear';
import SRGear from './screens/SRGear';
import About from './screens/About';


//importing firebase
import firebase from "firebase";
import "@firebase/firestore";

//connect firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEZop4onbZfFnrIdoRGbHcIpGQRwB5OUk",
  authDomain: "illusion-connec.firebaseapp.com",
  databaseURL: "https://illusion-connec.firebaseio.com",
  projectId: "illusion-connec",
  storageBucket: "illusion-connec.appspot.com",
  messagingSenderId: "837242567316",
  appId: "1:837242567316:web:0b96ea611cf45135c69281"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


//creates a drawer and root tab navigation for navigation 
const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();


const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        activeBackgroundColor: "#b81ab9",
        labelStyle: {
          fontSize: 10,
          fontWeight: "700", 
        },
        style: {
          backgroundColor: "#1bf6f2",
        }
      }}
    >
      <RootTab.Screen
        name="Recommended Partners"
        component={Partners}
      />
      <RootTab.Screen
        name="SSR Gear"
        component={SSRGear}
      />
      <RootTab.Screen
        name="SR Gear"
        component={SRGear}
      />
    </RootTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About}/>
      <Drawer.Screen name="Partners" component={RootTabNavigator}/>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}