import React from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Splash = () => {
    const [screenText, setscreenText] = React.useState(
        <Animatable.Text style={styles.heading} animation="zoomIn" easing="ease-in" duration={1000} delay={1}
            onAnimationEnd={() => setscreenText(<Animatable.Text animation="pulse" easing="ease-in-out-back" iterationCount="infinite" style={styles.heading}>Voice Calculator</Animatable.Text>)}
        >
            Voice Calculator
        </Animatable.Text >
    )
    return <SafeAreaView style={styles.container}>{screenText}</SafeAreaView>
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight,
        marginVertical: 0,
        marginHorizontal: "auto",
        backgroundColor: "#fff"
    },
    heading: {
        fontSize: windowWidth / 12,
        fontWeight: "900",
        textTransform: "uppercase",
        color: "#447b7f"
    }
})
export default Splash