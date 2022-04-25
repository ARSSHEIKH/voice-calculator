import React from "react";
import { InterstitialAd, AdEventType } from '@react-native-firebase/admob';
import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
const adUnitId = 'ca-app-pub-2545776387814292/2345352301';

const windowHeight = Dimensions.get('window').height;
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const InterstitialAdsShow = () => {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = React.useState(false);
  const [adClosed, setAdClosed] = React.useState(false);

  React.useEffect(() => {
    NetInfo.fetch()
      .then((isConnected) => {
        if (!isConnected.isInternetReachable) dispatch({ type: "set_adClosed" });
        else dispatch({ type: "reset_adClosed" });
      })
  }, [NetInfo.fetch().then((isConnected) => isConnected.isInternetReachable)])

  React.useEffect(() => {

    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        console.log("loaded")
        setAdClosed(false)
        interstitial.show()
        setAdClosed(true)
        setLoaded(true);
      }
      if (type === AdEventType.ERROR) {
        console.log("error")
        dispatch({ type: "set_adClosed" });
        setAdClosed(true)
      }
      if (type === AdEventType.CLOSED) {
        console.log("CLOSED")
        dispatch({ type: "set_adClosed" });
        setAdClosed(true)
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };

  }, []);

  console.log("ad Closed", adClosed)
  // No advert ready to show yet
  if (!loaded) {
    console.log("comning .....")
    return null;
  }

  return (
    <View style={{display: "flex",justifyContent: "center", height: windowHeight}}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={{textAlign: "center"}}>{adClosed ? "Loading Screen ..." : "Loading Ad ..." }</Text>
    </View>
  )

}
export default InterstitialAdsShow