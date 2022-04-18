import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

import Row from "../../components/Row";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import Header from '../../components/header';

const windowHeight = Dimensions.get('window').height;

export default function SimpleCalculator() {

    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const operators = ["+", "-", "*", "/", ".", "%"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);

    const handleTap = (type, value) => {
        if (value !== "+/-") {
            if (value === 0 && calc === "" || operators.includes(value) && calc === "" || operators.includes(value) && operators.includes(calc.slice(-1)))
                return;

            if (value !== "=")
                setCalc(calc + value)

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
        }

        // if (value === "+/-") {
        //     // if (calc.length === 1) {
        //     //     if (posnegOperator === "") {
        //     //         posnegOperator = "-";
        //     //         setCalc(posnegOperator + calc)
        //     //     }
        //     //     else {
        //     //         posnegOperator = "";
        //     //         console.log("index", calc.slice(0,1))
        //     //         setCalc(calc.slice(0,1))
        //     //     }
        //     // }
        //     posnegOperator === "" ? posnegOperator = "-" : posnegOperator = "";
        //     for (let index = calc.length; index > 0; index--) {
        //         if (posnegOperator === "-")
        //             if (operators.includes(calc[index])) {
        //                 setCalc(calc.slice(0, index + 1) + posnegOperator + calc.slice(index + 1))
        //                 break
        //             }
        //             else { }
        //         else
        //             if (operators.includes(calc[index])) {
        //                 setCalc(calc.slice(0, index) + "" + calc.slice(index + 1))
        //                 break
        //             }
        //     }
        // }
    };
    const clearAll = () => {
        setCalc("");
        setRes("")
    }
    const deleteLast = () => {
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
        <View style={{ backgroundColor: theme_mode.backgroundColor,}}>
            <Header theme_mode={theme_back} />
            <SafeAreaView style={{ color: theme_mode.backgroundColor, marginTop: windowHeight / 4.5 }}>
                <View style={styles.inputContainer}>
                    <Text style={{ ...styles.inputValue, color: theme_mode.inputValue.color }}>
                        {calc || 0}
                    </Text>
                    <Text style={{ ...styles.value, color: theme_mode.value.color }}>
                        {res !== 0 ? res : ""}
                    </Text>
                </View>

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
                    <Button theme_mode={theme_mode.buttons}
                        text="x"
                        theme="accent"
                        onPress={() => handleTap("operator", "*")}
                    />
                </Row>

                <Row>
                    <Button theme_mode={theme_mode.buttons} text="4" onPress={() => handleTap("number", 4)} />
                    <Button theme_mode={theme_mode.buttons} text="5" onPress={() => handleTap("number", 5)} />
                    <Button theme_mode={theme_mode.buttons} text="6" onPress={() => handleTap("number", 6)} />
                    <Button theme_mode={theme_mode.buttons}
                        text="-"
                        theme="accent"
                        onPress={() => handleTap("operator", "-")}
                    />
                </Row>

                <Row>
                    <Button theme_mode={theme_mode.buttons} text="1" onPress={() => handleTap("number", 1)} />
                    <Button theme_mode={theme_mode.buttons} text="2" onPress={() => handleTap("number", 2)} />
                    <Button theme_mode={theme_mode.buttons} text="3" onPress={() => handleTap("number", 3)} />
                    <Button theme_mode={theme_mode.buttons}
                        text="+"
                        theme="accent"
                        onPress={() => handleTap("operator", "+")}
                    />
                </Row>

                <Row>
                    {/* <Button theme_mode={theme_mode.buttons}
                    text="+/-"
                    onPress={() => handleTap("posneg", "+/-")}
                /> */}
                    <Button theme_mode={theme_mode.buttons} text="." onPress={() => handleTap("number", ".")} />
                    <Button theme_mode={theme_mode.buttons}
                        text="0"
                        theme="double"
                        onPress={() => handleTap("number", 0)}
                    />
                    <Button theme_mode={theme_mode.buttons}
                        text="="
                        theme="accent"
                        onPress={() => handleTap("operator", "=")}
                    />
                </Row>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    inputValue: {
        textAlign: "right",
        fontSize: 20,
        marginRight: 20,
        marginBottom: 10,
        // backgroundColor: "#fff",
    },
    value: {
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10,
        // backgroundColor: "#fff",
    }
});