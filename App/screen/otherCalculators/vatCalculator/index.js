import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";
import Modal from "../emiCalculator/modal"
import RadioGroup from 'react-native-radio-buttons-group';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InterstitialAdsShow from "../../../components/admob/interstitialAds/adShow";
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Add VAT (+)',
    selected: true,
    value: 'addVat'
}, {
    id: '2',
    label: 'Remove VAT (-)',
    selected: false,
    value: 'removeVat'
}];

const VatCalculator = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.gstCalculator);
    const [selectedVAT, setSelectedVAT] = useState("addVat");
    const adClosed = useSelector(state => state.adClosed);

    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    const [rates, setRates] = React.useState(null);
    const [initialAmount, setInitialAmount] = React.useState(null)
    const [grossAmount, setGrossAmount] = React.useState(null)
    const [vatPrice, setVatPrice] = React.useState(null)

    const [netAmount, setNetAmount] = React.useState(null)
    const [errorMessageForAmount, setErrorMessageForAmount] = React.useState(null)
    const [errorMessageForAnnualRate, setErrorMessageForAnnualRate] = React.useState(null)
    const [errorMessageForLoanTerm, setErrorMessageForLoanTerm] = React.useState(null)

    function onPressRadioButton(radioButtonsArray) {
        let selected = radioButtonsArray.filter(item => item.selected === true);
        setSelectedVAT(selected[0].value)
        setRadioButtons(radioButtonsArray);
    }
    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            dispatch({ type: "set_tabs_state", payload: 1 })
            dispatch({ type: "reset_adClosed" })
            return () => {
                dispatch({ type: "reset_adClosed" })
                dispatch({ type: "set_tabs_state", payload: 0 });
            };
        }, [])
    );
    const dispatchingModal = () => {
        if (initialAmount !== null && initialAmount !== "") {
            dispatch({
                type: "set_modal_state",
                payload: {
                    show: true,
                    from: "vatCalculator",
                    dataToShow: {
                        "netAmount": parseFloat(netAmount).toFixed(2),
                        "vatPrice": parseFloat(vatPrice).toFixed(2),
                        "grossAmount": parseFloat(grossAmount).toFixed(2),
                    }
                }
            })
        }
    }

    const calculateVatPrice = () => {
        setVatPrice(grossAmount - netAmount);
        dispatchingModal()
    }

    React.useEffect(() => { dispatchingModal() }, [vatPrice])
    React.useEffect(() => { calculateVatPrice() }, [grossAmount, netAmount])

    const addingVATCalculation = () => {
        let leftSide = initialAmount / 100;
        let rightSide = eval(`+100 + +${rates}`)
        setNetAmount(initialAmount);
        setGrossAmount(leftSide * rightSide);
        calculateVatPrice()
        dispatchingModal()
    }
    const removingVATCalculation = () => {
        let addedRates = eval(`+100 + +${rates}`)
        let leftSide = initialAmount / addedRates;
        setNetAmount(leftSide * 100);
        setGrossAmount(initialAmount);
        calculateVatPrice()
        dispatchingModal()
    }
    const inputValidation = () => {
        if (initialAmount === null || initialAmount === "") {
            setErrorMessageForAmount("Please enter amount")
        }
        else {
            setErrorMessageForAmount(null)
        }
        if (rates === null || rates === "") {
            setErrorMessageForAnnualRate("Please enter interest")
        }
        else {
            setErrorMessageForAnnualRate(null)
        }

    }

    const formSubmit = () => {
        inputValidation()
        if (errorMessageForAmount === null && errorMessageForAnnualRate === null && errorMessageForLoanTerm === null) {
            if (selectedVAT === "addVat")
                addingVATCalculation()
            else
                removingVATCalculation()

        }
    }

    return (
        adClosed ?
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ backgroundColor: screenTheme.backgroundColor, height: "100%" }}>
                    <Header theme_mode={theme_back} tabsShow={false} headingFirst="VAT" intellisenseText="(Value added tax)" headingLast="Calculator" />
                    <KeyboardAwareScrollView>
                        <View style={{ ...styles.container, backgroundColor: screenTheme.backgroundColor }}>

                            <ScrollView style={styles.scrollView}>
                                <View style={styles.formContainer}>

                                    <View style={{ marginVertical: 5 }}>
                                        <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Initial Amount</Text>
                                        <Input
                                            placeholder="Enter Amount"
                                            keyboardType="numeric"
                                            returnKeyType={'next'}
                                            containerStyle={{ borderRadius: 10 }}
                                            inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                            inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                            onChangeText={setInitialAmount}
                                            errorMessage={errorMessageForAmount}
                                        />
                                    </View>
                                    <View style={{ marginVertical: 5 }}>
                                        <Text style={{ ...styles.inputText, color: screenTheme.headingColor }}>Rate of VAT (%) </Text>
                                        <Input
                                            placeholder="Enter Rate"
                                            keyboardType="numeric"
                                            containerStyle={{ borderRadius: 10 }}
                                            inputStyle={{ color: screenTheme.inputColor, fontSize: 14, paddingHorizontal: 10 }}
                                            inputContainerStyle={{ borderWidth: 1, borderRadius: 10 }}
                                            onChangeText={setRates}
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

                                    <View style={{ marginBottom: 10 }}>
                                        <RadioGroup layout="row" radioButtons={radioButtons} onPress={onPressRadioButton}
                                            containerStyle={{ alignSelf: "center" }}
                                            color="#444" borderColor="red" />
                                    </View>

                                    <View style={{ marginTop: 10 }}>
                                        <Button
                                            title="Calculate VAT"
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
                            <Modal from="vatCalculator" />
                        </View>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
            :
            <InterstitialAdsShow />
    )
};

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
});

export default VatCalculator
