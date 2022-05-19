
import * as React from 'react';
import { Dimensions, KeyboardAvoidingView, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../../components/header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SearchBar } from 'react-native-elements';
import UnitCalculatorDeisgn from '../../../components/unitCalculator/unitCalulatorListsDesign';

const UnitCalculator = () => {
    const [searchText, setSearchText] = React.useState({ search: "" })
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.gstCalculator);

    const updateSearch = (search) => setSearchText({ search });
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: screenTheme.backgroundColor, height: "100%" }}>
                <Header theme_mode={theme_back} tabsShow={false} headingFirst="Unit Calculators" />
                <KeyboardAwareScrollView>
                    <View style={{ ...styles.container, backgroundColor: screenTheme.backgroundColor }}>
                        <SearchBar
                            value={searchText}
                            onChangeText={updateSearch}
                            round
                            containerStyle={{ backgroundColor: "transparent", borderTopWidth: 0, borderBottomWidth: 0 }}
                            inputContainerStyle={{ backgroundColor: theme_back.bg_color === "#fff" ? "#f4f4f4" : "#474d54" }}
                            placeholder="Search unit ..."
                        />
                        <UnitCalculatorDeisgn searchText={searchText} />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        maxWidth: "100%",
        height: 70,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 30
    },
    cardText: {
        color: "#008c85",
        fontSize: 22,
        fontFamily: "Poppins"
    }
})

export default UnitCalculator