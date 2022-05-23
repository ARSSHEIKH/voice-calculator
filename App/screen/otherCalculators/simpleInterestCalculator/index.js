import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";
import { useFocusEffect } from "@react-navigation/native";
import Modal from "../emiCalculator/modal"
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    { label: 'Monthly', value: 'months' },
    { label: 'Yearly', value: 'years' },
];

const SimpleInterestCalculator = () => {
    const dispatch = useDispatch()
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.gstCalculator);
    const [selectedTenture, setSelectedTenture] = useState("months");
    const adClosed = useSelector(state => state.adClosed);

    const [annualRate, setAnnualRate] = React.useState(null);
    const [principleAmount, setPrincipleAmount] = React.useState(null)
    const [loanTerm, setLoanTerm] = React.useState(null)
    const [monthlyInterest, setMonthlyInterest] = React.useState(null)
    const [totalPayment, setTotalPayment] = React.useState(null)

    const [errorMessageForAmount, setErrorMessageForAmount] = React.useState(null)
    const [errorMessageForAnnualRate, setErrorMessageForAnnualRate] = React.useState(null)
    const [errorMessageForLoanTerm, setErrorMessageForLoanTerm] = React.useState(null)

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

        if (totalPayment !== null && totalPayment !== "") {
            try {
                dispatch({
                    type: "set_modal_state",
                    payload: {
                        show: true,
                        from: "simpleInterestCalculator",
                        dataToShow: {
                            "netAmount": principleAmount,
                            "monthlyInterest": monthlyInterest.toFixed(2),
                            "totalPayment": totalPayment.toFixed(2),
                        }
                    }
                })
            }
            catch { }
        }
    }

    const calculateMonthlyInterest = () => {
        setMonthlyInterest(totalPayment - principleAmount);
    }

    React.useEffect(() => { calculateMonthlyInterest() }, [totalPayment])
    React.useEffect(() => { dispatchingModal() }, [monthlyInterest])

    const monthlyCalcalation = () => {
        let calcAnnualRate = annualRate / 12 / 100
        let rightNumerator = eval(`1+${calcAnnualRate}*${loanTerm}`);
        setTotalPayment(principleAmount * rightNumerator);
        dispatchingModal()
    }
    const yearlyCalcalation = () => {
        let calcAnnualRate = annualRate / 12 / 100
        let rightNumerator = eval(`1+${calcAnnualRate}*${loanTerm}*12`);
        setTotalPayment(principleAmount * rightNumerator);
        dispatchingModal()
    }

    const inputValidation = () => {
        if (principleAmount === null || principleAmount === "") {
            setErrorMessageForAmount("Please enter amount")
        }
        else {
            setErrorMessageForAmount(null)
        }
        if (annualRate === null || annualRate === "") {
            setErrorMessageForAnnualRate("Please enter interest")
        }
        else {
            setErrorMessageForAnnualRate(null)
        }
        if (loanTerm === null || loanTerm === "") {
            setErrorMessageForLoanTerm("Please enter Months")
        }
        else {
            setErrorMessageForLoanTerm(null)
        }

    }

    const formSubmit = () => {
        inputValidation()
        if (errorMessageForAmount === null && errorMessageForAnnualRate === null && errorMessageForLoanTerm === null) {
            if (selectedTenture === "months") monthlyCalcalation();
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
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Simple Interest Calculator" /> 
                <KeyboardAwareScrollView>
                    <View style={{ ...styles.container, backgroundColor: screenTheme.backgroundColor }}>

                        <ScrollView>
                            <View style={styles.formContainer}>
                                <View style={{ marginVertical: 5 }}>
                                    <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Loan Amount</Text>
                                    <Input
                                        placeholder="Enter Amount"
                                        keyboardType="numeric"
                                        returnKeyType={'next'}
                                        containerStyle={{ borderRadius: 10 }}
                                        inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                        inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                        onChangeText={setPrincipleAmount}
                                        errorMessage={errorMessageForAmount}
                                    />
                                </View>
                                <View style={{ marginVertical: 5 }}>
                                    <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Rate of Interest (%) </Text>
                                    <Input
                                        placeholder="Enter Rates"
                                        keyboardType="numeric"
                                        containerStyle={{ borderRadius: 10 }}
                                        inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                        inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                        onChangeText={setAnnualRate}
                                        errorMessage={errorMessageForAnnualRate}
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
                                <View style={{ marginVertical: 5 }}>
                                    <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Loan Tenure</Text>
                                    <Input
                                        placeholder="Enter Tenure"
                                        keyboardType="numeric"
                                        containerStyle={{ borderRadius: 10 }}
                                        inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                        inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                        onChangeText={setLoanTerm}
                                        errorMessage={errorMessageForLoanTerm}
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
                                                    value={selectedTenture}
                                                    onChange={item => {
                                                        setSelectedTenture(item.value);
                                                    }}
                                                />
                                            </View>
                                        }
                                    />
                                </View>

                                <View>
                                    {/* <Button title="Calculate GST" color="#008c85" style={styles.submitButton}/> */}
                                    <Button
                                        title="Calculate Interest"
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

                        <Modal />
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
        marginTop: windowWidth / 88,
        fontSize: windowWidth / 20,
        fontWeight: "700",
        textAlign: "center",
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
export default SimpleInterestCalculator
