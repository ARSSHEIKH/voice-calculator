import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

import Row from "../../../../components/Row";
import Button from "../../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import Header from '../../../../components/header';
import InterstitialAdsShow from '../../../../components/admob/interstitialAds/adShow';
import { useFocusEffect } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { Divider } from "react-native-elements";
import dropdownList from "./dropdownList";
import { fuelEffieciencyCalculation } from "./calculationLogic";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function FuelEfficiencyCalculator() {
    const dispatch = useDispatch()
    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const [noOfLines, setNoOfLines] = useState(4)
    const operators = ["+", "-", "*", "/", ".", "%"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);
    const adClosed = useSelector(state => state.adClosed);
    const [selectedChargeFrom, setSelectedChargeFrom] = useState(dropdownList[0].value);
    const [selectedChargeTo, setSelectedChargeTo] = useState(dropdownList[1].value);

    // console.log("containerStyle", voltage(1).from('V').to('mV').value)
    // useFocusEffect(
    //     React.useCallback(() => {
    //         dispatch({ type: "set_tabs_state", payload: 0 })
    //         dispatch({ type: "reset_adClosed" })
    //         return () => {
    //             dispatch({ type: "reset_adClosed" })
    //         };
    //     }, [])
    // )

    //#region calculation methods

    // J_per_kg
    const forJ_per_kg = () => {
        if (selectedChargeFrom === "J/kg" && selectedChargeTo === "kJ/kg") {
            const value = fuelEffieciencyCalculation("J/kg to kJ/kg", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "cal/g") {
            const value = fuelEffieciencyCalculation("J/kg to cal/g", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "cal (th)/g") {
            const value = fuelEffieciencyCalculation("J/kg to cal (th)/g", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "kg/J") {
            const value = fuelEffieciencyCalculation("J/kg to kg/J", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "kg/kJ") {
            const value = fuelEffieciencyCalculation("J/kg to kg/kJ", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "g/cal") {
            const value = fuelEffieciencyCalculation("J/kg to g/cal", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "g/cal (th)") {
            const value = fuelEffieciencyCalculation("J/kg to g/cal (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "Btu/lb") {
            const value = fuelEffieciencyCalculation("J/kg to Btu/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "Btu (th)/lb") {
            const value = fuelEffieciencyCalculation("J/kg to Btu (th)/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "lb/Btu") {
            const value = fuelEffieciencyCalculation("J/kg to lb/Btu", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "lb/Btu (th)") {
            const value = fuelEffieciencyCalculation("J/kg to lb/Btu (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === 'lb/(hp*h)') {
            const value = fuelEffieciencyCalculation("J/kg to lb/(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === "g(hp*h)") {
            const value = fuelEffieciencyCalculation("J/kg to g(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "J/kg" && selectedChargeTo === 'g(kW*h)') {
            const value = fuelEffieciencyCalculation("J/kg to g(kW*h)", calc);
            setRes(value);
        }
    };

    const forkJ_per_kg = () => {
        if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "J/kg") {
            const value = fuelEffieciencyCalculation("kJ/kg to J/kg", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "cal/g") {
            const value = fuelEffieciencyCalculation("kJ/kg to cal/g", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "cal (th)/g") {
            const value = fuelEffieciencyCalculation("kJ/kg to cal (th)/g", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "kg/J") {
            const value = fuelEffieciencyCalculation("kJ/kg to kg/J", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "kg/kJ") {
            const value = fuelEffieciencyCalculation("kJ/kg to kg/kJ", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "g/cal") {
            const value = fuelEffieciencyCalculation("kJ/kg to g/cal", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "g/cal (th)") {
            const value = fuelEffieciencyCalculation("kJ/kg to g/cal (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "Btu/lb") {
            const value = fuelEffieciencyCalculation("kJ/kg to Btu/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "Btu (th)/lb") {
            const value = fuelEffieciencyCalculation("kJ/kg to Btu (th)/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "lb/Btu") {
            const value = fuelEffieciencyCalculation("kJ/kg to lb/Btu", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "lb/Btu (th)") {
            const value = fuelEffieciencyCalculation("kJ/kg to lb/Btu (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === 'lb/(hp*h)') {
            const value = fuelEffieciencyCalculation("kJ/kg to lb/(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === "g(hp*h)") {
            const value = fuelEffieciencyCalculation("kJ/kg to g(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "kJ/kg" && selectedChargeTo === 'g(kW*h)') {
            const value = fuelEffieciencyCalculation("kJ/kg to g(kW*h)", calc);
            setRes(value);
        }
    };

    const forcal_per_g = () => {
        if (selectedChargeFrom === "cal/g" && selectedChargeTo === "J/kg") {
            const value = fuelEffieciencyCalculation("cal/g to J/kg", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "kJ/kg") {
            const value = fuelEffieciencyCalculation("cal/g to kJ/kg", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "cal (th)/g") {
            const value = fuelEffieciencyCalculation("cal/g to cal (th)/g", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "kg/J") {
            const value = fuelEffieciencyCalculation("cal/g to kg/J", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "kg/kJ") {
            const value = fuelEffieciencyCalculation("cal/g to kg/kJ", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "g/cal") {
            const value = fuelEffieciencyCalculation("cal/g to g/cal", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "g/cal (th)") {
            const value = fuelEffieciencyCalculation("cal/g to g/cal (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "Btu/lb") {
            const value = fuelEffieciencyCalculation("cal/g to Btu/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "Btu (th)/lb") {
            const value = fuelEffieciencyCalculation("cal/g to Btu (th)/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "lb/Btu") {
            const value = fuelEffieciencyCalculation("cal/g to lb/Btu", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "lb/Btu (th)") {
            const value = fuelEffieciencyCalculation("cal/g to lb/Btu (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === 'lb/(hp*h)') {
            const value = fuelEffieciencyCalculation("cal/g to lb/(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === "g(hp*h)") {
            const value = fuelEffieciencyCalculation("cal/g to g(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal/g" && selectedChargeTo === 'g(kW*h)') {
            const value = fuelEffieciencyCalculation("cal/g to g(kW*h)", calc);
            setRes(value);
        }
    };

    const forcal_th_per_g = () => {
        if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "J/kg") {
            const value = fuelEffieciencyCalculation("cal (th)/g to J/kg", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "kJ/kg") {
            const value = fuelEffieciencyCalculation("cal (th)/g to kJ/kg", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "cal (th)/g") {
            const value = fuelEffieciencyCalculation("cal (th)/g to cal/g", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "kg/J") {
            const value = fuelEffieciencyCalculation("cal (th)/g to kg/J", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "kg/kJ") {
            const value = fuelEffieciencyCalculation("cal (th)/g to kg/kJ", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "g/cal") {
            const value = fuelEffieciencyCalculation("cal (th)/g to g/cal", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "g/cal (th)") {
            const value = fuelEffieciencyCalculation("cal (th)/g to g/cal (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "Btu/lb") {
            const value = fuelEffieciencyCalculation("cal (th)/g to Btu/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "Btu (th)/lb") {
            const value = fuelEffieciencyCalculation("cal (th)/g to Btu (th)/lb", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "lb/Btu") {
            const value = fuelEffieciencyCalculation("cal (th)/g to lb/Btu", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "lb/Btu (th)") {
            const value = fuelEffieciencyCalculation("cal (th)/g to lb/Btu (th)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === 'lb/(hp*h)') {
            const value = fuelEffieciencyCalculation("cal (th)/g to lb/(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === "g(hp*h)") {
            const value = fuelEffieciencyCalculation("cal (th)/g to g(hp*h)", calc);
            setRes(value);
        }
        else if (selectedChargeFrom === "cal (th)/g" && selectedChargeTo === 'g(kW*h)') {
            const value = fuelEffieciencyCalculation("cal (th)/g to g(kW*h)", calc);
            setRes(value);
        }
    };
    //#endregion

    useEffect(() => {
        if (selectedChargeFrom === selectedChargeTo) setRes(calc);
        else if (selectedChargeFrom === "J/kg") forJ_per_kg();
        else if (selectedChargeFrom === "kJ/kg") forkJ_per_kg();
        else if (selectedChargeFrom === "cal/g") forcal_per_g();
        else if (selectedChargeFrom === "cal (th)/g") forcal_th_per_g();
    }, [selectedChargeFrom, selectedChargeTo, calc]);

    const handleTap = (type, value) => {
        if (value === 0 && calc === "" || operators.includes(value) && calc === "" || operators.includes(value) && operators.includes(calc.slice(-1)))
            return;
        if (value !== "=") {
            if (value !== "+/-") {
                let temp_str = ""
                setCalc(calc + value);
                temp_str = calc + value
                values_array = temp_str.split("");
            }
            else {
                if (lastIndexOfCalc > 0) {
                    values_array.splice(lastIndexOfCalc + 1, 1)
                    setCalc(values_array.toString().replace(/,/g, ""))
                    setRes(eval(values_array.toString().replace(/,/g, "")));
                    lastIndexOfCalc = 0
                    return
                }
                let findOperatorInString = false
                values_array.forEach(element => {

                    if (operators.includes(element)) {
                        findOperatorInString = true
                        return
                    }
                });
                if (!findOperatorInString) {
                    values_array[0] = parseFloat(values_array[0]) * -1;
                    setCalc(values_array.toString().replace(/,/g, ""))
                    setRes(eval(values_array.toString().replace(/,/g, "")));
                }
                else {
                    if (lastIndexOfCalc > 0) {
                        values_array.splice(lastIndexOfCalc + 1, 0, "-")
                        setCalc(values_array.toString().replace(/,/g, ""))
                        setRes(eval(values_array.toString().replace(/,/g, "")));
                    }
                }
            }
        }
        if (value === "=") {
            setCalc(res);
            setRes("")
        }

    };

    const clearAll = () => {
        setCalc("");
        setRes("")
        lastIndexOfCalc = 0;
        values_array = [];
        setNoOfLines(4)
    }
    const deleteLast = () => {
        values_array = [];
        lastIndexOfCalc = 0;
        if (calc == "")
            return;
        const value = calc.slice(0, -1)
        setCalc(value)
        try {
            setRes(eval(value).toString())
        } catch {
            setRes(eval(value + 0).toString())
        }
    };

    return (
        // adClosed ?
        <SafeAreaView style={{ backgroundColor: theme_mode.backgroundColor }}>
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Fuel Efficiency" headingLast="Calculator" />

            <View style={{ ...styles.calcContainer, color: theme_mode.backgroundColor, }}>
                <View style={styles.subContainer}>
                    <View style={styles.innerContainer}>

                        <View style={styles.inputContainer}>
                            <View style={styles.inputCard}>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={styles.lbltext}>From</Text>
                                    <Text style={styles.lbltext}>{calc || 0}</Text>
                                </View>
                                <View>
                                    <Dropdown
                                        style={styles.dropdown}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        search
                                        placeholderStyle={styles.dropdownPlaceholerStyle}
                                        containerStyle={styles.dropdownContainerStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        iconStyle={styles.iconStyle}
                                        data={dropdownList}
                                        maxHeight={windowHeight / 2}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select item"
                                        searchPlaceholder="Search..."
                                        value={selectedChargeFrom}
                                        onChange={item => {
                                            setSelectedChargeFrom(item.value);
                                        }}
                                    />
                                </View>
                                <Divider width={1} color="#0c0c0c" />
                            </View>
                            <View style={styles.inputCard}>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={styles.lbltext}>To</Text>
                                    <Text style={styles.lbltext}>{res !== 0 ? res : 0}</Text>
                                </View>
                                <View>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.dropdownPlaceholerStyle}
                                        containerStyle={styles.dropdownContainerStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        iconStyle={styles.iconStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        search
                                        data={dropdownList}
                                        maxHeight={windowHeight / 2}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select item"
                                        searchPlaceholder="Search..."
                                        value={selectedChargeTo}
                                        onChange={item => {
                                            setSelectedChargeTo(item.value);
                                        }}
                                    />
                                </View>
                                <Divider width={1} color="#0c0c0c" />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Row>
                                <Button theme_mode={theme_mode.buttons} text="7" theme="accent" onPress={() => handleTap("number", 7)} />
                                <Button theme_mode={theme_mode.buttons} text="8" theme="accent" onPress={() => handleTap("number", 8)} />
                                <Button theme_mode={theme_mode.buttons} text="9" theme="accent" onPress={() => handleTap("number", 9)} />
                            </Row>

                            <Row>
                                <Button theme_mode={theme_mode.buttons} text="4" theme="accent" onPress={() => handleTap("number", 4)} />
                                <Button theme_mode={theme_mode.buttons} text="5" theme="accent" onPress={() => handleTap("number", 5)} />
                                <Button theme_mode={theme_mode.buttons} text="6" theme="accent" onPress={() => handleTap("number", 6)} />
                                <Button theme_mode={theme_mode.buttons} text="AC" theme="secondary" onPress={clearAll} />
                            </Row>

                            <Row>
                                <Button theme_mode={theme_mode.buttons} text="1" theme="accent" onPress={() => handleTap("number", 1)} />
                                <Button theme_mode={theme_mode.buttons} text="2" theme="accent" onPress={() => handleTap("number", 2)} />
                                <Button theme_mode={theme_mode.buttons} text="3" theme="accent" onPress={() => handleTap("number", 3)} />
                                <Button theme_mode={theme_mode.buttons} text="backspace" theme="secondary" onPress={deleteLast} />
                            </Row>

                            <Row>
                                <Button theme_mode={theme_mode.buttons} text="." theme="accent" onPress={() => handleTap("number", ".")} />
                                <Button theme_mode={theme_mode.buttons} text="+/-" theme="accent" onPress={() => handleTap("posneg", "+/-")} />
                                <Button theme_mode={theme_mode.buttons} text="0" theme="accent" onPress={() => handleTap("number", 0)} />
                                <Button theme_mode={theme_mode.buttons} text="=" theme="accent" onPress={() => handleTap("operator", "=")} />
                            </Row>
                        </View>

                    </View >
                </View >
            </View >

        </SafeAreaView>
        // :
        // <InterstitialAdsShow />
    );
}

const styles = StyleSheet.create({
    calcContainer: {
        paddingTop: windowHeight / 20,
        height: windowHeight,
    },
    subContainer: {
        alignSelf: "flex-end",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",

    },
    inputContainer: {
        minHeight: windowHeight / 3,
        width: "80%",
        alignSelf: "center"

    },
    inputCard: {
        display: "flex",
        backgroundColor: "#f0f0f0",
        marginBottom: 10,
        paddingHorizontal: 20,
        height: windowHeight / 6,
        justifyContent: "center",
    },
    lbltext: {
        fontSize: 20,
        fontWeight: "700",
        color: "#0c0c0c"

    },
    inputValue: {
        textAlign: "right",
        fontSize: 20,
        marginHorizontal: 7


    },
    dropdown: {
        width: "100%",
        color: "#0c0c0c",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        height: "auto"
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdownPlaceholerStyle: {
        fontWeight: "700",
        color: "#837676",
        fontSize: Math.floor((windowWidth / 30))
    },
    dropdownContainerStyle: {
        width: "80%",
        color: "#0c0c0c",
    },
    selectedTextStyle: {
        color: "#0c0c0c",
        fontSize: Math.floor((windowWidth / 22))
    },
    value: {
        fontSize: 40,
        textAlign: "right",
        marginHorizontal: 7
    },
    buttonContainer: {
    },
});