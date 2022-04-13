import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    TouchableOpacity,
} from 'react-native';
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

const Header: React.FunctionComponent<HeaderComponentProps> = ({theme_mode}) => {
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.drawerToggle_state);
    const [themeChange, setthemeChange] = useState(true)

    const themeChanger = () => {
        setthemeChange(!themeChange)
        dispatch({ type: themeChange ? "dark_mode" : "light_mode" })
    };

    const drawerOpen = () => dispatch({ type: "open_drawerToggle_state", payload: !toggle })

    return (
        <HeaderRNE
            leftComponent={
                <TouchableOpacity onPress={drawerOpen}  style={styles.headerLeft}>
                    <Icon name="menu" color="#8c8c8c" containerStyle={styles.icon} size={32}/>
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
            centerComponent={<Tabs theme_mode={theme_mode.tabs} />}
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