import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Icon } from "react-native-elements";
import HomeAdMob from "../../components/admob/banner"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewAds}><HomeAdMob /></View>
            <View style={styles.viewScreens}>
                <TouchableOpacity style={[styles.buttons, styles.button1]} onPress={() => { navigation.navigate("Voice Calculator") }}>
                    <Icon name="microphone" type="font-awesome" size={50} color={"#fff"} />
                    <Text style={styles.heading}>Voice Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.button2]} onPress={() => { navigation.navigate("Simple Calculator"); }}>
                    <Icon name="calculator" type="ionicon" size={50} color={"#fff"} />
                    <Text style={styles.heading}>Simple Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.button3]}>
                    <Icon name="history" type="font-awesome" size={50} color={"#fff"} />
                    <Text style={styles.heading}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.button4]}>
                    <Icon name="shopping-bag" type="entypo" size={50} color={"#fff"} />
                    <Text style={styles.heading}>More Apps</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: windowHeight
    },
    viewAds: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight / 2,
        
    },
    viewScreens: {
        maxWidth: "100%",
        height: windowHeight / 2,
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row",

    },
    buttons: {
        display: "flex",
        width: "50%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    button1: {
        backgroundColor: "#5cd65c",
    },
    button2: {
        backgroundColor: "#b366ff",
    },
    button3: {
        backgroundColor: "#3366ff",
    },
    button4: {
        backgroundColor: "#ff8533",
    },
    heading: {
        fontSize: windowWidth / 23,
        textTransform: "uppercase",
        color: "#fff"
    }
})
export default Home