import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import * as React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function CustomDrawerContent(props) {
    const dispatch = useDispatch();
    const theme_state = useSelector(state => state.theme_state);
    return (
        <DrawerContentScrollView style={{ ...styles.container, backgroundColor: theme_state.header.drawer.backgroundColor }}>
            <View style={{ ...styles.navigationContainer, backgroundColor: theme_state.header.drawer.drawerHeader.backgroundColor }}>
                <TouchableOpacity style={styles.drawerCloseButton} onPress={() => { props.navigation.closeDrawer(); }}>
                    <Icon name="close" color={theme_state.header.drawer.drawerHeader.closeButton} containerStyle={styles.icon} size={32} />
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("Home"); dispatch({ type: "set_tabs_state", payload: 0 }); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("Voice Calculator"); dispatch({ type: "set_tabs_state", payload: 1 }); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Voice Calculator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("Simple Calculator"); dispatch({ type: "set_tabs_state", payload: 0 }); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Simple Calculator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("Scientific Calculator"); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Scientific Calculator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("GST Calculator"); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>GST Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("EMI Calculator"); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>EMI Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("Simple Interest Calculator"); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Simple Interest Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("VAT Calculator"); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>VAT Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("SIP Calculator"); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>SIP Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }}
                    onPress={(e) => { props.navigation.navigate("Unit Calculator"); }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Unit Calculator</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#fff",
    },
    navigationContainer: {
        padding: 16,
    },
    drawerCloseButton: {
        alignSelf: "flex-end",
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        // margin: 10,
        // margin: 5
    },
    card: {
        width: (windowWidth / 2) - 15,
        height: 150,
        margin: 6
    },
    cardHeading: {
        fontSize: windowWidth / 20,
        fontWeight: "700",
        textTransform: "uppercase",
        textAlign: "center",
        textAlignVertical: "center",
        display: "flex",
        paddingHorizontal: 7,
        height: 150
    }
});

export default CustomDrawerContent