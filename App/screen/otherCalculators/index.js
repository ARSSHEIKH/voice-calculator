import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get('window').height;

const OtherCalculators = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.scrollView}>
            <Text style={{ ...styles.mainHeading }}>Other Calculators</Text>
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
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("Simple Interest Calculator") }}>
                    {/* <Icon name="calculator" type="entypo" size={50} /> */}
                    <Image source={require('../../assets/emi-icon.png')} style={{ width: 60, height: 60 }} />
                    <Text style={styles.heading}>{"Simple Interest \n Calculator"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("VAT Calculator") }}>
                    {/* <Icon name="calculator" type="entypo" size={50} /> */}
                    <Image source={require('../../assets/emi-icon.png')} style={{ width: 60, height: 60 }} />
                    <Text style={styles.heading}>VAT Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("SIP Calculator") }}>
                    {/* <Icon name="calculator" type="entypo" size={50} /> */}
                    <Image source={require('../../assets/emi-icon.png')} style={{ width: 60, height: 60 }} />
                    <Text style={styles.heading}>SIP Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => { navigation.navigate("Unit Calculator") }}>
                    {/* <Icon name="calculator" type="entypo" size={50} /> */}
                    <Image source={require('../../assets/emi-icon.png')} style={{ width: 60, height: 60 }} />
                    <Text style={styles.heading}>Unit Calculator</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor: "#fff",
        height: "100%",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 5,
        flexWrap: "wrap",
    },
    mainHeading: {
        fontSize: 22,
        fontWeight: "700",
        paddingVertical: 10,
        textAlign: "center",
    },
    touchableOpacity: {
        borderWidth: 3,
        borderRadius: 100,
        borderColor:"#008c85",
        width: "40%",
        height: windowHeight / 4.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    heading: {
        color: "#008c85",
        marginTop: 7,
        fontSize: windowHeight / 45,
    }
})
export default OtherCalculators