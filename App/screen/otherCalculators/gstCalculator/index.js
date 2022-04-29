import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useSelector } from "react-redux";
import Header from "../../../components/header";
import { Dropdown } from 'react-native-element-dropdown';
const data = [
    { label: 'GST Inclusive', value: 'inclusive' },
    { label: 'GST Exclusive', value: 'exclusive' },
];

const GstCalculator = () => {
    const theme_back = useSelector(state => state.theme_state.header);
    const [value, setValue] = useState(null);
    return (
        <SafeAreaView>
            <Header theme_mode={theme_back} tabsShow={false} />

            <View style={styles.container}>
                <Text style={styles.heading}>Goods and Services Tax (GST) Calculator</Text>

                <View style={{ marginVertical: 10 }}>

                    <View style={styles.inputsContainer}>

                        <Text>Initial Amount</Text>

                        <View style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 10 }}>
                            <View style={{ ...styles.iconContainer, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}>
                                <Icon
                                    name='dollar'
                                    type="font-awesome"
                                    color='#000'
                                    size={15}
                                />
                            </View>
                            <TextInput style={{ ...styles.input, width: "51.5%" }} placeholder="Enter Amount" keyboardType="numeric" />
                            <View
                                style={{
                                    ...styles.iconContainer,
                                    borderBottomRightRadius: 8,
                                    borderTopRightRadius: 8
                                }}>
                                <Dropdown
                                    style={styles.dropdown}
                                    containerStyle={styles.dropdownContainerStyle}
                                    iconStyle={styles.iconStyle}
                                    data={data}
                                    maxHeight={80}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select item"
                                    searchPlaceholder="Search..."
                                    value={value}
                                    onChange={item => {
                                        setValue(item.value);
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <Text>Rate of GST (%) </Text>
                        <View style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 10 }}>
                            <TextInput style={styles.input} placeholder="Enter Rate" keyboardType="numeric" />
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
                            </View>
                        </View>
                    </View>

                    <View style={styles.inputsContainer}>
                        {/* <Button title="Calculate GST" color="#008c85" style={styles.submitButton}/> */}
                        <Button
                            title="Calculate GST"
                            titleStyle={{ fontWeight: '500' }}
                            buttonStyle={{
                                backgroundColor: '#008c85',
                                borderColor: 'transparent',
                                borderWidth: 0,
                            }}
                            containerStyle={{
                                height: 45,
                            }}
                        />
                    </View>
                </View>


            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        height: "100%",
        backgroundColor: "#fff"
    },
    heading: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "700"
    },
    inputsContainer: {
        margin: 10,

    },
    input: {
        paddingHorizontal: 10,
        width: "86.2%",
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
    dropdownContainerStyle: {
        width: 120,
        paddingHorizontal: -20
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
    }
})
export default GstCalculator