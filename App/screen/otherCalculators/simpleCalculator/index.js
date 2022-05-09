import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, TextInput } from "react-native";

import Row from "../../../components/Row";
import Button from "../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import Header from '../../../components/header';
import InterstitialAdsShow from '../../../components/admob/interstitialAds/adShow';
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "react-native";

const windowHeight = Dimensions.get('window').height;

let values_array = []
let lastIndexOfCalc = 0;
export default function SimpleCalculator() {
    const dispatch = useDispatch()
    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const [noOfLines, setNoOfLines] = useState(4)
    const operators = ["+", "-", "*", "/", ".", "%"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);
    const adClosed = useSelector(state => state.adClosed);
    // useFocusEffect(
    //     React.useCallback(() => {
    //         dispatch({ type: "set_tabs_state", payload: 0 })
    //         dispatch({ type: "reset_adClosed" })
    //         return () => {
    //             dispatch({ type: "reset_adClosed" })
    //         };
    //     }, [])
    // );

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
                        console.log("49")
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
                    values_array.forEach((element, index) => {
                        if (operators.includes(element)) {
                            lastIndexOfCalc = index
                        }
                    });
                    if (lastIndexOfCalc > 0) {
                        values_array.splice(lastIndexOfCalc + 1, 0, "-")
                        setCalc(values_array.toString().replace(/,/g, ""))
                        setRes(eval(values_array.toString().replace(/,/g, "")));
                    }
                }
            }
        }
        try {
            if (!operators.includes(value)) {
                setRes(eval(calc + value).toString());
            }
        }
        catch {
            if (value === "=") {
                setCalc(res);
                setRes("")
            }
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
        adClosed ?
            <SafeAreaView style={{ backgroundColor: theme_mode.backgroundColor }}>
                <Header theme_mode={theme_back} tabsShow={true} />

                <View style={{...styles.calcContainer, color: theme_mode.backgroundColor, }}>
                    <View style={styles.subContainer}>
                        <View style={styles.innerContainer}>

                            <View style={styles.inputContainer}>
                                <View style={styles.inputInner}>

                                    {/* <SafeAreaView style={{ height: 150 }}> */}
                                    <ScrollView contentContainerStyle={styles.scrollView}>
                                    <Text style={{ ...styles.inputValue, color: theme_mode.inputValue.color }}>{calc || 0}
                                    </Text>
                                    </ScrollView>

                                    <Text style={{ ...styles.value, color: theme_mode.value.color }} adjustsFontSizeToFit numberOfLines={1}>
                                        {res !== 0 ? res : ""}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Row>
                                    <Button theme_mode={theme_mode.buttons} text="AC" theme="secondary" onPress={clearAll} />
                                    <Button theme_mode={theme_mode.buttons} text="backspace" theme="secondary" onPress={deleteLast} />
                                    <Button theme_mode={theme_mode.buttons} text="%" theme="accent" onPress={() => handleTap("percentage", "%")} />
                                    <Button theme_mode={theme_mode.buttons} text="/" theme="accent" onPress={() => handleTap("operator", "/")} />
                                </Row>

                                <Row>
                                    <Button theme_mode={theme_mode.buttons} text="7" onPress={() => handleTap("number", 7)} />
                                    <Button theme_mode={theme_mode.buttons} text="8" onPress={() => handleTap("number", 8)} />
                                    <Button theme_mode={theme_mode.buttons} text="9" onPress={() => handleTap("number", 9)} />
                                    <Button theme_mode={theme_mode.buttons} text="x" theme="accent" onPress={() => handleTap("operator", "*")} />
                                </Row>

                                <Row>
                                    <Button theme_mode={theme_mode.buttons} text="4" onPress={() => handleTap("number", 4)} />
                                    <Button theme_mode={theme_mode.buttons} text="5" onPress={() => handleTap("number", 5)} />
                                    <Button theme_mode={theme_mode.buttons} text="6" onPress={() => handleTap("number", 6)} />
                                    <Button theme_mode={theme_mode.buttons} text="-" theme="accent" onPress={() => handleTap("operator", "-")} />
                                </Row>

                                <Row>
                                    <Button theme_mode={theme_mode.buttons} text="1" onPress={() => handleTap("number", 1)} />
                                    <Button theme_mode={theme_mode.buttons} text="2" onPress={() => handleTap("number", 2)} />
                                    <Button theme_mode={theme_mode.buttons} text="3" onPress={() => handleTap("number", 3)} />
                                    <Button theme_mode={theme_mode.buttons} text="+" theme="accent" onPress={() => handleTap("operator", "+")} />
                                </Row>

                                <Row>
                                    <Button theme_mode={theme_mode.buttons} text="." onPress={() => handleTap("number", ".")} />
                                    <Button theme_mode={theme_mode.buttons} text="+/-" onPress={() => handleTap("posneg", "+/-")} />
                                    <Button theme_mode={theme_mode.buttons} text="0" onPress={() => handleTap("number", 0)} />
                                    <Button theme_mode={theme_mode.buttons} text="=" theme="accent" onPress={() => handleTap("operator", "=")} />
                                </Row>
                            </View>

                        </View >
                    </View >
                </View >


            </SafeAreaView>
            :
            <InterstitialAdsShow />
    );
}

const styles = StyleSheet.create({

    calcContainer: {
        height: windowHeight,
       
        // display: "flex", flexDirection: "column", justifyContent: "flex-end", marginTop: windowHeight / 3 
    },
    subContainer: {
        alignSelf: "flex-end",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        textAlign: "right",

    },
    innerContainer: {
        // marginLeft: 10,

    },
    buttonContainer: {
        // height: 
        // height: 300,
    },
    inputContainer: {
        display: "flex",
        minHeight: windowHeight/3,
        flexDirection: "row"

    },
    inputInner: {
        alignSelf: "flex-end",
        display: "flex",
        height: windowHeight/3,
        width: "100%",
        justifyContent: "flex-end",
    },
    inputValue: {
        textAlign: "right",
        fontSize: 20,
        marginHorizontal: 7
        
        
    },
    value: {
        fontSize: 40,
        textAlign: "right",
        marginHorizontal: 7
    },

    scrollView: {
        justifyContent: "flex-end",
        minHeight: (windowHeight/3)-50,
    }
});