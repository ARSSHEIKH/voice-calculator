import * as React from 'react';
import store from "./store"
import { StatusBar } from "react-native";
import { Provider } from 'react-redux';
import SplashScreen from "./screen/splash";
import Routes from './components/routes';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

export default function App() {
  const [screenSwitch, setScreenSwitch] = React.useState(<SplashScreen />);
  setTimeout(() => setScreenSwitch(<Routes />), 5000);

  React.useEffect(() => {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#008c85" animated={true} hidden={true} />
      {screenSwitch}
    </Provider>
  );
}
