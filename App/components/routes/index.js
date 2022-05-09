import * as React from 'react';

// react-native components
import { Dimensions } from 'react-native';

// navigation components
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens components
import Home from '../../screen/Home';
import CustomDrawerContent from '../header/drawer/customDrawer';
import SimpleCalculator from '../../screen/otherCalculators/simpleCalculator';
import OtherCalculator from '../../screen/otherCalculators';
import ScientificCalculator from '../../screen/otherCalculators/scientificCalculator';
import VoiceCalculator from '../../screen/VoiceCalculator';
import GstCalculator from '../../screen/otherCalculators/gstCalculator';
import EmiCalculator from '../../screen/otherCalculators/emiCalculator';

const windowWidth = Dimensions.get('window').width;

const Routes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ drawerStyle: { backgroundColor: '#fff', width: windowWidth } }}>
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Other Calculator" component={OtherCalculator} options={{ headerShown: false }}/>
        <Drawer.Screen name="Simple Calculator" component={SimpleCalculator} options={{ headerShown: false }} />
        <Drawer.Screen name="Voice Calculator" component={VoiceCalculator} options={{ headerShown: false }} />
        <Drawer.Screen name="Scientific Calculator" component={ScientificCalculator} options={{ headerShown: false }} />
        <Drawer.Screen name="GST Calculator" component={GstCalculator} options={{ headerShown: false }} />
        <Drawer.Screen name="EMI Calculator" component={EmiCalculator} options={{ headerShown: false }} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default Routes