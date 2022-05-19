
import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Divider, Icon } from 'react-native-elements';
import unitCalulatorLists from './unitCalulatorLists';
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;

const UnitCalculatorDeisgn = ({ searchText }) => {
    const navigation = useNavigation();
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.gstCalculator);
    return (
        <ScrollView>
            {
                unitCalulatorLists.filter(obj => obj.name.includes(searchText.search)).map((value, index) => 
                    <>
                        <TouchableOpacity style={styles.cardContainer} onPress={() => { navigation.navigate(value.path) }}>
                            <View style={styles.cardView}>
                                <Text style={styles.cardText}>{value.name}</Text>
                            </View>
                            <View style={styles.iconView}>
                                <Icon type="gontAwesome-5" name="chevron-right" size={40} color="#7f4747" />
                            </View>
                        </TouchableOpacity>
                        <Divider width={2} style={{ marginHorizontal: 10 }} color="#0c0c0c" />
                    </>
                )
            }
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        marginTop: 2,
        fontSize: windowWidth / 20,
        fontWeight: "700",
        padding: 10,
        textAlign: "center"
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

export default UnitCalculatorDeisgn