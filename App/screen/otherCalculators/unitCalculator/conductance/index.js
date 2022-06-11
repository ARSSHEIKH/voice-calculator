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
import { conductanceCalculation } from "./calculationLogic";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function ConductanceCalculator() {
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

    const forsiemens = () => {
        if (selectedChargeFrom === "mega_siemens" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("mega_siemens to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("kilo_siemens to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milli_siemens" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("milli_siemens to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("micro_siemens to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("ampere_volt to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("mho to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("gem_mho to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("mirco_mho to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("ab_mho to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("stat_mho to siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance" && selectedChargeTo === "siemens") {
            const value = conductanceCalculation("quantized_hall_conductance to siemens", calc);
            setRes(value)
        }
    }
    const formega_siemens = () => {
        if (selectedChargeFrom === "siemens" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("siemens to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("kilo_siemens to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milli_siemens" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("milli_siemens to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("micro_siemens to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("ampere_volt to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("mho to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("gem_mho to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("mirco_mho to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("ab_mho to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("stat_mho to mega_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance" && selectedChargeTo === "mega_siemens") {
            const value = conductanceCalculation("quantized_hall_conductance to mega_siemens", calc);
            setRes(value)
        }
    }
    const forkilo_siemens = () => {
        if (selectedChargeFrom === "siemens" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("siemens to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("mega_siemens to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milli_siemens" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("milli_siemens to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("micro_siemens to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("ampere_volt to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("mho to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("gem_mho to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("mirco_mho to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("ab_mho to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("stat_mho to kilo_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance" && selectedChargeTo === "kilo_siemens") {
            const value = conductanceCalculation("quantized_hall_conductance to kilo_siemens", calc);
            setRes(value)
        }
    }
    const formilli_siemens = () => {
        if (selectedChargeFrom === "siemens" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("siemens to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("mega_siemens to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("kilo_siemens to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("micro_siemens to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("ampere_volt to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("mho to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("gem_mho to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("mirco_mho to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("ab_mho to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("stat_mho to milli_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance" && selectedChargeTo === "milli_siemens") {
            const value = conductanceCalculation("quantized_hall_conductance to milli_siemens", calc);
            setRes(value)
        }
    }
    const formicro_siemens = () => {
        if (selectedChargeFrom === "siemens" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("siemens to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("mega_siemens to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("kilo_siemens to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milimeter" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("milimeter to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("ampere_volt to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("mho to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("gem_mho to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("mirco_mho to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("ab_mho to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("stat_mho to micro_siemens", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance" && selectedChargeTo === "micro_siemens") {
            const value = conductanceCalculation("quantized_hall_conductance to micro_siemens", calc);
            setRes(value)
        }
    }
    const forampere_volt = () => {
        if (selectedChargeFrom === "siemens") {
            const value = conductanceCalculation("siemens to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens") {
            const value = conductanceCalculation("mega_siemens to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens") {
            const value = conductanceCalculation("kilo_siemens to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milimeter") {
            const value = conductanceCalculation("milimeter to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens") {
            const value = conductanceCalculation("micro_siemens to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho") {
            const value = conductanceCalculation("mho to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho") {
            const value = conductanceCalculation("gem_mho to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho") {
            const value = conductanceCalculation("mirco_mho to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho") {
            const value = conductanceCalculation("ab_mho to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho") {
            const value = conductanceCalculation("stat_mho to ampere_volt", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance") {
            const value = conductanceCalculation("quantized_hall_conductance to ampere_volt", calc);
            setRes(value)
        }
    }
    const forgem_mho = () => {
        if (selectedChargeFrom === "siemens") {
            const value = conductanceCalculation("siemens to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens") {
            const value = conductanceCalculation("mega_siemens to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens") {
            const value = conductanceCalculation("kilo_siemens to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milimeter") {
            const value = conductanceCalculation("milimeter to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens") {
            const value = conductanceCalculation("micro_siemens to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt") {
            const value = conductanceCalculation("ampere_volt to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho") {
            const value = conductanceCalculation("mho to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho") {
            const value = conductanceCalculation("mirco_mho to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho") {
            const value = conductanceCalculation("ab_mho to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho") {
            const value = conductanceCalculation("stat_mho to gem_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance") {
            const value = conductanceCalculation("quantized_hall_conductance to gem_mho", calc);
            setRes(value)
        }
    }
    const forab_mho = () => {
        if (selectedChargeFrom === "siemens" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("siemens to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("mega_siemens to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("kilo_siemens to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milimeter" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("milimeter to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("micro_siemens to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("ampere_volt to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("mho to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("gem_mho to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("mirco_mho to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("stat_mho to ab_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance" && selectedChargeTo === "ab_mho") {
            const value = conductanceCalculation("quantized_hall_conductance to ab_mho", calc);
            setRes(value)
        }
    }
    const forstat_mho = () => {
        if (selectedChargeFrom === "siemens" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("siemens to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("mega_siemens to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("kilo_siemens to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milimeter" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("milimeter to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("micro_siemens to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("ampere_volt to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("mho to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("gem_mho to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("mirco_mho to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("ab_mho to stat_mho", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "quantized_hall_conductance" && selectedChargeTo === "stat_mho") {
            const value = conductanceCalculation("quantized_hall_conductance to stat_mho", calc);
            setRes(value)
        }
    }
    const forquantized_hall_conductance = () => {
        if (selectedChargeFrom === "siemens" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("siemens to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mega_siemens" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("mega_siemens to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilo_siemens" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("kilo_siemens to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "milimeter" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("milimeter to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "micro_siemens" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("micro_siemens to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere_volt" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("ampere_volt to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mho" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("mho to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gem_mho" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("gem_mho to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "mirco_mho" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("mirco_mho to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ab_mho" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("ab_mho to quantized_hall_conductance", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "stat_mho" && selectedChargeTo === "quantized_hall_conductance") {
            const value = conductanceCalculation("stat_mho to quantized_hall_conductance", calc);
            setRes(value)
        }
    }
    
    //#endregion

    useEffect(() => {
        if (selectedChargeFrom === selectedChargeTo) setRes(calc);
        else if (selectedChargeTo === "siemens") forsiemens();
        else if (selectedChargeTo === "mega_siemens") formega_siemens();
        else if (selectedChargeTo === "kilo_siemens") forkilo_siemens();
        else if (selectedChargeTo === "milli_siemens") formilli_siemens();
        else if (selectedChargeTo === "micro_siemens") formicro_siemens();
        else if (selectedChargeTo === "ampere_volt" || selectedChargeTo === "mho") forampere_volt();
        else if (selectedChargeTo === "gem_mho" || selectedChargeTo === "mirco_mho") forgem_mho();
        else if (selectedChargeTo === "mirco_mho") formirco_mho();
        else if (selectedChargeTo === "ab_mho") forab_mho();
        else if (selectedChargeTo === "stat_mho") forstat_mho();
        else if (selectedChargeTo === "quantized_hall_conductance") forquantized_hall_conductance();

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
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Conductance" headingLast="Calculator" />

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