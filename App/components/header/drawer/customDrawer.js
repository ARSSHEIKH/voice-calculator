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
                    onPress={(e) => { props.navigation.navigate("Simple Calculator"); dispatch({ type: "set_tabs_state", payload: 0 }); }}>
                        <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Simple Calculator</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ ...styles.card, backgroundColor: theme_state.header.drawer.card.backgroundColor }} 
                    onPress={(e) => { props.navigation.navigate("Voice Calculator"); dispatch({ type: "set_tabs_state", payload: 1 }); }}>
                        <Text style={{ ...styles.cardHeading, color: theme_state.header.drawer.card.heading }}>Voice Calculator</Text>
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

export default CustomDrawerContent