import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";
import { Dropdown } from 'react-native-element-dropdown';
import { useFocusEffect } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    { label: 'GST Inclusive', value: 'inclusive' },
    { label: 'GST Exclusive', value: 'exclusive' },
];

const GstCalculator = () => {
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.gstCalculator);

    const dispatch = useDispatch()
    const [selectedGst, setSelectedGst] = useState("inclusive");
    const [amount, onChangeAmount] = React.useState(null);
    const [rateOfGst, onChangeRateOfGst] = React.useState(null);
    const [totalGST, setTotalGST] = React.useState(null)
    const [netAmount, setNetAmount] = React.useState(null)
    const [grossAmount, setGrossAmount] = React.useState(null)

    const invalidRateOfInterest = () => ToastAndroid.showWithGravityAndOffset("Please enter valid rate of interest", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            dispatch({ type: "set_tabs_state", payload: 1 })
            dispatch({ type: "reset_adClosed" })
            return () => {
                dispatch({ type: "reset_adClosed" })
                dispatch({ type: "set_tabs_state", payload: 0 });
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    );


    const inclusiveCalculation = () => {
        setTotalGST((parseFloat(amount) - (parseFloat(amount) * (100 / (100 + parseFloat(rateOfGst))))).toFixed(2))
        setNetAmount(parseFloat(amount) - (parseFloat(amount) - (parseFloat(amount) * (100 / (100 + parseFloat(rateOfGst))))).toFixed(2));
        setGrossAmount(amount)
    }
    const exclusiveCalculation = () => {
        setTotalGST((parseFloat(amount) * parseFloat(rateOfGst) / 100).toFixed(2))
        setNetAmount(amount);
        setGrossAmount(+parseFloat(amount) + +parseFloat(parseFloat(amount) * parseFloat(rateOfGst) / 100).toFixed(2))
    }

    const formSubmit = () => {

        if (rateOfGst > 100 || rateOfGst < 0) invalidRateOfInterest()
        else {
            if (selectedGst === "inclusive") inclusiveCalculation()
            else exclusiveCalculation()
        }

    }
    return (
        <SafeAreaView style={{ backgroundColor: screenTheme.backgroundColor, height: "100%" }}>
            <Header theme_mode={theme_back} tabsShow={false} />

                <Text style={{ ...styles.heading, color: screenTheme.headingColor }}>Goods and Services Tax (GST) Calculator</Text>

            <ScrollView style={{ ...styles.container, backgroundColor: screenTheme.backgroundColor }}>
                <View style={styles.formContainer}>

                    <View>

                        <Text style={{ ...styles.inputText, color: screenTheme.headingColor}}>Initial Amount</Text>

                        <View style={{ display: "flex", flexDirection: "row", borderRadius: 10 }}>
                            
                            <Input
                                placeholder="Enter Amount"
                                keyboardType="numeric"
                                containerStyle={{borderRadius: 10}}
                                inputStyle={{fontSize:14, paddingHorizontal: 10}}
                                inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                onChangeText={onChangeAmount}
                                rightIcon={
                                    <View
                                        style={{
                                            ...styles.iconContainer,
                                            borderBottomRightRadius: 8,
                                            borderTopRightRadius: 8,
                                        }}>
                                        <Dropdown
                                            style={styles.dropdown}
                                            placeholderStyle={styles.dropdownPlaceholerStyle}
                                            containerStyle={styles.dropdownContainerStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            iconStyle={styles.iconStyle}
                                            data={data}
                                            maxHeight={80}
                                            labelField="label"
                                            valueField="value"
                                            placeholder="Select item"
                                            searchPlaceholder="Search..."
                                            value={selectedGst}
                                            onChange={item => {
                                                setSelectedGst(item.value);
                                            }}
                                        />
                                    </View> 
                                }
                                leftIcon={
                                    <View
                                        style={{
                                            ...styles.iconContainer,
                                            borderBottomLeftRadius: 8,
                                            borderTopLeftRadius: 8
                                        }}>
                                        <Icon
                                            name='dollar'
                                            type="font-awesome"
                                            color='#000'
                                            size={15}
                                        />
                                    </View>}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ ...styles.inputText, color: screenTheme.headingColor}}>Rate of GST (%) </Text>
                        <View>
                            <Input
                            keyboardType="numeric"
                                placeholder="Enter Rate"
                                inputStyle={{fontSize:14, paddingHorizontal: 10}}
                                containerStyle={{borderRadius: 10}}
                                inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                onChangeText={onChangeRateOfGst}
                                rightIcon={
                                    <View
                                        style={{
                                            ...styles.iconContainer,
                                            borderBottomRightRadius: 8,
                                            borderTopRightRadius: 8
                                        }}>
                                        <Icon
                                            name='percent'
                                            type="font-awesome"
                                            color='#000'
                                            size={15}
                                        />
                                    </View>}
                            />
                        </View>
                    </View> 

                    <View>
                        {/* <Button title="Calculate GST" color="#008c85" style={styles.submitButton}/> */}
                        <Button
                            title="Calculate GST"
                            titleStyle={{ fontWeight: '500' }}
                            buttonStyle={{
                                borderRadius: 10,
                                backgroundColor: '#008c85',
                                borderColor: 'transparent',
                                borderWidth: 0,
                            }}
                            containerStyle={{
                                height: 45,
                            }}
                            onPressIn={formSubmit}
                        />
                    </View>
                </View>

                <View style={styles.resultContainer}>
                    <View style={styles.row}>
                        <Text style={[{ ...styles.resultText, ...styles.resultHeading, color: screenTheme.headingColor }]}>Net Amount (excluding GST)</Text>
                        <Text style={{ ...styles.resultText, color: screenTheme.headingColor }}>{netAmount}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[{ ...styles.resultText, ...styles.resultHeading, color: screenTheme.headingColor }]}>GST ({rateOfGst}%)</Text>
                        <Text style={{ ...styles.resultText, color: screenTheme.headingColor }}>{totalGST}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[{ ...styles.resultText, ...styles.resultHeading, color: screenTheme.headingColor }]}>Gross Amount (including GST)</Text>
                        <Text style={{ ...styles.resultText, color: screenTheme.headingColor }}>{grossAmount}</Text>
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        height: windowHeight - 100,
        paddingHorizontal: 20,
    },
    heading: {
        marginTop: windowWidth / 35,
        fontSize: windowWidth / 22,
        textAlign: "center",
        fontWeight: "700",
        padding: 10
    },
    formContainer: {
        marginTop: 10,
        paddingHorizontal: 10
    },
    inputText: {
        letterSpacing: 0.8,
        fontSize: 14,
        fontWeight: "700",
        marginBottom: 5
    },
    input: {
        paddingHorizontal: 10,
        width: windowWidth / 1.23,
        backgroundColor: "#fff"
    },
    iconContainer: {
        backgroundColor: "#cdcdcd",
        height: 50,
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    dropdown: {
        width: 100,
        height: 20
    },
    dropdownPlaceholerStyle: {
        fontWeight: "700",
        color: "#0c0c0c",
        fontSize: Math.floor((windowWidth / 30) - 2)
    },
    dropdownContainerStyle: {
        width: 140,
        color: "#0c0c0c",
    },
    icon: {
        marginRight: 5,
    },
    selectedTextStyle: {
        color: "#0c0c0c",
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,

    },
    submitButton: {
        borderRadius: 10,
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 40
    },
    row: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 5,
        justifyContent: "space-between"
    },
    resultHeading: {
        fontWeight: "800",
        letterSpacing: 0.8
    },
    resultText: {
        fontSize: 16,
        fontWeight: "600"
    }
})
export default GstCalculator