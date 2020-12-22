import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Header } from "react-native-elements";

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

//gets the list of partners from the firestore database
var partnerList = firebase.database().ref("recommended/partners/rec-partner");
partnerList.on('value', (snapshot) => {
    const data = snapshot.val();
})

const Partners = () => {
    return (
        <ScrollView style={styles.mainContainer}>
            {/* header for Partners */}
            <Header
                containerStyle={{
                    backgroundColor: "#1bf6f2",
                }}
                centerComponent={{
                    text: "Recommended Partners",
                    style: {
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }
                }}
            />
            {/* main container for the content of Show */}
            <View>
                {/* Main Content for recommended partner characters */}
                {/* Is supposed to be a table with Character names and their stats using data from Firebase */}
                <View style={styles.partnerContainer}>
                    <Text style={styles.partnerSubheader}>Best Partners To Use</Text>

                    {/* Individual view for each partner in the database */}
                    {/* I'm using a sample image from assets folder */}
                    <View style={styles.partner}>
                        <Image style={styles.partnerImg} source={require('../assets/ic-mainchar.jpg')}/>
                        <Text style={styles.partnerText}>
                            Partner Name: (Data Here) {"\n"}
                            Type: (Character type here) {"\n"}
                            Rarity: (Character Rarity Here) {"\n"}
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
    partnerSubheader: {
        fontSize: 26,
        color: "white",
        textAlign: "center",
        padding: 15,
        marginBottom: 60,
        fontWeight: "700",
    },
    partnerContainer: {
        padding: 50,
    },
    partnerImg: {
        width: "100%",
        height: 100,
        resizeMode: "contain",
    },
    partnerText: {
        color: "white",
        textAlign: "center",
        paddingTop: 20,
        fontSize: 18,
    },
});

export default Partners;