import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

import Row from "../components/Row";
import Button from "../components/Button";

const windowWidth = Dimensions.get('window').width;

export default function SimpleCalculator() {

    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const [solution, setSolution] = useState('');
    const operators = ["+", "-", "*", "/", "."];

    const handleTap = (type, value) => {
        console.log("value", value === 0 && calc === "");
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
                setSolution(res)
                setCalc(res);
                setRes("")
            }
        }
    };
    const clearAll = () => {
        setSolution("")
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
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputValue}>
                    {calc || 0}
                </Text>
                <Text style={styles.value}>
                    {res !== 0 ? res : ""}
                </Text>
            </View>
            <Row>
                <Button
                    text="AC"
                    theme="secondary"
                    onPress={clearAll}
                />
                <Button
                    text="backspace"
                    theme="secondary"
                    onPress={deleteLast}
                />
                <Button
                    text="%"
                    theme="secondary"
                    onPress={() => handleTap("percentage")}
                />
                <Button
                    text="/"
                    theme="accent"
                    onPress={() => handleTap("operator", "/")}
                />
            </Row>

            <Row>
                <Button text="7" onPress={() => handleTap("number", 7)} />
                <Button text="8" onPress={() => handleTap("number", 8)} />
                <Button text="9" onPress={() => handleTap("number", 9)} />
                <Button
                    text="x"
                    theme="accent"
                    onPress={() => handleTap("operator", "*")}
                />
            </Row>

            <Row>
                <Button text="4" onPress={() => handleTap("number", 4)} />
                <Button text="5" onPress={() => handleTap("number", 5)} />
                <Button text="6" onPress={() => handleTap("number", 6)} />
                <Button
                    text="-"
                    theme="accent"
                    onPress={() => handleTap("operator", "-")}
                />
            </Row>

            <Row>
                <Button text="1" onPress={() => handleTap("number", 1)} />
                <Button text="2" onPress={() => handleTap("number", 2)} />
                <Button text="3" onPress={() => handleTap("number", 3)} />
                <Button
                    text="+"
                    theme="accent"
                    onPress={() => handleTap("operator", "+")}
                />
            </Row>

            <Row>
                <Button
                    text="+/-"
                    onPress={() => handleTap("posneg")}
                />
                <Button
                    text="0"
                    onPress={() => handleTap("number", 0)}
                />
                <Button text="." onPress={() => handleTap("number", ".")} />
                <Button
                    text="="
                    theme="accent"
                    onPress={() => handleTap("operator", "=")}
                />
            </Row>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",

    },
    inputContainer:{
        // backgroundColor: "#fff",
        // height: windowWidth/1.5,
    },
    inputValue: {
        textAlign: "right",
        fontSize: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: "#fff",
        color: "#3b3b3b"
        // position:"absolute",
        // bottom:50,
        // right:0,

    },
    value: {
        color: "#000",
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: "#fff",
        // position:"absolute",
        // bottom:0,
        // right:0,
    }
});