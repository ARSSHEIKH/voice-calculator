import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

import Row from "../../../../components/Row";
import Button from "../../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import Header from '../../../../components/header';
import InterstitialAdsShow from '../../../../components/admob/interstitialAds/adShow';
import { useFocusEffect } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { Divider } from "react-native-elements";
import dropdownList from "./dropdownList";
import { concentrationCalculation } from "./calculationLogic";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function ConcentrationCalculator() {
    const dispatch = useDispatch()
    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const [noOfLines, setNoOfLines] = useState(4)
    const operators = ["+", "-", "*", "/", ".", "%"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);
    const adClosed = useSelector(state => state.adClosed);
    const [selectedChargeFrom, setSelectedChargeFrom] = useState(dropdownList[0].value);
    const [selectedChargeTo, setSelectedChargeTo] = useState(dropdownList[1].value);



    // console.log("containerStyle", voltage(1).from('V').to('mV').value)
    // useFocusEffect(
    //     React.useCallback(() => {
    //         dispatch({ type: "set_tabs_state", payload: 0 })
    //         dispatch({ type: "reset_adClosed" })
    //         return () => {
    //             dispatch({ type: "reset_adClosed" })
    //         };
    //     }, [])
    // )

    //#region calculation methods
    const forMol_cubicmeter = () => {
        if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("mol_liter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("kilomol_liter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubicmeter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("millimol_liter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to mol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "mol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to mol_cubicmeter", calc);
            setRes(value)
        }
    }
    const forMol_liter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("mol_cubicmeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("mol_cubiccentimeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("mol_cubicmillimeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("kilomol_cubicmeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("kilomol_liter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("millimol_cubicmeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("millimol_liter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to mol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "mol_liter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to mol_liter", calc);
            setRes(value)
        }
    }
    const forMol_cubiccentimeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubicmeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("mol_liter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_liter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubicmeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_liter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "mol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to mol_cubiccentimeter", calc);
            setRes(value)
        }
    }
    const forMol_cubicmillimeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubicmeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("mol_liter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_liter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubicmeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_liter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "mol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
    }
    const forkilomol_cubicmeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("mol_cubicmeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("mol_liter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("kilomol_liter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubicmeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("millimol_liter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "kilomol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to kilomol_cubicmeter", calc);
            setRes(value)
        }
    }
    const forkilomol_liter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("mol_cubicmeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("mol_liter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("mol_cubiccentimeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("kilomol_cubicmeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("mol_cubicmillimeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("millimol_cubicmeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("millimol_liter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to kilomol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "kilomol_liter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to kilomol_liter", calc);
            setRes(value)
        }
    }
    const forkilomol_cubiccentimeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubicmeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("mol_liter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_liter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubicmeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_liter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "kilomol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to kilomol_cubiccentimeter", calc);
            setRes(value)
        }
    }
    const forkilomol_cubicmillimeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubicmeter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("mol_liter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to mol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_liter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubicmeter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_liter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "kilomol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to kilomol_cubicmillimeter", calc);
            setRes(value)
        }
    }
    const formillimol_cubicmeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("mol_cubicmeter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("mol_liter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("kilomol_liter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("millimol_liter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to millimol_cubicmeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "millimol_cubicmeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to millimol_cubicmeter", calc);
            setRes(value)
        }
    }
    const formillimol_liter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("mol_cubicmeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("mol_liter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("mol_cubiccentimeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("kilomol_cubicmeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("kilomol_liter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("mol_cubicmillimeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("millimol_cubicmeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to millimol_liter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "millimol_liter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to millimol_liter", calc);
            setRes(value)
        }
    }
    const formillimol_cubiccentimeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubicmeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("mol_liter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_liter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubicmeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_liter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmillimeter" && selectedChargeTo === "millimol_cubiccentimeter") {
            const value = concentrationCalculation("millimol_cubicmillimeter to millimol_cubiccentimeter", calc);
            setRes(value)
        }
    }
    const formillimol_cubicmillimeter = () => {
        if (selectedChargeFrom === "mol_cubicmeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubicmeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_liter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("mol_liter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubiccentimeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubiccentimeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubicmeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_liter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_liter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubiccentimeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubiccentimeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilomol_cubicmillimeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("kilomol_cubicmillimeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mol_cubicmillimeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("mol_cubicmillimeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubicmeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubicmeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_liter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_liter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millimol_cubiccentimeter" && selectedChargeTo === "millimol_cubicmillimeter") {
            const value = concentrationCalculation("millimol_cubiccentimeter to millimol_cubicmillimeter", calc);
            setRes(value)
        }
    }

    //#endregion

    useEffect(() => {
        if (selectedChargeFrom === selectedChargeTo) setRes(calc);
        else if (selectedChargeTo === "mol_cubicmeter") forMol_cubicmeter();
        else if (selectedChargeTo === "mol_liter") forMol_liter();
        else if (selectedChargeTo === "mol_cubiccentimeter") forMol_cubiccentimeter();
        else if (selectedChargeTo === "mol_cubicmillimeter") forMol_cubicmillimeter();
        else if (selectedChargeTo === "kilomol_cubicmeter") forkilomol_cubicmeter();
        else if (selectedChargeTo === "kilomol_liter") forkilomol_liter();
        else if (selectedChargeTo === "kilomol_cubiccentimeter") forkilomol_cubiccentimeter();
        else if (selectedChargeTo === "kilomol_cubicmillimeter") forkilomol_cubicmillimeter();
        else if (selectedChargeTo === "millimol_cubicmeter") formillimol_cubicmeter();
        else if (selectedChargeTo === "millimol_liter") formillimol_liter();
        else if (selectedChargeTo === "millimol_cubiccentimeter") formillimol_cubiccentimeter();
        else if (selectedChargeTo === "millimol_cubicmillimeter") formillimol_cubicmillimeter();
    }, [selectedChargeFrom, selectedChargeTo, calc])

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
        // adClosed ?
        <SafeAreaView style={{ backgroundColor: theme_mode.backgroundColor }}>
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Concentration" headingLast="Calculator" />

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
                                        inputSearchStyle={styles.inputSearchStyle}
                                        search
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
                                        value={selectedChargeFrom}
                                        onChange={item => {
                                            setSelectedChargeFrom(item.value);
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
                                        inputSearchStyle={styles.inputSearchStyle}
                                        search
                                        data={dropdownList}
                                        maxHeight={windowHeight / 2}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select item"
                                        searchPlaceholder="Search..."
                                        value={selectedChargeTo}
                                        onChange={item => {
                                            setSelectedChargeTo(item.value);
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
        // :
        // <InterstitialAdsShow />
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
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
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