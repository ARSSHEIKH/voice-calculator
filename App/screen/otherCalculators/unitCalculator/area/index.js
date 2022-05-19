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
import { squarekilometer_Calculation } from "./calculationLogic/areaCalculation";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function AreaCalculator() {
    const dispatch = useDispatch()
    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const [noOfLines, setNoOfLines] = useState(4)
    const operators = ["+", "-", "*", "/", ".", "%"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);
    const adClosed = useSelector(state => state.adClosed);
    const [selectedAngleFrom, setSelectedAngleFrom] = useState(dropdownList[0].value);
    const [selectedAngleTo, setSelectedAngleTo] = useState(dropdownList[1].value);


    // useFocusEffect(
    //     React.useCallback(() => {
    //         dispatch({ type: "set_tabs_state", payload: 0 })
    //         dispatch({ type: "reset_adClosed" })
    //         return () => {
    //             dispatch({ type: "reset_adClosed" })
    //         };
    //     }, [])
    // )

    const forSquarekilometer = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_meter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_hectometer to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_dekameter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_decimeter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_centimeter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_milimeter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_micrometer to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_nanometer to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("hectare to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arc" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("arc to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("barn to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_mile to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_mile_us to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_yard to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_foot to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_foot_us to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_inch to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("circular_inch to square_kilometer", calc);
            setRes(value)
        }
    }

    useEffect(() => {
        if (selectedAngleTo === "square_kilometer") forSquarekilometer();
    }, [selectedAngleFrom, selectedAngleTo, calc])

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
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Area Calculator" />

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
                                        value={selectedAngleFrom}
                                        onChange={item => {
                                            setSelectedAngleFrom(item.value);
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
                                        value={selectedAngleTo}
                                        onChange={item => {
                                            setSelectedAngleTo(item.value);
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