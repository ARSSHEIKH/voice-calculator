import React from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';


const UnderConstruction = () => {
    const navigation = useNavigation();
    useFocusEffect(
        React.useCallback(() => {
            console.log("something")
            return () => {
                navigation.dispatch(
                    CommonActions.navigate({
                        name: 'Unit Calculator',
                    })
                );
            };
        }, [])
    )
    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "#fff", }}>
            <Text style={{ textAlign: "center", fontSize: 24, color: "#0c0c0c" }}>Comming Soon ...</Text>
        </View>
    )
}
export default UnderConstruction