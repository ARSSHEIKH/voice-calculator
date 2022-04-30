import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";
import { Dropdown } from 'react-native-element-dropdown';
import { useFocusEffect } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;

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
        <SafeAreaView>
            <Header theme_mode={theme_back} tabsShow={false} />

            <ScrollView style={{...styles.container, backgroundColor: screenTheme.backgroundColor}}>
                <Text style={{...styles.heading, color: screenTheme.headingColor}}>Goods and Services Tax (GST) Calculator</Text>

                <View style={styles.formContainer}>

                    <View style={styles.inputsContainer}>

                        <Text style={{...styles.inputText, color: screenTheme.headingColor}}>Initial Amount</Text>

                        <View style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 10 }}>
                            <View style={{ ...styles.iconContainer, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}>
                                <Icon
                                    name='dollar'
                                    type="font-awesome"
                                    color='#000'
                                    size={15}
                                />
                            </View>
                            <TextInput style={{ ...styles.input, width: windowWidth / 2.06 }} value={amount} placeholder="Enter Amount" keyboardType="numeric"
                                onChangeText={onChangeAmount}
                            />
                            <View
                                style={{
                                    ...styles.iconContainer,
                                    borderBottomRightRadius: 8,
                                    borderTopRightRadius: 8
                                }}>
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.dropdownPlaceholerStyle}
                                    containerStyle={styles.dropdownContainerStyle}
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
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <Text style={{...styles.inputText, color: screenTheme.headingColor}}>Rate of GST (%) </Text>
                        <View style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 10 }}>
                            <TextInput style={styles.input} value={rateOfGst} placeholder="Enter Rate" keyboardType="numeric" onChangeText={onChangeRateOfGst} />
                            <View
                                style={{
                                    ...styles.iconContainer,
                                    marginLeft: 2,
                                    borderBottomRightRadius: 8,
                                    borderTopRightRadius: 8
                                }}>
                                <Icon
                                    name='percent'
                                    type="font-awesome"
                                    color='#000'
                                    size={15}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.inputsContainer}>
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
                        <Text style={[{...styles.resultText, ...styles.resultHeading, color: screenTheme.headingColor}]}>Net Amount (excluding GST)</Text>
                        <Text style={{...styles.resultText, color: screenTheme.headingColor}}>{netAmount}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[{...styles.resultText, ...styles.resultHeading, color: screenTheme.headingColor}]}>GST ({rateOfGst}%)</Text>
                        <Text style={{...styles.resultText, color: screenTheme.headingColor}}>{totalGST}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[{...styles.resultText, ...styles.resultHeading, color: screenTheme.headingColor}]}>Gross Amount (including GST)</Text>
                        <Text style={{...styles.resultText, color: screenTheme.headingColor}}>{grossAmount}</Text>
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        height: "100%",
    },
    heading: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "700"
    },
    formContainer: {
        marginVertical: 10
    },
    inputsContainer: {
        margin: 10,
    },
    inputText:{
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
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    dropdown: {
        width: 100,
        height: 20,
    },
    dropdownPlaceholerStyle: {
        fontWeight: "700",
        fontSize: Math.floor((windowWidth / 30) - 2)
    },
    dropdownContainerStyle: {
        width: 120,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    submitButton: {
        borderRadius: 10,
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 10
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