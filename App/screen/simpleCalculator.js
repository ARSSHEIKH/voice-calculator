import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "../components/Row";
import Button from "../components/Button";
import calculator, { initialState } from "../util/calculator";
import Logic from "../util/logic";

export default class SimpleCalculator extends React.Component {
    state = initialState;
    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };
    render() {
        return (
            <SafeAreaView>
                <Text style={styles.inputValue}>
                    {this.state.previousValue === null ? "" : parseFloat(this.state.previousValue).toLocaleString()}
                    {this.state.operator}
                    {parseFloat(this.state.currentValue).toLocaleString()}
                </Text>
                <Text style={styles.value}>
                    {parseFloat(this.state.result).toLocaleString()}
                </Text>
                {/* <Logic type={this.state} /> */}
                <Row>
                    <Button
                        text="AC"
                        theme="secondary"
                        onPress={() => this.handleTap("clear")}
                    />
                    <Button
                        text="backspace"
                        theme="secondary"
                        onPress={() => this.handleTap("delete")}
                    />
                    <Button
                        text="%"
                        theme="secondary"
                        onPress={() => this.handleTap("percentage")}
                    />
                    <Button
                        text="/"
                        theme="accent"
                        onPress={() => this.handleTap("operator", "/")}
                    />
                </Row>

                <Row>
                    <Button text="7" onPress={() => this.handleTap("number", 7)} />
                    <Button text="8" onPress={() => this.handleTap("number", 8)} />
                    <Button text="9" onPress={() => this.handleTap("number", 9)} />
                    <Button
                        text="x"
                        theme="accent"
                        onPress={() => this.handleTap("operator", "*")}
                    />
                </Row>

                <Row>
                    <Button text="4" onPress={() => this.handleTap("number", 4)} />
                    <Button text="5" onPress={() => this.handleTap("number", 5)} />
                    <Button text="6" onPress={() => this.handleTap("number", 6)} />
                    <Button
                        text="-"
                        theme="accent"
                        onPress={() => this.handleTap("operator", "-")}
                    />
                </Row>

                <Row>
                    <Button text="1" onPress={() => this.handleTap("number", 1)} />
                    <Button text="2" onPress={() => this.handleTap("number", 2)} />
                    <Button text="3" onPress={() => this.handleTap("number", 3)} />
                    <Button
                        text="+"
                        theme="accent"
                        onPress={() => this.handleTap("operator", "+")}
                    />
                </Row>

                <Row>
                    <Button
                        text="+/-"
                        onPress={() => this.handleTap("posneg")}
                    />
                    <Button
                        text="0"
                        onPress={() => this.handleTap("number", 0)}
                    />
                    <Button text="." onPress={() => this.handleTap("number", ".")} />
                    <Button
                        text="="
                        theme="accent"
                        onPress={() => this.handleTap("equal")}
                    />
                </Row>
            </SafeAreaView>

        )

    }
}

const styles = StyleSheet.create({
    inputValue:{
        textAlign: "right",
        fontSize: 20,
        marginRight: 20,
        marginBottom: 10

    },
    value: {
        color: "#000",
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10
    }
});