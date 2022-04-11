import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    TouchableOpacity,
    Button,
    SafeAreaView
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import DrawerLeft from "./drawer"
import Tabs from './tabs';

type HeaderComponentProps = {
    title: string;
    view?: string;
};

type ParamList = {
    Detail: {
        openDrawer: void;
    };
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
const dispatch = useDispatch();
const toggle = useSelector(state=>state.drawerToggle_state);

    const docsNavigate = () => {
        // Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
    };

    const playgroundNavigate = () => {
        Linking.openURL(`https://react-native-elements.js.org/#/${props.view}`);
    };
    const drawerOpen = () => dispatch({type: "open_drawerToggle_state", payload: !toggle})
    
    return (
        <HeaderRNE
            leftComponent={
                <TouchableOpacity onPress={drawerOpen}>
                    <Icon name="menu" color="#8c8c8c" containerStyle={styles.icon} />
                </TouchableOpacity>
            }
            containerStyle={styles.header}
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={docsNavigate}>
                        <Icon type="entypo" name="light-up" color="#8c8c8c" containerStyle={styles.icon} />
                    </TouchableOpacity>
                </View>
            }
            centerComponent={<Tabs />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    },  
    header: {
        backgroundColor: '#fff',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        fontWeight: "900",
        fontSize: 24
    }
});

export default Header;