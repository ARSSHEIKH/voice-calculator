import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, PermissionsAndroid } from 'react-native';
import Voice from '@react-native-community/voice';
import { Button, Icon } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {

    const [result, setResult] = useState('')
    const [solution, setSolution] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [textSolutionError, setTextSolutionError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;
        Voice.onSpeechPartialResults = onSpeechPartialResults
        Voice.onSpeechError = onSpeechError;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, [])

    const addPermissions = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: "Voice Calculator Audio Permission",
                message:
                    "Cool Photo App needs access to your camera " +
                    "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the voice");
            return true;
        } else {
            console.log("Camera permission denied");
            return false
        }
    }

    const onSpeechError = (e) => {
        console.log("onSpeechError", e.error.message);
        if (e.error.message === "7/No match")
            setErrorMessage(e.error.message.slice(2) + ", Try Again !")
        else
        setErrorMessage(e.error.message.slice(2))

    }

    const onSpeechStartHandler = (e) => {
        console.log("start handler==>>>", e)
    }
    const onSpeechEndHandler = (e) => {
        setLoading(false)
        console.log("stop handler", e)
    }

    const caseForOneOperator = (leftNumber, operator, rightOperator) => {
        let result = 0
        console.log("operator", operator)
        switch (operator) {
            case "+":
                result = parseFloat(leftNumber) + parseFloat(rightOperator);
                break;
            case "-":
                result = parseFloat(leftNumber) - parseFloat(rightOperator);
                break;
            case "x":
                result = parseFloat(leftNumber) * parseFloat(rightOperator);
                break;
            case "/":
                result = parseFloat(leftNumber) / parseFloat(rightOperator);
                break;
            case "divide":
                result = parseFloat(leftNumber) / parseFloat(rightOperator);
                break;
            default:
                break;
        }
        return result
    }
    const solvingMethod = (solveArray, left, mid, right) => {

        if (solveArray.length === 1) {
            setSolution(solveArray[0]);
        }

        else if (solveArray.length > 2) {
            for (let index = 2; index < solveArray.length; index += 2) {
                mid = solveArray[index - 1];
                right = solveArray[index];
                if (index === 2) {
                    left = caseForOneOperator(solveArray[index - 2], mid, right);
                    setSolution(left);
                }
                else {
                    left = caseForOneOperator(left, mid, right);
                    setSolution(left);
                }
            }
        }

        else {
            left = caseForOneOperator(solveArray[0], solveArray[1], right)
            setSolution(left);

        }
        return left
    }
    const findingArray = (newArray, left, mid, right) => {

        let solveArray = [];
        let startBracket_index = newArray.indexOf("(");
        let endBracket_index = newArray.indexOf(")");
        if (startBracket_index === -1 && endBracket_index === -1) {
            simpleData(newArray, left, mid, right)
            // left = solvingMethod(newArray, left, mid, right);
            // newArray = newArray.slice(newArray.length, newArray.length);
            // newArray.unshift(left);
            return
        }
        else if (endBracket_index === -1) {
            console.log("else if")
            solveArray = newArray.slice(startBracket_index + 1, newArray.length);
            newArray = newArray.slice(newArray.length, newArray.length);
            left = solvingMethod(solveArray, left, mid, right);
            newArray.unshift(left);
        }
        else {
            console.log("else")
            solveArray = newArray.slice(startBracket_index + 1, endBracket_index);
            // newArray = newArray.slice(endBracket_index + 1, newArray.length);

            left = solvingMethod(solveArray, left, mid, right);
            newArray.splice(startBracket_index, solveArray.length + 2, left);
            console.log("newArraynewArray", newArray)

        }
        // (2+3)+(1+3                                                                    )
        return { solveArray, newArray };
    }

    let recursiveIndex = 0;

    const recursiveFunction = (text, newArray, left, mid, right, solveArray) => {

        const finded = findingArray(newArray, left, mid, right)
        try {
            solveArray = finded.solveArray;
            newArray = finded.newArray;
        } catch {
            return
        }


        recursiveIndex++;
        if (recursiveIndex === 2)
            return newArray
        else
            recursiveFunction(text, newArray, left, mid, right)
    }

    const simpleData = (text, left, mid, right) => {
        console.log("140", mid)
        if (text.length === 1) {
            console.log("142", mid)
            setSolution(text[0]);
        }

        else if (text.length > 2) {
            for (let index = 2; index < text.length; index += 2) {
                mid = text[index - 1];
                right = text[index];
                console.log("149", mid)
                if (index === 2) {
                    left = caseForOneOperator(text[index - 2], mid, right);
                    setSolution(left);
                }
                else {
                    left = caseForOneOperator(left, mid, right);
                    setSolution(left);
                }
            }
        }

        else {
            console.log("text[0], text[1]", text)
            left = caseForOneOperator(text[0], text[1], right)
            setSolution(left);

        }
    }

    const onSpeechResultsHandler = (e) => {
        console.log('onSpeechResultsHandler: ', e);

        let text = e.value[0];
        setResult(text);


        // text = text.split(" ");
        // //#region new changes

        let mid = "+"
        let left = 0
        let right = 0
        let newArray = []
        let solveArray = []

        text = text.replace(/into/g, "*");
        text = text.replace(/multiply/g, "*");
        text = text.replace(/x/g, "*");

        try {
            setTextSolutionError(false)
            setSolution(eval(text))
        }
        catch {
            setTextSolutionError(true)
        }

        // for (let index = 0; index < text.length; index++) {
        //     for (let ascci_index = 40; ascci_index < 58; ascci_index++) {
        //         if (text.charCodeAt(index) === ascci_index) {
        //             newArray.push(text[index])
        //             break
        //         }
        //         else if (text.charCodeAt(index) === 120) {
        //             newArray.push(text[index])
        //             break
        //         }
        //     }
        // }
        // newArray = recursiveFunction(text, newArray, left, mid, right, solveArray);
        // console.log("newArray", newArray)
        // for (let index = 0; index < newArray.length; index++) {
        //     if(newArray[index] === "("){
        //         solveArray
        //     }

        // }



        // //#endregion

        //#region previous code

        // if (text.length === 1) {
        //     setSolution(text[0]);
        // }

        // else if (text.length > 2) {
        //     for (let index = 2; index < text.length; index += 2) {
        //         mid = text[index - 1];
        //         right = text[index];
        //         if (index === 2) {
        //             left = caseForOneOperator(text[index - 2], mid, right);
        //             setSolution(left);
        //         }
        //         else {
        //             left = caseForOneOperator(left, mid, right);
        //             setSolution(left);
        //         }
        //     }
        // }

        // else {
        //     left = caseForOneOperator(text[0], text[1], right)
        //     setSolution(left);

        // }


        //#endregion

    }
    const onSpeechPartialResults = (e) => {
        setResult(e.value[0])
        console.log('onSpeechPartialResults: ', e);
    };

    const startRecording = async () => {
        setErrorMessage("")
        setLoading(true)
        try {
            const checkPermission = addPermissions();
            if (checkPermission) {
                await Voice.isAvailable();
                await Voice.start('en-Us');
                setResult("");
            }

        } catch (error) {
            console.log("error raised", error)
        }
    }

    const stopRecording = async () => {
        try {
            await Voice.stop()
            setLoading(false)
        } catch (error) {
            console.log("error raised", error)
        }
    }


    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.wholeContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>Result:</Text>
                        <Text style={styles.text1}>{result}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>Solution:</Text>
                        <Text style={styles.text2}>{textSolutionError ? "" : solution}</Text>
                        <Text style={styles.textSolutionError}>{textSolutionError ? "INVALID EXPRESSION" : ""}</Text>
                    </View>


                    {isLoading ?
                        // <ActivityIndicator size="large" color="red" />
                        <Button
                            onPress={stopRecording}
                            buttonStyle={styles.stopButton}
                            icon={
                                <Icon
                                    name="microphone-slash"
                                    type="font-awesome"
                                    size={50}
                                    color="#fff"
                                // iconStyle={{ marginRight: 10 }}
                                />
                            }
                        />
                        :
                        <Button
                            buttonStyle={styles.button}
                            onPress={startRecording}
                            icon={
                                <Icon
                                    name="microphone"
                                    type="font-awesome"
                                    size={50}
                                    color="#fff"
                                // iconStyle={{ marginRight: 10}}
                                />
                            }
                        />
                    }
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    wholeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // marginTop: windowWidth/3,
        marginBottom: 0,
        maxWidth: 550,
        height: windowHeight / 1.7,
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
    },
    heading: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "#3b3b3b"

    },
    text1: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "green",
        marginLeft: 10
    },
    text2: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "blue",
        marginLeft: 10
    },
    textSolutionError: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "red",
        marginLeft: 10
    },
    errorMessage: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 1,
        color: "red",
        marginTop: 20,
        marginLeft: 10
    },
    button: {
        // margin: 10,
        // marginHorizontal: 80,
        paddingVertical: 40,
        paddingHorizontal: 50,
        borderRadius: 100,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        backgroundColor: "#1972e8",

    },
    stopButton: {
        // margin: 10,
        // marginHorizontal: 80,
        paddingVertical: 40,
        paddingHorizontal: 46,
        borderRadius: 100,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        backgroundColor: "#1972e8",

    },
});

export default App;