import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import Voice from '@react-native-community/voice';
import { Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import Header from '../../components/header';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const VoiceCalculator = () => {
    const [result, setResult] = useState('');
    const [solution, setSolution] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [indicator, setindicator] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const theme_mode = useSelector(state => state.theme_state.screens.voicecalculator);
    const theme_back = useSelector(state => state.theme_state.header);

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;
        Voice.onSpeechPartialResults = onSpeechPartialResults
        Voice.onSpeechError = onSpeechError;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, []);

    const onSpeechError = (e) => {
        console.log("onSpeechError", e.error.message);
        setindicator(false)
        if (e.error.message === "7/No match")
            setErrorMessage(e.error.message.slice(2) + ", Try Again !");
        else
            setErrorMessage(e.error.message.slice(2));

    }

    const onSpeechStartHandler = (e) => {
        console.log("start handler==>>>", e)
    }
    const onSpeechEndHandler = (e) => {
        setLoading(false)
        setindicator(false)

        console.log("stop handler", e)
    }
    const onSpeechResultsHandler = (e) => {
        setindicator(true)
        console.log('onSpeechResultsHandler: ', e);

        let text = e.value[0];
        setResult(text);

        text = text.replace(/into/g, "*");
        text = text.replace(/multiply/g, "*");
        text = text.replace(/x/g, "*");

        try {
            setErrorMessage("")
            setSolution(eval(text))
            setindicator(false)
        }
        catch {
            setErrorMessage("INVALID EXPRESSION")
        }

    };
    const onSpeechPartialResults = (e) => {
        setindicator(true)
        setResult(e.value[0])
        console.log('onSpeechPartialResults: ', e);
    };
    const startRecording = async () => {
        setErrorMessage("")
        setSolution("")
        setLoading(true)
        try {
            await Voice.isAvailable();
            await Voice.start('en-Us');
            setResult("");


        } catch (error) {
            console.log("error raised", error)
        }
    };
    const stopRecording = async () => {
        try {
            await Voice.stop()

            setLoading(false)
        } catch (error) {
            console.log("error raised", error)
        }
    };

    return (
        <>
        <Header theme_mode={theme_back} />
            <View style={{...styles.container, backgroundColor: theme_back.bg_color,}}>
                <SafeAreaView>
                    <View style={styles.wholeContainer}>
                        <View style={styles.textContainer}>
                            <Text style={{ ...styles.text1, color: theme_mode.text1.color }}>{result}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{ ...styles.heading, color: theme_mode.heading.color }}>Result:</Text>
                            <Text style={{ ...styles.text2, color: theme_mode.text2.color }} allowFontScaling={true}>{solution}</Text>
                        </View>

                        <View style={styles.micContainer}>
                            {isLoading ?

                                indicator ?
                                    <View>
                                        <ActivityIndicator size={165} animating={indicator} color="#bfd4f0" style={styles.indicator} />
                                        <Button
                                            onPress={stopRecording}
                                            buttonStyle={styles.button}
                                            icon={

                                                <Icon
                                                    name="microphone-slash"
                                                    type="font-awesome"
                                                    size={40}
                                                    color={theme_mode.buttons.iconsColor}
                                                />
                                            }
                                        />
                                    </View>

                                    :

                                    <Animatable.View style={{ ...styles.outerCircle, backgroundColor: theme_mode.buttons.outerCircle.backgroundColor }} animation="pulse" easing="ease-in-out-back" iterationCount="infinite" >
                                        <Button
                                            onPress={stopRecording}
                                            buttonStyle={{ ...styles.button, backgroundColor: theme_mode.buttons.backgroundColor }}
                                            icon={
                                                <Icon
                                                    name="microphone-slash"
                                                    type="font-awesome"
                                                    size={40}
                                                    color={theme_mode.buttons.iconsColor}
                                                />
                                            }
                                        />
                                    </Animatable.View>
                                :

                                <Button
                                    buttonStyle={{ ...styles.button, backgroundColor: theme_mode.buttons.backgroundColor }}
                                    onPress={startRecording}
                                    icon={
                                        <Icon
                                            name="microphone"
                                            type="font-awesome"
                                            size={50}
                                            color={theme_mode.buttons.iconsColor}
                                        />
                                    }
                                />
                            }

                        </View>
                        <Text style={{ ...styles.errorMessage, color: theme_mode.textError.color }}>{errorMessage}</Text>
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 10,
        justifyContent: "flex-start",
    },
    wholeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 0,
        maxWidth: 650,
        height: windowHeight / 1.8,
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    text1: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        marginLeft: 10,
    },
    text2: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 2,
        marginLeft: 10,
        width: windowWidth / 1.8
    },
    micContainer: {
        marginTop: 20
    },
    outerCircle: {

        width: 143,
        height: 143,
        borderRadius: 100,
        // position: "relative",
        cursor: "pointer",
        alignSelf: "center"

    },
    indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 6,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 130,
        height: 130,
        borderRadius: 100,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginTop: 6
    },
    errorMessage: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 1,
        marginTop: 20,
        marginLeft: 10,
        width: windowWidth / 1.5
    },
});

export default VoiceCalculator;