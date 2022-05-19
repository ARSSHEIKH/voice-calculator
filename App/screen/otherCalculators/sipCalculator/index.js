import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";
import { useFocusEffect } from "@react-navigation/native";
import Modal from "../emiCalculator/modal"
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InterstitialAdsShow from "../../../components/admob/interstitialAds/adShow";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    { label: 'Monthly', value: 'months' },
    { label: 'Yearly', value: 'years' },
];

const SipCalculator = () => {
    const dispatch = useDispatch()
    const adClosed = useSelector(state => state.adClosed);
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.gstCalculator);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState("months");

    const [monthlyAmount, setMonthlyAmount] = React.useState(null)
    const [expectedRate, setExpectedRate] = React.useState(null)
    const [timePeriod, setTimePeriod] = React.useState(null)
    const [wealthGained, setWealthGained] = React.useState(null)
    const [totalWealth, setTotalWealth] = React.useState(null)
    const [investedAmount, setInvestedAmount] = React.useState(null);

    const [errorMessageForAmount, setErrorMessageForAmount] = React.useState(null)
    const [errorMessageForTimePeriod, setErrorMessageForTimePeriod] = React.useState(null)
    const [errorMessageForExpectedRate, setErrorMessageForExpectedRate] = React.useState(null)

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

    const dispatchingModal = () => {
        if (totalWealth !== null && totalWealth !== "") {
            try {
                dispatch({
                    type: "set_modal_state",
                    payload: {
                        show: true,
                        from: "sipCalculator",
                        dataToShow: {
                            "wealthGained": wealthGained.toFixed(2),
                            "investedAmount": investedAmount.toFixed(2),
                            "totalWealth": totalWealth.toFixed(2),
                        }
                    }
                })
            }
            catch { }
        }
    }

    const calculateWealthGained = () => {
        setWealthGained(totalWealth - investedAmount);
    }

    React.useEffect(() => { calculateWealthGained() }, [investedAmount])
    React.useEffect(() => { dispatchingModal() }, [wealthGained])

    const monthlyCalcalation = () => {
        let compoundRate = expectedRate / 12 / 100;
        let changeInCompoundRate = eval(`1+${compoundRate}`)
        let rightSide = changeInCompoundRate / compoundRate
        let leftSide = ((Math.pow(changeInCompoundRate, timePeriod)) - 1)
        setTotalWealth(monthlyAmount * leftSide * rightSide);
        setInvestedAmount(timePeriod * monthlyAmount)
        dispatchingModal()
    }
    const yearlyCalcalation = () => {
        let compoundRate = expectedRate / 12 / 100;
        let changeInCompoundRate = eval(`1+${compoundRate}`)
        let rightSide = changeInCompoundRate / compoundRate
        let totalTimePeriod = timePeriod * 12
        let leftSide = ((Math.pow(changeInCompoundRate, totalTimePeriod)) - 1)
        setTotalWealth(monthlyAmount * leftSide * rightSide);
        setInvestedAmount(totalTimePeriod * monthlyAmount)
        dispatchingModal()
    }

    const inputValidation = () => {
        if (monthlyAmount === null || monthlyAmount === "") {
            setErrorMessageForAmount("Please enter amount")
        }
        else {
            setErrorMessageForAmount(null)
        }
        if (timePeriod === null || timePeriod === "") {
            setErrorMessageForTimePeriod("Please enter time")
        }
        else {
            setErrorMessageForTimePeriod(null)
        }
        if (expectedRate === null || expectedRate === "") {
            setErrorMessageForExpectedRate("Please enter rates")
        }
        else {
            setErrorMessageForExpectedRate(null)
        }

    }

    const formSubmit = () => {
        inputValidation()
        if (errorMessageForAmount === null && errorMessageForTimePeriod === null && errorMessageForExpectedRate === null) {
            if (selectedTimePeriod === "months") monthlyCalcalation();
            else yearlyCalcalation();
        }
    }

    return (
        adClosed ?
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ backgroundColor: screenTheme.backgroundColor, height: "100%" }}>
                    <Header theme_mode={theme_back} tabsShow={false} headingFirst="SIP" headingLast="Calculator" intellisenseText="(Systematic Investment Plan)" />

                    <KeyboardAwareScrollView>
                        <View style={{ ...styles.container, backgroundColor: screenTheme.backgroundColor }}>
                            <ScrollView style={styles.scrollView}>
                                <View style={styles.formContainer}>

                                    <View style={{ marginVertical: 5 }}>
                                        <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Monthly SIP Amount</Text>
                                        <Input
                                            placeholder="Enter Amount"
                                            keyboardType="numeric"
                                            returnKeyType={'next'}
                                            containerStyle={{ borderRadius: 10 }}
                                            inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                            inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                            onChangeText={setMonthlyAmount}
                                            errorMessage={errorMessageForAmount}
                                        />
                                    </View>
                                    <View style={{ marginVertical: 5 }}>
                                        <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Time Period</Text>
                                        <Input
                                            placeholder="Enter Period"
                                            keyboardType="numeric"
                                            containerStyle={{ borderRadius: 10 }}
                                            inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                            inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                            onChangeText={setTimePeriod}
                                            errorMessage={errorMessageForTimePeriod}
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
                                                        value={selectedTimePeriod}
                                                        onChange={item => {
                                                            setSelectedTimePeriod(item.value);
                                                        }}
                                                    />
                                                </View>
                                            }
                                        />
                                    </View>
                                    <View style={{ marginVertical: 5 }}>
                                        <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Expected Return Rate (%) </Text>
                                        <Input
                                            placeholder="Enter Rate"
                                            keyboardType="numeric"
                                            containerStyle={{ borderRadius: 10 }}
                                            inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                            inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                            onChangeText={setExpectedRate}
                                            errorMessage={errorMessageForExpectedRate}
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

                                    <View>
                                        {/* <Button title="Calculate GST" color="#008c85" style={styles.submitButton}/> */}
                                        <Button
                                            title="Calculate SIP"
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
                            </ScrollView>
                            <Modal from="simpleInterestCalculator" />
                        </View>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
            :
            <InterstitialAdsShow />
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        height: windowHeight - 100,
        paddingHorizontal: 20,
    },
    heading: {
        marginTop: windowWidth / 24,
        fontSize: windowWidth / 24,
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
        color: "#0c0c0c",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,

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
    selectedTextStyle: {
        color: "#0c0c0c",
    },
    icon: {
        marginRight: 5,
    },
    iconStyle: {
        width: 20,
        height: 20,

    },
    submitButton: {
        borderRadius: 10,
    },
})
export default SipCalculator
