import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import SimpleCalculator from "./simpleCalculator";
import VoiceCalculator from "./VoiceCalculator/";
// import SimpleCalculator from "../components/header/drawer";

const TabScreen = () => {
    const state = useSelector(state => state.tabs_state);
    const styles = StyleSheet.create({ container: { flex: state === 0 ? 2 : 10, backgroundColor: "#fff", justifyContent: state === 0 ? "flex-end" : "flex-start" }, });

    return <View style={styles.container}>{state === 0 ? <SimpleCalculator /> : <VoiceCalculator />}</View>
}
export default TabScreen;