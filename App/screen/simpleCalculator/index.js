import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button as NavigateButton } from "react-native";

import Row from "../../components/Row";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
// import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get('window').height;

export default function SimpleCalculator() {

    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const operators = ["+", "-", "*", "/", "."];
    // const navigation = useNavigation()
    const screenState = useSelector(state => state.tabs_state);
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
  
    // useEffect(() => {
    //     screenState === 0 ? navigation.navigate("SimpleCalculator") : navigation.navigate("VoiceCalculator")
    // }, [screenState])

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
                setCalc(res);
                setRes("")
            }
        }
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
        <SafeAreaView style={{ color: theme_mode.backgroundColor, marginTop: windowHeight/4.5 }}>
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
                <Button theme_mode={theme_mode.buttons} text="%" theme="accent" onPress={() => handleTap("percentage")} />
                <Button theme_mode={theme_mode.buttons} text="/" theme="accent" onPress={() => handleTap("operator", "/")} />
            </Row>

            <Row>
                <Button  theme_mode={theme_mode.buttons} text="7" onPress={() => handleTap("number", 7)} />
                <Button  theme_mode={theme_mode.buttons} text="8" onPress={() => handleTap("number", 8)} />
                <Button  theme_mode={theme_mode.buttons} text="9" onPress={() => handleTap("number", 9)} />
                <Button  theme_mode={theme_mode.buttons}
                    text="x"
                    theme="accent"
                    onPress={() => handleTap("operator", "*")}
                />
            </Row>

            <Row>
                <Button  theme_mode={theme_mode.buttons} text="4" onPress={() => handleTap("number", 4)} />
                <Button  theme_mode={theme_mode.buttons} text="5" onPress={() => handleTap("number", 5)} />
                <Button  theme_mode={theme_mode.buttons} text="6" onPress={() => handleTap("number", 6)} />
                <Button  theme_mode={theme_mode.buttons}
                    text="-"
                    theme="accent"
                    onPress={() => handleTap("operator", "-")}
                />
            </Row>

            <Row>
                <Button  theme_mode={theme_mode.buttons} text="1" onPress={() => handleTap("number", 1)} />
                <Button  theme_mode={theme_mode.buttons} text="2" onPress={() => handleTap("number", 2)} />
                <Button  theme_mode={theme_mode.buttons} text="3" onPress={() => handleTap("number", 3)} />
                <Button  theme_mode={theme_mode.buttons}
                    text="+"
                    theme="accent"
                    onPress={() => handleTap("operator", "+")}
                />
            </Row>

            <Row>
                <Button  theme_mode={theme_mode.buttons}
                    text="+/-"
                    onPress={() => handleTap("posneg")}
                />
                <Button  theme_mode={theme_mode.buttons}
                    text="0"
                    onPress={() => handleTap("number", 0)}
                />
                <Button  theme_mode={theme_mode.buttons} text="." onPress={() => handleTap("number", ".")} />
                <Button  theme_mode={theme_mode.buttons}
                    text="="
                    theme="accent"
                    onPress={() => handleTap("operator", "=")}
                />
            </Row>
        </SafeAreaView>
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