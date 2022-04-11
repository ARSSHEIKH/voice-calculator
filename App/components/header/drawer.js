import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SimpleCalculator from "../../screen/simpleCalculator"
import VoiceCalculator from "../../screen/VoiceCalculator"


const Drawer = createDrawerNavigator();

export default function DrawerLeft() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Simple Calculator" component={SimpleCalculator} />
        <Drawer.Screen name="Voice Calculator" component={VoiceCalculator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}