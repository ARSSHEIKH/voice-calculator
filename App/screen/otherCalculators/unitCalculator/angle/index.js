import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

import Row from "../../../../components/Row";
import Button from "../../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import Header from '../../../../components/header';
import InterstitialAdsShow from '../../../../components/admob/interstitialAds/adShow';
import { Dropdown } from "react-native-element-dropdown";
import { Divider } from "react-native-elements";
import dropdownList from "./dropdownList";
import { degreeCalculation, radianCalculation, gradianCalculation, minuteCalculation, secondCalculation, signCalculation, milCalculation, revolutionCalculation, circleCalculation, turnCalculation, quadrantCalculation, sextantCalculation } from "./calculationLogic/angleCalculation";
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function AngleCalculator() {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const [noOfLines, setNoOfLines] = useState(4)
    const operators = ["+", "-", "*", "/", ".", "%"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);
    const adClosed = useSelector(state => state.adClosed);
    const [selectedAngleFrom, setSelectedAngleFrom] = useState(dropdownList[0].value);
    const [selectedAngleTo, setSelectedAngleTo] = useState(dropdownList[1].value);

    useFocusEffect(
        React.useCallback(() => {
            dispatch({ type: "set_tabs_state", payload: 0 })
            dispatch({ type: "reset_adClosed" });
            return () => {
                dispatch({ type: "reset_adClosed" })
            };

        }, [])
    )

    const forDegree = () => {
        if (selectedAngleFrom === "radian" && selectedAngleTo === "degree") {
            const value = degreeCalculation("radian to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "degree") {
            const value = degreeCalculation("gradian to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "degree") {
            const value = degreeCalculation("gon to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "degree") {
            const value = degreeCalculation("minute to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "degree") {
            const value = degreeCalculation("second to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "degree") {
            const value = degreeCalculation("sign to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "degree") {
            const value = degreeCalculation("mil to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "degree") {
            const value = degreeCalculation("revolution to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "degree") {
            const value = degreeCalculation("circle to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "degree") {
            const value = degreeCalculation("turn to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "degree") {
            const value = degreeCalculation("quadrant to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "degree") {
            const value = degreeCalculation("right angle to degree", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "degree") {
            const value = degreeCalculation("sextant to degree", calc);
            setRes(value)
        }
    }
    const forRadian = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "radian") {
            const value = radianCalculation("degree to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "radian") {
            const value = radianCalculation("gradian to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "radian") {
            const value = radianCalculation("gon to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "radian") {
            const value = radianCalculation("minute to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "radian") {
            const value = radianCalculation("second to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "radian") {
            const value = radianCalculation("sign to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "radian") {
            const value = radianCalculation("mil to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "radian") {
            const value = radianCalculation("revolution to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "radian") {
            const value = radianCalculation("circle to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "radian") {
            const value = radianCalculation("turn to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "radian") {
            const value = radianCalculation("quadrant to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "radian") {
            const value = radianCalculation("right angle to radian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "radian") {
            const value = radianCalculation("sextant to radian", calc);
            setRes(value)
        }
    }
    const forGradian = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("degree to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("radian to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("gon to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("minute to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("second to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("sign to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("mil to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("revolution to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("circle to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("turn to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("quadrant to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("right angle to gradian", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "gradian") {
            const value = gradianCalculation("sextant to gradian", calc);
            setRes(value)
        }
    }
    const forGon = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "gon") {
            const value = gonCalculation("degree to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "gon") {
            const value = gonCalculation("radian to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "gon") {
            const value = gonCalculation("gradian to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "gon") {
            const value = gonCalculation("minute to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "gon") {
            const value = gonCalculation("second to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "gon") {
            const value = gonCalculation("sign to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "gon") {
            const value = gonCalculation("mil to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "gon") {
            const value = gonCalculation("revolution to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "gon") {
            const value = gonCalculation("circle to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "gon") {
            const value = gonCalculation("turn to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "gon") {
            const value = gonCalculation("quadrant to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "gon") {
            const value = gonCalculation("right angle to gon", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "gon") {
            const value = gonCalculation("sextant to gon", calc);
            setRes(value)
        }
    }
    const forMinute = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "minute") {
            const value = minuteCalculation("degree to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "minute") {
            const value = minuteCalculation("radian to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "minute") {
            const value = minuteCalculation("gradian to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "minute") {
            const value = minuteCalculation("gon to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "minute") {
            const value = minuteCalculation("second to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "minute") {
            const value = minuteCalculation("sign to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "minute") {
            const value = minuteCalculation("mil to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "minute") {
            const value = minuteCalculation("revolution to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "minute") {
            const value = minuteCalculation("circle to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "minute") {
            const value = minuteCalculation("turn to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "minute") {
            const value = minuteCalculation("quadrant to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "minute") {
            const value = minuteCalculation("right angle to minute", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "minute") {
            const value = minuteCalculation("sextant to minute", calc);
            setRes(value)
        }
    }
    const forSecond = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "second") {
            const value = secondCalculation("degree to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "second") {
            const value = secondCalculation("radian to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "second") {
            const value = secondCalculation("gradian to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "second") {
            const value = secondCalculation("gon to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "second") {
            const value = secondCalculation("minute to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "second") {
            const value = secondCalculation("sign to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "second") {
            const value = secondCalculation("mil to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "second") {
            const value = secondCalculation("revolution to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "second") {
            const value = secondCalculation("circle to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "second") {
            const value = secondCalculation("turn to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "second") {
            const value = secondCalculation("quadrant to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "second") {
            const value = secondCalculation("right angle to second", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "second") {
            const value = secondCalculation("sextant to second", calc);
            setRes(value)
        }
    }
    const forSign = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "sign") {
            const value = signCalculation("degree to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "sign") {
            const value = signCalculation("radian to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "sign") {
            const value = signCalculation("gradian to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "sign") {
            const value = signCalculation("gon to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "sign") {
            const value = signCalculation("minute to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "sign") {
            const value = signCalculation("second to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "sign") {
            const value = signCalculation("mil to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "sign") {
            const value = signCalculation("revolution to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "sign") {
            const value = signCalculation("circle to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "sign") {
            const value = signCalculation("turn to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "sign") {
            const value = signCalculation("quadrant to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "sign") {
            const value = signCalculation("right angle to sign", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "sign") {
            const value = signCalculation("sextant to sign", calc);
            setRes(value)
        }
    }
    const forMil = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "mil") {
            const value = milCalculation("degree to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "mil") {
            const value = milCalculation("radian to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "mil") {
            const value = milCalculation("gradian to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "mil") {
            const value = milCalculation("gon to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "mil") {
            const value = milCalculation("minute to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "mil") {
            const value = milCalculation("second to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "mil") {
            const value = milCalculation("sign to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "mil") {
            const value = milCalculation("revolution to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "mil") {
            const value = milCalculation("circle to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "mil") {
            const value = milCalculation("turn to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "mil") {
            const value = milCalculation("quadrant to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "mil") {
            const value = milCalculation("right angle to mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "mil") {
            const value = milCalculation("sextant to mil", calc);
            setRes(value)
        }
    }
    const forRevolution = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("degree to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("radian to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("gradian to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("gon to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("minute to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("second to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("sign to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("mil to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("circle to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("turn to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("quadrant to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("right angle to revolution", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "revolution") {
            const value = revolutionCalculation("sextant to revolution", calc);
            setRes(value)
        }
    }
    const forCircle = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "circle") {
            const value = circleCalculation("degree to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "circle") {
            const value = circleCalculation("radian to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "circle") {
            const value = circleCalculation("gradian to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "circle") {
            const value = circleCalculation("gon to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "circle") {
            const value = circleCalculation("minute to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "circle") {
            const value = circleCalculation("second to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "circle") {
            const value = circleCalculation("sign to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "circle") {
            const value = circleCalculation("mil to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "circle") {
            const value = circleCalculation("revolution to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "circle") {
            const value = circleCalculation("turn to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "circle") {
            const value = circleCalculation("quadrant to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "circle") {
            const value = circleCalculation("right angle to circle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "circle") {
            const value = circleCalculation("sextant to circle", calc);
            setRes(value)
        }
    }
    const forTurn = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "turn") {
            const value = turnCalculation("degree to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "turn") {
            const value = turnCalculation("radian to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "turn") {
            const value = turnCalculation("gradian to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "turn") {
            const value = turnCalculation("gon to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "turn") {
            const value = turnCalculation("minute to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "turn") {
            const value = turnCalculation("second to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "turn") {
            const value = turnCalculation("sign to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "turn") {
            const value = turnCalculation("mil to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "turn") {
            const value = turnCalculation("revolution to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "turn") {
            const value = turnCalculation("circle to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "turn") {
            const value = turnCalculation("quadrant to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "turn") {
            const value = turnCalculation("right angle to turn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "turn") {
            const value = turnCalculation("sextant to turn", calc);
            setRes(value)
        }
    }
    const forQuadrant = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("degree to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("radian to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("gradian to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("gon to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("minute to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("second to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("sign to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("mil to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("revolution to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("circle to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("quadrant to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("right angle to quadrant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "quadrant") {
            const value = quadrantCalculation("sextant to quadrant", calc);
            setRes(value)
        }
    }
    const forRight_angle = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("degree to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("radian to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("gradian to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("gon to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("minute to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("second to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("sign to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("mil to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("revolution to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("circle to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("quadrant to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("quadrant to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sextant" && selectedAngleTo === "right angle") {
            const value = right_angleCalculation("sextant to right angle", calc);
            setRes(value)
        }
    }
    const forSextant = () => {
        if (selectedAngleFrom === "degree" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("degree to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "radian" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("radian to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gradian" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("gradian to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "gon" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("gon to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "minute" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("minute to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "second" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("second to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sign" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("sign to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "mil" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("mil to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "revolution" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("revolution to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circle" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("circle to sextant", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "turn" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("turn to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "quadrant" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("quadrant to right angle", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "right angle" && selectedAngleTo === "sextant") {
            const value = sextantCalculation("right angle to sextant", calc);
            setRes(value)
        }
    }

    useEffect(() => {
        if (selectedAngleTo === "degree") forDegree();
        else if (selectedAngleTo === "radian") forRadian();
        else if (selectedAngleTo === "gradian") forGradian();
        else if (selectedAngleTo === "gon") forGon();
        else if (selectedAngleTo === "minute") forMinute();
        else if (selectedAngleTo === "second") forSecond();
        else if (selectedAngleTo === "sign") forSign();
        else if (selectedAngleTo === "mil") forMil();
        else if (selectedAngleTo === "revolution") forRevolution();
        else if (selectedAngleTo === "circle") forCircle();
        else if (selectedAngleTo === "turn") forTurn();
        else if (selectedAngleTo === "quadrant") forQuadrant();
        else if (selectedAngleTo === "right angle") forRight_angle();
        else if (selectedAngleTo === "sextant") forSextant();
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
        adClosed ?
            <SafeAreaView style={{ backgroundColor: theme_mode.backgroundColor }}>
                <Header theme_mode={theme_back} tabsShow={false} headingFirst="Angle Calculator" />

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
            :
            <InterstitialAdsShow />
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