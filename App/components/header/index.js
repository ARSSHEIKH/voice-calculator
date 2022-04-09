import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

    const docsNavigate = () => {
        // Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
    };

    const playgroundNavigate = () => {
        Linking.openURL(`https://react-native-elements.js.org/#/${props.view}`);
    };

    return (
        // <SafeAreaProvider>
            <HeaderRNE
                leftComponent={{
                    icon: 'menu',
                    color: '#8c8c8c',
                    style: {
                        marginTop: 7
                    }                   
                }}
                containerStyle={styles.header}
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={docsNavigate}>
                            <Icon type="entypo" name="light-up" color="#8c8c8c" containerStyle={styles.icon} />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={<Tabs/>}
            />
        // </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    header:{
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
    icon:{
        fontWeight: "900",
        fontSize: 24
    }
});

export default Header;