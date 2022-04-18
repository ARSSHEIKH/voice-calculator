import * as React from 'react';
import store from "./store"
import { StatusBar } from "react-native";
import { Provider } from 'react-redux';
import SplashScreen from "./screen/splash";
import Routes from './components/routes';

export default function App() {
  const [screenSwitch, setScreenSwitch] = React.useState(<SplashScreen />);

  setTimeout(() => setScreenSwitch(<Routes />), 3000);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#008c85" animated={true} hidden={true} />
      {screenSwitch}
    </Provider>
  );
}
