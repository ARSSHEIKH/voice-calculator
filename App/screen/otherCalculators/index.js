import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";

// cons

const OtherCalculators = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("Simple Calculator") }}>
                <Icon name="calculator" type="font-awesome-5" size={40} />
                <Text style={styles.heading}>Simple Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("Scientific Calculator") }}>
                <Icon name="calculator" type="entypo" size={50} />
                <Text style={styles.heading}>Scientific Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("GST Calculator") }}>
                {/* <Icon name="calculator" type="entypo" size={50} /> */}
                <Image source={require('../../assets/gst-icon.jpg')} style={{ width: 60, height: 60 }} />
                <Text style={styles.heading}>GST Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("EMI Calculator") }}>
                {/* <Icon name="calculator" type="entypo" size={50} /> */}
                <Image source={require('../../assets/emi-icon.png')} style={{ width: 60, height: 60 }} />
                <Text style={styles.heading}>EMI Calculator</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 40,
        flexWrap: "wrap",
        backgroundColor: "#fff",
        height: "100%"

    },
    touchableOpacity: {
        borderWidth: 2,
        borderRadius: 100,
        width: "40%",
        height: "22%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10

    },
    heading:{
        color: "#0c0c0c",
        marginTop: 7,
        fontSize: 16
    }
})
export default OtherCalculators