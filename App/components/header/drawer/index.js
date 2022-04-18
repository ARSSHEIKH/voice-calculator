import React, { useRef } from "react";
import { DrawerLayoutAndroid, Text, StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import Header from "../index"
import TabScreen from "../../../screen";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Drawer = ({ props }) => {
    const drawer = useRef(null);
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.drawerToggle_state);
    const theme_state = useSelector(state => state.theme_state);

    const navigationView = () => (
        <View style={{ ...styles.container, backgroundColor: theme_state.header.drawer.backgroundColor }}>
            <View style={{ ...styles.navigationContainer, backgroundColor: theme_state.header.drawer.drawerHeader.backgroundColor }}>
                <TouchableOpacity style={styles.drawerCloseButton} onPress={() => { props.navigation.closeDrawer() }}>
                    <Icon name="close" color={theme_state.header.drawer.drawerHeader.closeButton} containerStyle={styles.icon} size={32} />
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }} onPress={(e) => { dispatch({ type: "set_tabs_state", payload: 0 }); props.navigation.closeDrawer() }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Simple Calculator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }} onPress={(e) => { dispatch({ type: "set_tabs_state", payload: 1 }); props.navigation.closeDrawer() }}>
                    <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Voice Calculator</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const drawerOpen = () => dispatch({ type: "open_drawerToggle_state", payload: !toggle });

    return (
        <DrawerContentScrollView style={{ ...styles.container, backgroundColor: theme_state.header.drawer.backgroundColor }}>
            <View>
                <View style={{ ...styles.navigationContainer, backgroundColor: theme_state.header.drawer.drawerHeader.backgroundColor }}>
                    <TouchableOpacity style={styles.drawerCloseButton} onPress={() => { props.navigation.closeDrawer() }}>
                        <Icon name="close" color={theme_state.header.drawer.drawerHeader.closeButton} containerStyle={styles.icon} size={32} />
                    </TouchableOpacity>
                </View>

                <View style={styles.cardContainer}>
                    <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }} onPress={(e) => { dispatch({ type: "set_tabs_state", payload: 0 }); drawer.current.closeDrawer() }}>
                        <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Simple Calculator</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }} onPress={(e) => { dispatch({ type: "set_tabs_state", payload: 1 }); drawer.current.closeDrawer() }}>
                        <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Voice Calculator</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
        // <DrawerLayoutAndroid ref={drawer} drawerWidth={windowWidth} drawerPosition={"left"} renderNavigationView={navigationView} onDrawerClose={drawerOpen}>
        //     <Header theme_mode={theme_state.header} />
        //     {toggle ? drawer.current.openDrawer() : null}
        //     {/* <TabScreen theme_mode={theme_state.screens} /> */}
        // </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "transparent"
    },
    navigationContainer: {
        padding: 16
    },
    drawerCloseButton: {
        alignSelf: "flex-end",
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: 10
    },
    card: {
        width: (windowWidth / 2) - 20,
        height: 150,
        margin: 10
    },
    cardHeading: {
        fontSize: windowWidth / 18,
        fontWeight: "700",
        textTransform: "uppercase",
        textAlign: "center",
        textAlignVertical: "center",
        display: "flex",
        height: 150
    }
});
