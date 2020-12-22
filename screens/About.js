import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

//gets the window width and height
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function About({ navigation }) {
    return (
        //header container for the page
        <View style={styles.container}>
            <Header
                containerStyle={{
                    backgroundColor: "#1bf6f2",
                }}
                centerComponent={{
                    text: "About this app",
                    style: {
                        color: "white",
                        fontSize: 24,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }
                }}
            />
            {/* container of the main content */}
            <View style={styles.titleContainer}>
                <Text style={[styles.textTitle]}>"Connect with me in our dreams"</Text>
                <Image
                    style={styles.aboutImage}
                    source={require("../assets/ic-mainchar.jpg")}
                />
            </View>
            <View style={styles.descriptContainer}>
                <Text style={[styles.descriptText]}>
                    Illusion Connect is a tactical RPG that combines turn-based strategy and real-time combat. 
                    The gameplay is deep and exciting. 
                    The main stage is set in Bloomsea City, 
                    where you will fight alongside more than fifty Radiants with different personalities and unique abilities to resist the Nightmares. 
                </Text>
            </View>
            {/* container for the bottom of the page */}
            <View style={styles.buttonContainer}>
                {/* this button navigates to the "Show" page */}
                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={() =>
                        navigation.navigate("Show", {
                            itemId: 100,
                        })
                    }
                >
                    <Text style={styles.buttonText}>Get Started Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        height: "100%",
        backgroundColor: "#000000"
    },
    titleContainer: {
        flex: 3,
        marginBottom: -120,
    },
    textTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
        padding: (20),
    },
    aboutImage: {
        width: windowWidth - 20,
        height: "35%",
        resizeMode: "contain",
        marginBottom: 30,
    },
    descriptContainer: {
        flex: 3,
    },
    descriptText: {
        fontSize: 20,
        padding: 20,
        color: "white",
    },
    buttonContainer: {
        width: "100%",
    },
    getStartedButton: {
        backgroundColor: "#b81ab9",
        padding: 15,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        textTransform: "uppercase",
    }
});