import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";
import Modal from "./modal"
import { Dropdown } from "react-native-element-dropdown";
import InterstitialAdsShow from "../../../components/admob/interstitialAds/adShow";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    { label: 'Monthly', value: 'months' },
    { label: 'Yearly', value: 'years' },
];

const EmiCalculator = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.gstCalculator);
    const [selectedTenture, setSelectedTenture] = useState("months");
    const adClosed = useSelector(state => state.adClosed);

    const [rateOfInterest, setRateOfInterest] = React.useState(null);
    const [totalEMI, setTotalEMI] = React.useState(null)
    const [loanAmount, setLoanAmount] = React.useState(null)
    const [tenure, setTenure] = React.useState(null)
    const [totalInterestPayable, setTotalInterestPayable] = React.useState(null)
    const [totalPayable, setTotalPayable] = React.useState(null)

    const [errorMessageForAmount, setErrorMessageForAmount] = React.useState(null)
    const [errorMessageForInterest, setErrorMessageForInterest] = React.useState(null)
    const [errorMessageForTenure, setErrorMessageForTenure] = React.useState(null)

    useFocusEffect(
        React.useCallback(() => {
            dispatch({ type: "set_tabs_state", payload: 1 })
            dispatch({ type: "reset_adClosed" })
            return () => {
                dispatch({ type: "reset_adClosed" })
                dispatch({ type: "set_tabs_state", payload: 0 });
                navigation.dispatch(
                    CommonActions.navigate({
                        name: 'Other Calculator',
                    })
                );
            };
        }, [])
    );

    const dispatchingModal = () => {
        if (totalEMI !== null && totalEMI !== "") {
            dispatch({
                type: "set_modal_state",
                payload: {
                    show: true,
                    from: "emi",
                    dataToShow: {
                        "totalEMI": totalEMI,
                        "totalInterestPayable": totalInterestPayable,
                        "totalPayable": totalPayable,
                    }
                }
            })
        }
    }

    const calculateTotalInterestPayable = () => {
        if (selectedTenture === "months") setTotalInterestPayable((totalEMI * tenure) - loanAmount);
        else setTotalInterestPayable((totalEMI * (tenure * 12)) - loanAmount);
    }
    const calculateTotalPayable = () => setTotalPayable(eval(`+${loanAmount} + +${totalInterestPayable}`));

    React.useEffect(() => { calculateTotalInterestPayable() }, [totalEMI, selectedTenture])
    React.useEffect(() => { calculateTotalPayable() }, [totalInterestPayable])
    React.useEffect(() => { dispatchingModal() }, [totalPayable])

    const monthlyCalcalation = () => {
        let calcRateOfInterest = rateOfInterest / 12 / 100
        let leftSideCalc = loanAmount * calcRateOfInterest;
        let rightNumerator = Math.pow(eval("+1" + `+${calcRateOfInterest}`), tenure);
        let rightDenomenator = rightNumerator - 1;
        setTotalEMI(((leftSideCalc * rightNumerator) / rightDenomenator).toFixed());
        dispatchingModal()
    }

    const inputValidation = () => {
        if (loanAmount === null || loanAmount === "") {
            setErrorMessageForAmount("Please enter amount")
        }
        else {
            setErrorMessageForAmount(null)
        }
        if (rateOfInterest === null || rateOfInterest === "") {
            setErrorMessageForInterest("Please enter interest")
        }
        else {
            setErrorMessageForInterest(null)
        }
        if (tenure === null || tenure === "") {
            setErrorMessageForTenure("Please enter Months")
        }
        else {
            setErrorMessageForTenure(null)
        }

    }

    const formSubmit = () => {
        inputValidation()
        if (errorMessageForAmount === null && errorMessageForInterest === null && errorMessageForTenure === null)
            monthlyCalcalation();
    }

    return (
        adClosed ?
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ backgroundColor: screenTheme.backgroundColor, height: "100%" }}>
                    <Header theme_mode={theme_back} tabsShow={false} headingFirst="EMI" intellisenseText="(Equated Monthly Instalment)" headingLast="Calculator" />
                    <KeyboardAwareScrollView>
                        <View style={{ ...styles.container, backgroundColor: screenTheme.backgroundColor }}>

                            <ScrollView style={styles.scrollView}>
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
                                            onChangeText={setLoanAmount}
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
                                            onChangeText={setRateOfInterest}
                                            errorMessage={errorMessageForInterest}
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
                                            onChangeText={setTenure}
                                            errorMessage={errorMessageForTenure}
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
                                            title="Calculate EMI"
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
export default EmiCalculator

// reference links:{
    // https://www.calculatorsoup.com/calculators/financial/loan-calculator-simple.php
    // https://www.personalfn.com/calculator/emi-calculator
// }