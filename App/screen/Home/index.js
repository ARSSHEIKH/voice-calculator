import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const Home = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewAds}></View>
            <View style={styles.viewScreens}>
                <TouchableOpacity style={[styles.buttons, styles.button1]}
                    onPress={() => { navigation.navigate("Voice Calculator") }}>
                    <Text style={styles.heading}>Voice Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.button2]}
                    onPress={() => { navigation.navigate("Simple Calculator") }}>
                    <Text style={styles.heading}>Simple Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.button3]}>
                    <Text style={styles.heading}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.button4]}>
                    <Text style={styles.heading}>More Apps</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#283637"
    },
    viewAds: {
        width: "100%",
        backgroundColor: "transparent",
        height: "50%"
    },
    viewScreens: {
        maxWidth: "100%",
        backgroundColor: "blue",
        height: "50%",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    buttons: {
        display: "flex",
        width: "50%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    button1: {
        backgroundColor: "#3bb300",
    },
    button2: {
        backgroundColor: "#ff1aff",
    },
    button3: {
        backgroundColor: "#6666ff",
    },
    button4: {
        backgroundColor: "red",
    },
    heading: {
        fontSize: windowWidth / 20,
        textTransform: "uppercase"
    }
})
export default Home