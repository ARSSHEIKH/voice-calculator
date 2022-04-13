import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SimpleCalculator from '../../../screen/simpleCalculator';
import VoiceCalculator from '../../../screen/VoiceCalculator';
import Header from "../index"
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

export default function DrawerLeft() {
    const theme_state = useSelector(state => state.theme_state);
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
                screenOptions={
                    <Header theme_mode={theme_state.header} />
                }>
                <Drawer.Screen name="Simple Calculator" component={SimpleCalculator} />
                <Drawer.Screen name="Voice Calculator" component={VoiceCalculator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}