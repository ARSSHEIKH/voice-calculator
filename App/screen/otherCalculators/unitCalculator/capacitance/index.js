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
import { abfaradCalculation, attofaradCalculation, centifaradCalculation, coulumb_voltCalculation, decifaradCalculation, dekafaradCalculation, emu_capacitanceCalculation, exafaradCalculation, faradCalculation, femtofaradCalculation, gigafaradCalculation, hectofaradCalculation, kilofaradCalculation, megafaradCalculation, microfaradCalculation, millifaradCalculation, nanofaradCalculation, petafaradCalculation, picofaradCalculation, statfaradCalculation, terafaradCalculation } from "./calculationLogic/capacitanceCalculation";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function CapacitanceCalculator() {
    const dispatch = useDispatch()
    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const [noOfLines, setNoOfLines] = useState(4)
    const operators = ["+", "-", "*", "/", ".", "%"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);
    const adClosed = useSelector(state => state.adClosed);
    const [selectedCapacitanceFrom, setSelectedCapacitanceFrom] = useState(dropdownList[0].value);
    const [selectedCapacitanceTo, setSelectedCapacitanceTo] = useState(dropdownList[1].value);


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
    
    const forFarad = () => {
        if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("exafarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("petafarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("terafarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("gigafarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("megafarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("kilofarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("hectofarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("dekafarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("decifarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("centifarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("millifarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("microfarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("nanofarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("picofarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("femtofarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("attofarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("abfarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("statfarad to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("coulumb_volt to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("emu_capacitance to farad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "farad") {
            const value = faradCalculation("esu_capacitance to farad", calc);
            setRes(value)
        }
    }
    const forExafarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("farad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("petafarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("terafarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("gigafarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("megafarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("kilofarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("hectofarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("dekafarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("decifarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("centifarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("millifarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("microfarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("nanofarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("picofarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("femtofarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("attofarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("abfarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("statfarad to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("coulumb_volt to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("emu_capacitance to exafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "exafarad") {
            const value = exafaradCalculation("esu_capacitance to exafarad", calc);
            setRes(value)
        }
    }
    const forPetafarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("farad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("exafarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("terafarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("gigafarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("megafarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("kilofarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("hectofarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("dekafarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("decifarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("centifarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("millifarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("microfarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("nanofarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("picofarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("femtofarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("attofarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("abfarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("statfarad to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("coulumb_volt to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("emu_capacitance to petafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "petafarad") {
            const value = petafaradCalculation("esu_capacitance to petafarad", calc);
            setRes(value)
        }
    }
    const forTerafarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("farad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("exafarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("petafarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("gigafarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("megafarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("kilofarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("hectofarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("dekafarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("decifarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("centifarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("millifarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("microfarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("nanofarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("picofarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("femtofarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("attofarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("abfarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("statfarad to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("coulumb_volt to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("emu_capacitance to terafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "terafarad") {
            const value = terafaradCalculation("esu_capacitance to terafarad", calc);
            setRes(value)
        }
    }
    const forGigafarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("farad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("exafarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("petafarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("terafarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("megafarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("kilofarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("hectofarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("dekafarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("decifarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("centifarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("millifarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("microfarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("nanofarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("picofarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("femtofarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("attofarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("abfarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("statfarad to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("coulumb_volt to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("emu_capacitance to gigafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "gigafarad") {
            const value = gigafaradCalculation("esu_capacitance to gigafarad", calc);
            setRes(value)
        }
    }
    const forMegafarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("farad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("exafarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("petafarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("terafarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("megafarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("kilofarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("hectofarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("dekafarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("decifarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("centifarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("millifarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("microfarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("nanofarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("picofarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("femtofarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("attofarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("abfarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("statfarad to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("coulumb_volt to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("emu_capacitance to megafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "megafarad") {
            const value = megafaradCalculation("esu_capacitance to megafarad", calc);
            setRes(value)
        }
    }
    const forKilofarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("farad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("exafarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("petafarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("gigafarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("terafarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("megafarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("hectofarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("dekafarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("decifarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("centifarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("millifarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("microfarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("nanofarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("picofarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("femtofarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("attofarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("abfarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("statfarad to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("coulumb_volt to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("emu_capacitance to kilofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "kilofarad") {
            const value = kilofaradCalculation("esu_capacitance to kilofarad", calc);
            setRes(value)
        }
    }
    const forHectofarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("farad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("exafarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("petafarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("gigafarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("terafarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("megafarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("kilofarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("dekafarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("decifarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("centifarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("millifarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("microfarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("nanofarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("picofarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("femtofarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("attofarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("abfarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("statfarad to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("coulumb_volt to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("emu_capacitance to hectofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "hectofarad") {
            const value = hectofaradCalculation("esu_capacitance to hectofarad", calc);
            setRes(value)
        }
    }
    const forDekafarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("farad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("exafarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("petafarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("gigafarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("terafarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("megafarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("kilofarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("hectofarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("decifarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("centifarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("millifarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("microfarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("nanofarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("picofarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("femtofarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("attofarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("abfarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("statfarad to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("coulumb_volt to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("emu_capacitance to dekafarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "dekafarad") {
            const value = dekafaradCalculation("esu_capacitance to dekafarad", calc);
            setRes(value)
        }
    }
    const forDecifarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("farad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("exafarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("petafarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("gigafarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("terafarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("megafarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("kilofarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("hectofarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("dekafarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("centifarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("millifarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("microfarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("nanofarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("picofarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("femtofarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("attofarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("abfarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("statfarad to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("coulumb_volt to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("emu_capacitance to decifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "decifarad") {
            const value = decifaradCalculation("esu_capacitance to decifarad", calc);
            setRes(value)
        }
    }
    const forCentifarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("farad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("exafarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("petafarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("gigafarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("terafarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("megafarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("kilofarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("hectofarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("dekafarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("decifarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("millifarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("microfarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("nanofarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("picofarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("femtofarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("attofarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("abfarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("statfarad to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("coulumb_volt to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("emu_capacitance to centifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "centifarad") {
            const value = centifaradCalculation("esu_capacitance to centifarad", calc);
            setRes(value)
        }
    }
    const forMilifarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("farad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("exafarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("petafarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("gigafarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("terafarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("megafarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("kilofarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("hectofarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("dekafarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("decifarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("centifarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("microfarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("nanofarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("picofarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("femtofarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("attofarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("abfarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("statfarad to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("coulumb_volt to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("emu_capacitance to millifarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "millifarad") {
            const value = millifaradCalculation("esu_capacitance to millifarad", calc);
            setRes(value)
        }
    }
    const forMicrofarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("farad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("exafarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("petafarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("gigafarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("terafarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("megafarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("kilofarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("hectofarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("dekafarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("decifarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("centifarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("millifarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("nanofarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("picofarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("femtofarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("attofarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("abfarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("statfarad to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("coulumb_volt to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("emu_capacitance to microfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "microfarad") {
            const value = microfaradCalculation("esu_capacitance to microfarad", calc);
            setRes(value)
        }
    }
    const forNanofarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("farad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("exafarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("petafarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("gigafarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("terafarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("megafarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("kilofarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("hectofarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("dekafarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("decifarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("centifarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("millifarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("microfarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("picofarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("femtofarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("attofarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("abfarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("statfarad to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("coulumb_volt to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("emu_capacitance to nanofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "nanofarad") {
            const value = nanofaradCalculation("esu_capacitance to nanofarad", calc);
            setRes(value)
        }
    }
    const forPicofarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("farad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("exafarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("petafarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("gigafarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("terafarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("megafarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("kilofarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("hectofarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("dekafarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("decifarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("centifarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("millifarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("microfarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("nanofarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("femtofarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("attofarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("abfarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("statfarad to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("coulumb_volt to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("emu_capacitance to picofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "picofarad") {
            const value = picofaradCalculation("esu_capacitance to picofarad", calc);
            setRes(value)
        }
    }
    const forFemtofarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("farad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("exafarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("petafarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("gigafarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("terafarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("megafarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("kilofarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("hectofarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("dekafarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("decifarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("centifarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("millifarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("microfarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("nanofarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("picofarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("attofarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("abfarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("statfarad to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("coulumb_volt to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("emu_capacitance to femtofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "femtofarad") {
            const value = femtofaradCalculation("esu_capacitance to femtofarad", calc);
            setRes(value)
        }
    }
    const forAttofarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("farad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("exafarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("petafarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("gigafarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("terafarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("megafarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("kilofarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("hectofarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("dekafarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("decifarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("centifarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("millifarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("microfarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("nanofarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("picofarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("femtofarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("abfarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("statfarad to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("coulumb_volt to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("emu_capacitance to attofarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "attofarad") {
            const value = attofaradCalculation("esu_capacitance to attofarad", calc);
            setRes(value)
        }
    }
    const forAbfarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("farad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("exafarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("petafarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("gigafarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("terafarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("megafarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("kilofarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("hectofarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("dekafarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("decifarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("centifarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("millifarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("microfarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("nanofarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("picofarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("femtofarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("attofarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("statfarad to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("coulumb_volt to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("emu_capacitance to abfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "abfarad") {
            const value = abfaradCalculation("esu_capacitance to abfarad", calc);
            setRes(value)
        }
    }
    const forStatfarad = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("farad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("exafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("petafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("gigafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("terafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("megafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("kilofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("hectofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("dekafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("decifarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("centifarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("millifarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("microfarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("nanofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("picofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("femtofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("attofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("abfarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("coulumb_volt to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("emu_capacitance to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "statfarad") {
            const value = statfaradCalculation("esu_capacitance to statfarad", calc);
            setRes(value)
        }
    }
    const forCoulumb_volt = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("farad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("exafarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("petafarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("gigafarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("terafarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("megafarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("kilofarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("hectofarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("dekafarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("decifarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("centifarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("millifarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("microfarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("nanofarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("picofarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("femtofarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("attofarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("abfarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("statfarad to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("emu_capacitance to coulumb_volt", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "coulumb_volt") {
            const value = coulumb_voltCalculation("esu_capacitance to coulumb_volt", calc);
            setRes(value)
        }
    }
    const forEmu_capacitance = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("farad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("exafarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("petafarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("gigafarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("terafarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("megafarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("kilofarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("hectofarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("dekafarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("decifarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("centifarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("millifarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("microfarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("nanofarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("picofarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("femtofarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("attofarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("abfarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("statfarad to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("coulumb_volt to emu_capacitance", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "esu_capacitance" && selectedCapacitanceTo === "emu_capacitance") {
            const value = emu_capacitanceCalculation("esu_capacitance to emu_capacitance", calc);
            setRes(value)
        }
    }
    const forEsu_capacitance = () => {
        if (selectedCapacitanceFrom === "farad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("farad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "exafarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("exafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "petafarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("petafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "gigafarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("gigafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "terafarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("terafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "megafarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("megafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "kilofarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("kilofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "hectofarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("hectofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "dekafarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("dekafarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "decifarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("decifarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "centifarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("centifarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "millifarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("millifarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "microfarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("microfarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "nanofarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("nanofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "picofarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("picofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "femtofarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("femtofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "attofarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("attofarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "abfarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("abfarad to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "coulumb_volt" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("coulumb_volt to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "emu_capacitance" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("emu_capacitance to statfarad", calc);
            setRes(value)
        }
        else if (selectedCapacitanceFrom === "statfarad" && selectedCapacitanceTo === "esu_capacitance") {
            const value = statfaradCalculation("esu_capacitance to statfarad", calc);
            setRes(value)
        }
    }
//#endregion

    useEffect(() => {
        if (selectedCapacitanceFrom === selectedCapacitanceTo) setRes(calc)
        else if (selectedCapacitanceTo === "farad") forFarad();
        else if (selectedCapacitanceTo === "exafarad") forExafarad();
        else if (selectedCapacitanceTo === "petafarad") forPetafarad();
        else if (selectedCapacitanceTo === "terafarad") forTerafarad();
        else if (selectedCapacitanceTo === "gigafarad") forGigafarad();
        else if (selectedCapacitanceTo === "megafarad") forMegafarad();
        else if (selectedCapacitanceTo === "kilofarad") forKilofarad();
        else if (selectedCapacitanceTo === "hectofarad") forHectofarad();
        else if (selectedCapacitanceTo === "dekafarad") forDekafarad();
        else if (selectedCapacitanceTo === "decifarad") forDecifarad();
        else if (selectedCapacitanceTo === "centifarad") forCentifarad();
        else if (selectedCapacitanceTo === "millifarad") forMilifarad();
        else if (selectedCapacitanceTo === "microfarad") forMicrofarad();
        else if (selectedCapacitanceTo === "nanofarad") forNanofarad();
        else if (selectedCapacitanceTo === "picofarad") forPicofarad();
        else if (selectedCapacitanceTo === "femtofarad") forFemtofarad();
        else if (selectedCapacitanceTo === "attofarad") forAttofarad();
        else if (selectedCapacitanceTo === "abfarad") forAbfarad();
        else if (selectedCapacitanceTo === "statfarad") forStatfarad();
        else if (selectedCapacitanceTo === "coulumb_volt") forCoulumb_volt();
        else if (selectedCapacitanceTo === "emu_capacitance") forEmu_capacitance();
        else if (selectedCapacitanceTo === "esu_capacitance") forEsu_capacitance();
    }, [selectedCapacitanceFrom, selectedCapacitanceTo, calc])

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
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Capacitance" headingLast="Calculator" />

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
                                        value={selectedCapacitanceFrom}
                                        onChange={item => {
                                            setSelectedCapacitanceFrom(item.value);
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
                                        value={selectedCapacitanceTo}
                                        onChange={item => {
                                            setSelectedCapacitanceTo(item.value);
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