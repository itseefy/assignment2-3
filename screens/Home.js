import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Illusion Connect</Text>
      <Text style={[styles.subTitle]}>Guide App</Text>
      <Image style={[styles.LogoImg]} source={require("../assets/ic-logo.jpg")}></Image>
      <Text style={styles.text}>Please use the side menu to navigate to view the reccommended partners, SR Gear, and SSR Gear.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  textTitle: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
    textTransform: "uppercase",
    padding: (60, 30),
  },
  subTitle: {
    color: "white", 
    fontSize: 25,
  },
  LogoImg: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  }
});