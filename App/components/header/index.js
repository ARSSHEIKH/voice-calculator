import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Header as HeaderRNE, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
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

const Header: React.FunctionComponent<HeaderComponentProps> = ({ theme_mode, tabsShow }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const toggle = useSelector(state => state.drawerToggle_state);
    const [themeChange, setthemeChange] = useState(true)

    const themeChanger = () => {
        setthemeChange(!themeChange)
        dispatch({ type: themeChange ? "dark_mode" : "light_mode" })
    };

    const drawerOpen = () => {
        navigation.openDrawer()
        dispatch({ type: "open_drawerToggle_state", payload: !toggle })
    }

    return (
        <HeaderRNE
            leftComponent={
                <TouchableOpacity onPress={drawerOpen} style={styles.headerLeft}>
                    <Icon name="menu" color="#8c8c8c" containerStyle={styles.icon} size={32} />
                </TouchableOpacity>
            }
            containerStyle={{ backgroundColor: theme_mode.bg_color }}
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={themeChanger}>
                        <Icon type="entypo" name="light-up" color="#8c8c8c" size={28} containerStyle={styles.icon} />
                    </TouchableOpacity>
                </View>
            }
            centerComponent={tabsShow ? <Tabs theme_mode={theme_mode.tabs} /> : null}
        />
    );
};

const styles = StyleSheet.create({
    headerLeft: {
        marginTop: 5,
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7,
    },
    icon: {
        fontWeight: "900",
        fontSize: 24
    }
});

export default Header;