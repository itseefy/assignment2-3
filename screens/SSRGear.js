import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Animated, StyleSheet, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import firebase, { firestore } from "firebase";
import "@firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

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

//gets the list of SSR Gear from the firestore database
var srGearList = firebase.database().ref("recommended/ssr-gear/ssr-gear-name");
srGearList.on('value', (snapshot) => {
    const data = snapshot.val();
})

const SSRGear = () => {
    return (
        <ScrollView style={styles.mainContainer}>
            {/* header for SSR Gear */}
            <Header
                containerStyle={{
                    backgroundColor: "#1bf6f2",
                }}
                centerComponent={{
                    text: "Recommended SSR Gear",
                    style: {
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }
                }}
            />
            {/* main container for the table of SSR Gear*/}
            <View>
                {/* Main Content for recommended  SSR Gear */}
                {/* Is supposed to be a table with SSR Gear Stats and abilities  */}
                <View style={styles.gearContainer}>
                    <Text style={styles.gearSubheader}>Best SSR Gear</Text>

                    {/* Individual view for each gear item in the database */}
                    {/* I'm using a sample image from assets folder */}
                    <View style={styles.gear}>
                        <Image style={styles.gearImg} source={require('../assets/ama-no-murakumo.jpg')}/>
                        <Text style={styles.gearText}>
                            Gear Name: (Data Here) {"\n"}
                            Gear Type: (Data Here) {"\n"}
                            Attack: (Character type here) {"\n"}
                            Effect: (Character Rarity Here) {"\n"}
                        </Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000000",
    },
    gearSubheader: {
        fontSize: 26,
        color: "white",
        textAlign: "center",
        padding: 15,
        marginBottom: 60,
        fontWeight: "700",
    },
    gearContainer: {
        padding: 50,
    },
    gearImg: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    gearText: {
        color: "white",
        textAlign: "center",
        paddingTop: 20,
        fontSize: 18,
    },
});

export default SSRGear;