import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import * as Animatable from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Splash = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
            <Animatable.Text animation="pulse" easing="ease-in-out-back" iterationCount="infinite" style={styles.heading}>Voice Calculator</Animatable.Text >
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight,
        marginVertical: 0,
        marginHorizontal: "auto",
    },
    heading:{
        fontSize: windowWidth/12,
        textTransform: "uppercase"
    }
})
export default Splash