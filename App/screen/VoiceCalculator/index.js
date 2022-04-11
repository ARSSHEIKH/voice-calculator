import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import Voice from '@react-native-community/voice';
import { Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const App = () => {

    const [result, setResult] = useState('');
    const [solution, setSolution] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [indicator, setindicator] = useState(false);
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

    const onSpeechError = (e) => {
        console.log("onSpeechError", e.error.message);
        setindicator(false)
        if (e.error.message === "7/No match")
            setErrorMessage(e.error.message.slice(2) + ", Try Again !");
        else
            setErrorMessage(e.error.message.slice(2));

    }

    const onSpeechStartHandler = (e) => {
        setindicator(true)
        console.log("start handler==>>>", e)
    }
    const onSpeechEndHandler = (e) => {
        setLoading(false)
        setindicator(false)

        console.log("stop handler", e)
    }
    const onSpeechResultsHandler = (e) => {
        console.log('onSpeechResultsHandler: ', e);

        let text = e.value[0];
        setResult(text);

        text = text.replace(/into/g, "*");
        text = text.replace(/multiply/g, "*");
        text = text.replace(/x/g, "*");

        try {
            setErrorMessage("")
            setSolution(eval(text))
        }
        catch {
            setErrorMessage("INVALID EXPRESSION")
        }

    }
    const onSpeechPartialResults = (e) => {
        setResult(e.value[0])
        console.log('onSpeechPartialResults: ', e);
    };


    const startRecording = async () => {
        setErrorMessage("")
        setLoading(true)
        try {
            await Voice.isAvailable();
            await Voice.start('en-Us');
            setResult("");


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
                        <Text style={styles.text1}>{result}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>Result:</Text>
                        <Text style={styles.text2} allowFontScaling={true}>{solution}</Text>
                    </View>

                    {isLoading ?

                        <Animatable.View style={styles.outerCircle} animation="pulse" easing="ease-in-out-back" iterationCount="infinite" >
                            {/* <ActivityIndicator size={180} animating={indicator} color="#bfd4f0" style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} /> */}

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
                        </Animatable.View>
                        :

                        <View>
                            <Button
                                buttonStyle={styles.button}
                                onPress={startRecording}
                                icon={
                                    <Icon
                                        name="microphone"
                                        type="font-awesome"
                                        size={50}
                                        color="#fff"
                                    />
                                }
                            />
                        </View>
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
        marginBottom: 0,
        maxWidth: 650,
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
        marginLeft: 10,
        width: windowWidth / 1.8
    },
    text2: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "blue",
        marginLeft: 10,
        width: windowWidth / 1.8
    },
    textSolutionError: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "red",
        marginLeft: 10
    },
    outerCircle: {

        width: 150,
        height: 150,
        borderRadius: 100,
        position: "relative",
        backgroundColor: "#bfd4f0",
        margin: 10,
        cursor: "pointer",
        alignSelf: "center"

    },
    button: {
        paddingVertical: 40,
        paddingHorizontal: 50,
        borderRadius: 100,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        backgroundColor: "#1972e8",
        top: 8,
    },
    stopButton: {
        paddingVertical: 40,
        paddingHorizontal: 46,
        borderRadius: 100,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        backgroundColor: "#1972e8",
        top: 8,
    },
    errorMessage: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 1,
        color: "red",
        marginTop: 20,
        marginLeft: 10,
        width: windowWidth / 1.5
    },
});

export default App;