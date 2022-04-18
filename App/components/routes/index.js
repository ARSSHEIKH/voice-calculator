import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../header/drawer/customDrawer';
import { Drawer as CustomDrawer } from '../header/drawer/';
import SimpleCalculator from '../../screen/simpleCalculator';
import Home from '../../screen/Home';
import { Dimensions } from 'react-native';
import VoiceCalculator from '../../screen/VoiceCalculator';

const windowWidth = Dimensions.get('window').width;

const Routes = () => {
  const Drawer = createDrawerNavigator();
  return (

    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ drawerStyle: { backgroundColor: '#fff', width: windowWidth } }}>
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Simple Calculator" component={SimpleCalculator} options={{ headerShown: false }} />
        <Drawer.Screen name="Voice Calculator" component={VoiceCalculator} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default Routes