import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import Header from "../index"
import TabScreen from "../../../screen";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "react-native-elements";

const windowWidth = Dimensions.get('window').width;

const Drawer = () => {
    const dispatch = useDispatch();
    const drawer = useRef(null);
    const toggle = useSelector(state => state.drawerToggle_state);
    const theme_state = useSelector(state => state.theme_state);

    const navigationView = () => (
        <View style={[styles.container]}>
            <View style={styles.navigationContainer}>
                <TouchableOpacity style={styles.drawerCloseButton}
                    onPress={() => {
                        drawer.current.closeDrawer()
                    }}
                >
                    <Icon name="close" color="#87b5ab" containerStyle={styles.icon} size={32} />
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card} onPress={(e) => {
                    dispatch({ type: "set_tabs_state", payload: 0 })
                    drawer.current.closeDrawer()

                }}>
                    <Text style={{ ...styles.cardHeading, color: "#87b5ab" }}>Simple Calculator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={(e) => {
                    dispatch({ type: "set_tabs_state", payload: 1 })
                    drawer.current.closeDrawer()

                }}>
                    <Text style={{ ...styles.cardHeading, color: "#87b5ab" }}>Voice Calculator</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const drawerOpen = () => dispatch({ type: "open_drawerToggle_state", payload: !toggle })

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={windowWidth}
            drawerPosition={"left"}
            renderNavigationView={navigationView}
            onDrawerClose={drawerOpen}
        >
            <Header theme_mode={theme_state.header} />
            {/* {drawer.current.openDrawer()} */}
            {toggle ? drawer.current.openDrawer() : null}

            {/* <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>

                    <Stack.Screen name="SimpleCalculator" component={SimpleCalculator} />
                    <Stack.Screen name="VoiceCalculator" component={VoiceCalculator} />

                </Stack.Navigator>
            </NavigationContainer> */}
            <TabScreen theme_mode={theme_state.screens} />

        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        // padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1",
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
        backgroundColor: "#ecf0f1",
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

export default Drawer;