import React from 'react';
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { Dimensions, Image, Text, View } from 'react-native';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

const adUnitId = 'ca-app-pub-2545776387814292/8126509630';
// const adUnitId = 'ca-app-pub-2545776387814292/2345352301';
const windowHeight = Dimensions.get('window').height;

function Banner() {
  const [error, setError] = React.useState("")
  const [adNotLoaded, setadNotLoaded] = React.useState(false)

  console.log("line 15", adNotLoaded);
  React.useEffect(() => {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,
      })
      .then(() => {
        console.log("Successful")
      });
  }, []);

  return (
    <View>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.MEDIUM_RECTANGLE}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded')
          setadNotLoaded(true);
          console.log("line 39", adNotLoaded);
        }}
        onAdFailedToLoad={(error) => {
          console.error('Advert failed to load: ', error.message)
          setError(error.message)
          if (error.message === "[admob/error-code-no-fill] The ad request was successful, but no ad was returned due to lack of ad inventory.") {
            setadNotLoaded(false)
            console.log("line 46", adNotLoaded);
          } else {
            setadNotLoaded(false);
            console.log("line 469", adNotLoaded);
          }
        }}
      />
      
        <Text style={{ textAlign: "center", textTransform: "uppercase", fontSize: 36, marginBottom: windowHeight/3, display:!adNotLoaded ? "flex" : "none", }}>Voice Calculator</Text>
      
      {/* <Text>{error}</Text> */}
    </View>
  );
}
export default Banner