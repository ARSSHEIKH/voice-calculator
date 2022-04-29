import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";

const OtherCalculators = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("Simple Calculator") }}>
                <Icon name="calculator" type="font-awesome-5" size={40} />
                <Text>Simple Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("Scientific Calculator") }}>
                <Icon name="calculator" type="entypo" size={50} />
                <Text>Scientific Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("GST Calculator") }}>
                {/* <Icon name="calculator" type="entypo" size={50} /> */}
                <Image source={require('../../assets/gst-icon.jpg')} style={{ width: 60, height: 60 }} />
                <Text>GST Calculator</Text>
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
        width: 150,
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }
})
export default OtherCalculators