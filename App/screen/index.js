import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import SimpleCalculator from "./simpleCalculator";
import VoiceCalculator from "./VoiceCalculator/";

const TabScreen = ({ theme_mode }) => {
    const state = useSelector(state => state.tabs_state);
    const styles = StyleSheet.create({ container: { flex: state === 0 ? 2 : 10, backgroundColor: theme_mode.tabScreen.bg_color, justifyContent: state === 0 ? "flex-end" : "flex-start" }, });

    return (
        <>
            <View style={styles.container}>
                {state === 0 ? <SimpleCalculator
                    theme_mode={theme_mode.simpleCalculator} /> :
                    <VoiceCalculator theme_mode={theme_mode.voicecalculator}
                    />}
            </View>
        </>
    )
}
export default TabScreen;