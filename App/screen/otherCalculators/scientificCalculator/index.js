import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";
import { Tooltip } from 'react-native-elements';
import { useFocusEffect } from "@react-navigation/native";

const exprFontSize = 30
const previewBg = 'transparent';
const previewTextColor = '#000';
const borderColor = '#f9f9f9';
const buttonBg = '#f1f3f4';
const buttonTextColor = '#000000';
const numberBg = '#ffffff';
const numberButtonTextColor = '#000000';
const clearBg = '#eb6161';
const clearButtonTextColor = '#ffffff';
const equalsBg = '#4285f4';
const equalsButtonTextColor = '#ffffff';
const btn = {
    borderWidth: 2,
    borderColor: borderColor,
    borderRadius: 5,
    backgroundColor: buttonBg,
    color: buttonTextColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "normal"
}

export default function ScientificCalculator() {
    const dispatch = useDispatch()
    const theme_back = useSelector(state => state.theme_state.header);
    const screenTheme = useSelector(state => state.theme_state.screens.scientificCalculator);

    const [expr, setExpr] = useState([0]);
    const [result, setResult] = useState(0);
    const [solution, setSolution] = useState("0");
    const [equalled, setEqualled] = useState(false);
    const [inverted, setInverted] = useState(false);

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

    //#region handles

    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    useEffect(() => {
        let res = result;
        try {
            let temp_arr = [...expr]
            temp_arr.forEach((element, index)=>{
                if(element===","){
                    temp_arr[index] = ""
                }

            });
            res = eval(temp_arr.join(""));
        } catch (error) {
            //console.log(error)
        }
        if (isNaN(res)) {
            //console.log("error occured1")
        } else {
            setResult(separator(res))
        }
    }, [expr]);

    const calculate = () => {
        let res = result;
        try {
            res = Mathjs.evaluate(expr.join(""));
        } catch (error) {
            //console.log(error)
        }
        if (isNaN(res)) {
            console.log("error occured3")
        } else {
            setExpr([res]);
        }
        setEqualled(true);
    }

    const numPressed = (val, tip = "") => {
        if (equalled) {
            setExpr([val]);
        } else {
            if (expr.join() === "0") {
                setExpr([val]);
            } else {
                setExpr([...expr, val]);
            }
        }
        setEqualled(false);
        //calculate();
    }
    const buttonPressed = (val, tip = "") => {
        setExpr([...expr, val]);
        setEqualled(false);
        //calculate();
    }

    const functionPressed = (val, tip = "") => {
        if (equalled) {
            setExpr([val, ...expr, ')']);
        } else {
            if (expr.join("") === "0") {
                setExpr([val])
            } else {
                let last = [...expr].pop();
                if (isNaN(last)) {
                    setExpr([...expr, val])
                } else {
                    setExpr([...expr, "*", val])
                }
            }
        }
        //setExpr([...expr, val]);
        setEqualled(false);
        //calculate();
    }

    const deleteHandler = () => {
        if (expr.length > 0) {
            let _expr = [...expr];
            if (equalled) {
                let arr = Array.from(_expr.toString())
                arr.pop();
                _expr = [arr.join("")];
            } else {
                _expr.pop();
                if (_expr.length === 0) _expr.push(0)
            }
            setExpr(_expr);
        }
    }

    const clearHandler = () => {
        setExpr([0]);
    }

    const dotHandler = () => {
        if (equalled) {
            setExpr([0, "."]);
        } else {
            let index = expr.lastIndexOf(".");
            if (index > -1) {
                let num = expr.slice(index).join("");
                console.log(num)
                if (isNaN(num)) {
                    setExpr([...expr, "."]);
                }
            } else {
                setExpr([...expr, "."]);
            }
            console.log(index)
        }
        setEqualled(false);
    }
    //#endregion

    //#region display

    const StyledText = ({ children: _children, style }) => {
        return <Text style={{ color: style.color, fontSize: style.fontSize, fontWeight: style.fontWeight }}>{_children}</Text>
    }

    const Invertable = ({ style, yes, no }) => {
        return inverted
            ? <TouchableOpacity style={style} onPressIn={yes.onPress}>
                {yes.children}
            </TouchableOpacity>
            : <TouchableOpacity style={style} onPressIn={no.onPress}>
                {no.children}
            </TouchableOpacity>
    }

    const SuperScriptText = ({ style, text, supText }) => <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <StyledText style={style}>{text}</StyledText>
        <Text style={{ fontSize: style.fontSize * 0.6, color: style.color }}>{supText}</Text>
    </View>

    const Display = () => <View style={{ ...styles.display, backgroundColor: screenTheme.backgroundColor }}>
        <TextInput
            onContentSizeChange={x => {
                //console.log(x)
            }}
            style={{ ...styles.expression, color: screenTheme.expressionTextColor }}
            multiline={true}
            value={expr.join("")}
            textAlign="right"
            textAlignVertical="bottom"
            editable={false} />
        <Text style={{ ...styles.result, color: screenTheme.previewTextColor }}>{result}</Text>
    </View>
    const Scientific = () => <View style={{ flex: 3 }}>
        <View style={styles.row}>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
            // onPressIn={() => numPressed("deg")}
            >
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>deg</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
            // onPressIn={() => numPressed("rad")}
            >
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>rad</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
            // onPressIn={() => numPressed("π", `π = ${22 / 7}`)}
            >
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>π</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
            // onPressIn={() => numPressed("e", `e = ${Math.E}`)}
            >
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>e</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
            // onPressIn={() => functionPressed("exp(", "exp(x) - e to the power of x")}
            >
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>Exp</StyledText>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <Invertable style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
                yes={{
                    children: <SuperScriptText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} text="sin" supText="-1" />,
                    onPress: () => functionPressed("asin(")
                }}
                no={{
                    children: <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>sin</StyledText>,
                    onPress: () => functionPressed("sin(")
                }}
            />
            <Invertable style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
                yes={{
                    children: <SuperScriptText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} text="cos" supText="-1" />,
                    onPress: () => functionPressed("acos(")
                }}
                no={{
                    children: <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>cos</StyledText>,
                    onPress: () => functionPressed("cos(")
                }}
            />
            <Invertable style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
                yes={{
                    children: <SuperScriptText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} text="tan" supText="-1" />,
                    onPress: () => functionPressed("atan(")
                }}
                no={{
                    children: <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>tan</StyledText>,
                    onPress: () => functionPressed("tan(")
                }}
            />
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => functionPressed("ln(", "Natural Log(x)")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>ln</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => functionPressed("log(")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>log</StyledText>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <Invertable style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
                yes={{
                    children: <SuperScriptText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} text="sinh" supText="-1" />,
                    onPress: () => functionPressed("asinh(")
                }}
                no={{
                    children: <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>sinh</StyledText>,
                    onPress: () => functionPressed("sinh(")
                }}
            />
            <Invertable style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
                yes={{
                    children: <SuperScriptText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} text="cosh" supText="-1" />,
                    onPress: () => functionPressed("acosh(")
                }}
                no={{
                    children: <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>cosh</StyledText>,
                    onPress: () => functionPressed("cosh(")
                }}
            />
            <Invertable style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}
                yes={{
                    children: <SuperScriptText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} text="tanh" supText="-1" />,
                    onPress: () => functionPressed("atanh(")
                }}
                no={{
                    children: <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>tanh</StyledText>,
                    onPress: () => functionPressed("tanh(")
                }}
            />
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => functionPressed("atan2(")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>atan2</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => setInverted(!inverted)}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>INV</StyledText>
            </TouchableOpacity>
        </View>
    </View>

    const Actions = () => <View style={{ flex: 5 }}>
        <View style={styles.row}>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => functionPressed("sqrt(", "square root = √x")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>√</StyledText>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    ...styles.button,
                    borderColor: screenTheme.buttonBorderColor,
                    backgroundColor: screenTheme.buttonBg,
                    color: screenTheme.buttonTextColor
                }}
                onPress={() => buttonPressed("(", `long press for entering ")"`)} onLongPress={() => buttonPressed(")")} >

                <Tooltip popover={<Text>Long press for close ")"</Text>}>
                    <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>( )</StyledText>
                </Tooltip>
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed("!", "Factorial")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>n!</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed("%", " x % y (x modulo y)")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>%</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed("/")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>÷</StyledText>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => functionPressed("cbrt(", "cube root = ∛x")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>∛</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("7")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>7</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("8")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>8</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("9")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>9</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed("*")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>×</StyledText>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed("^", "x^y (x raised to the power of y)")}>
                <SuperScriptText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} text="x" supText="y" />
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("4")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>4</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("5")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>5</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("6")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>6</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed("-")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>−</StyledText>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={{ ...styles.buttonClear, borderColor: screenTheme.buttonBorderColor }} onPressIn={() => deleteHandler()}>
                <StyledText style={{ ...styles.buttonClear, borderColor: screenTheme.buttonBorderColor }}>Del</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("1")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>1</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("2")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>2</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("3")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>3</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed("+")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>+</StyledText>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={{ ...styles.buttonClear, borderColor: screenTheme.buttonBorderColor }} onPressIn={clearHandler}>
                <StyledText style={{ ...styles.buttonClear, borderColor: screenTheme.buttonBorderColor }}>AC</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => dotHandler()}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>.</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }} onPressIn={() => numPressed("0")}>
                <StyledText style={{ ...styles.buttonNumber, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.numberBg, color: screenTheme.numberButtonTextColor }}>0</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }} onPressIn={() => buttonPressed(",")}>
                <StyledText style={{ ...styles.button, borderColor: screenTheme.buttonBorderColor, backgroundColor: screenTheme.buttonBg, color: screenTheme.buttonTextColor }}>,</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonEquals, borderColor: screenTheme.buttonBorderColor }} onPressIn={() => calculate()}>
                <StyledText style={{ ...styles.buttonEquals, borderColor: screenTheme.buttonBorderColor }}>=</StyledText>
            </TouchableOpacity>
        </View>
    </View>
    //#endregion

    return (
        <>
            <Header theme_mode={theme_back} tabsShow={false} />
            <View style={{ ...styles.container, backgroundColor: screenTheme.backgroundColor }}>
                <Display />
                <View style={{ position: "relative", flex: 7 }}>
                    <Scientific />
                    <Actions />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    display: {
        padding: 5,
        flex: 1.5,
        flexShrink: 0,
        justifyContent: "center",
        minHeight: exprFontSize * 2.3,
    },
    expression: {
        flex: 1,
        backgroundColor: "transparent",
        display: "flex",
        textAlign: "right",
        alignItems: "flex-end",
        fontSize: exprFontSize,
        lineHeight: exprFontSize,
        fontWeight: "bold",
        //minHeight: exprFontSize * 2.2,
        marginTop: "auto"
    },
    result: {
        backgroundColor: previewBg,
        color: previewTextColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        lineHeight: exprFontSize * 0.5,
        fontSize: exprFontSize * 0.5,
        textAlign: "right",
        marginTop: 5,
        marginRight: 10
    },
    row: {
        display: "flex",
        flexDirection: "row",
        flex: 1
    },
    button: btn,
    buttonEquals: {
        ...btn,
        backgroundColor: equalsBg,
        color: equalsButtonTextColor,
        fontWeight: "bold"
    },
    buttonClear: {
        ...btn,
        backgroundColor: clearBg,
        color: clearButtonTextColor
    },
    buttonNumber: {
        ...btn,
        backgroundColor: numberBg,
        color: numberButtonTextColor
    }
});