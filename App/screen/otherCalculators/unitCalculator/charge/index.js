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
import { coulombCalculation } from "./calculationLogic";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function ChargeCalculator() {
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
    const forCoulomb = () => {
        if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("megacoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("kilocoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("millicoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("microcoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("nanocoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("picocoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("abcoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("emu_charge to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("statcoulomb to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("esu_charge to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("franklin to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("ampere-hour to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("ampere-minute to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("ampere-second to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("faraday to coulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "coulomb") {
            const value = coulombCalculation("elementary_charge to coulomb", calc);
            setRes(value)
        }
    }
    const forMegacoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("coulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("kilocoulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("millicoulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("microcoulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("nanocoulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("picocoulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("abcoulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("emu_charge to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("statcoulomb to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("esu_charge to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("franklin to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("ampere-hour to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("ampere-minute to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("ampere-second to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("faraday to megacoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "megacoulomb") {
            const value = coulombCalculation("elementary_charge to megacoulomb", calc);
            setRes(value)
        }
    }
    const forkilocoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("coulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("megacoulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("millicoulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("microcoulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("nanocoulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("picocoulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("abcoulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("emu_charge to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("statcoulomb to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("esu_charge to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("franklin to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("ampere-hour to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("ampere-minute to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("ampere-second to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("faraday to kilocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "kilocoulomb") {
            const value = coulombCalculation("elementary_charge to kilocoulomb", calc);
            setRes(value)
        }
    }
    const formillicoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("coulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("megacoulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("kilocoulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("microcoulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("nanocoulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("picocoulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("abcoulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("emu_charge to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("statcoulomb to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("esu_charge to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("franklin to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("ampere-hour to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("ampere-minute to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("ampere-second to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("faraday to millicoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "millicoulomb") {
            const value = coulombCalculation("elementary_charge to millicoulomb", calc);
            setRes(value)
        }
    }
    const forMicrocoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("coulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("megacoulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("kilocoulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("millicoulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("nanocoulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("picocoulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("abcoulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("emu_charge to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("statcoulomb to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("esu_charge to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("franklin to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("ampere-hour to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("ampere-minute to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("ampere-second to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("faraday to microcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "microcoulomb") {
            const value = coulombCalculation("elementary_charge to microcoulomb", calc);
            setRes(value)
        }
    }
    const forNanocoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("coulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("megacoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("kilocoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("millicoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("microcoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("nanocoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("picocoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("abcoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("emu_charge to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("statcoulomb to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("esu_charge to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("franklin to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("ampere-hour to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("ampere-minute to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("ampere-second to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("faraday to nanocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "nanocoulomb") {
            const value = coulombCalculation("elementary_charge to nanocoulomb", calc);
            setRes(value)
        }
    }
    const forPicocoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("coulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("megacoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("kilocoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("millicoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("microcoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("nanocoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("picocoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("abcoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("emu_charge to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("statcoulomb to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("esu_charge to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("franklin to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("ampere-hour to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("ampere-minute to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("ampere-second to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("faraday to picocoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "picocoulomb") {
            const value = coulombCalculation("elementary_charge to picocoulomb", calc);
            setRes(value)
        }
    }
    const forAbcoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("coulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("megacoulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("kilocoulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("millicoulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("microcoulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("nanocoulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("picocoulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("emu_charge to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("statcoulomb to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("esu_charge to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("franklin to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("ampere-hour to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("ampere-minute to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("ampere-second to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("faraday to abcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "abcoulomb") {
            const value = coulombCalculation("elementary_charge to abcoulomb", calc);
            setRes(value)
        }
    }
    const forEmu_charge = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("coulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("megacoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("kilocoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("millicoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("microcoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("nanocoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("picocoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("abcoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("statcoulomb to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("esu_charge to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("franklin to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("ampere-hour to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("ampere-minute to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("ampere-second to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("faraday to emu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "emu_charge") {
            const value = coulombCalculation("elementary_charge to emu_charge", calc);
            setRes(value)
        }
    }
    const forStatcoulomb = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("coulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("megacoulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("kilocoulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("millicoulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("microcoulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("nanocoulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("picocoulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("abcoulomb to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("emu_charge to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("esu_charge to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("franklin to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("ampere-hour to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("ampere-minute to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("ampere-second to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("faraday to statcoulomb", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "statcoulomb") {
            const value = coulombCalculation("elementary_charge to statcoulomb", calc);
            setRes(value)
        }
    }
    const forEsu_charge = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("coulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("megacoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("kilocoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("millicoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("microcoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("nanocoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("picocoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("abcoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("emu_charge to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("statcoulomb to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("franklin to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("ampere-hour to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("ampere-minute to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("ampere-second to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("faraday to esu_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "esu_charge") {
            const value = coulombCalculation("elementary_charge to esu_charge", calc);
            setRes(value)
        }
    }
    const forFranklin = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("coulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("megacoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("kilocoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("millicoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("microcoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("nanocoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("picocoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("abcoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("emu_charge to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("statcoulomb to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("esu_charge to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("ampere-hour to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("ampere-minute to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("ampere-second to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("faraday to franklin", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "franklin") {
            const value = coulombCalculation("elementary_charge to franklin", calc);
            setRes(value)
        }
    }
    const forAampereHour = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("coulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("megacoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("kilocoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("millicoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("microcoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("nanocoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("picocoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("abcoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("emu_charge to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("statcoulomb to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("esu_charge to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("franklin to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("ampere-minute to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("ampere-second to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("faraday to ampere-hour", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "ampere-hour") {
            const value = coulombCalculation("elementary_charge to ampere-hour", calc);
            setRes(value)
        }
    }
    const forAampereminute = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("coulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("megacoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("kilocoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("millicoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("microcoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("nanocoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("picocoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("abcoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("emu_charge to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("statcoulomb to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("esu_charge to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("franklin to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("ampere-hour to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("ampere-second to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("faraday to ampere-minute", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "ampere-minute") {
            const value = coulombCalculation("elementary_charge to ampere-minute", calc);
            setRes(value)
        }
    }
    const forAamperesecond = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("coulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("megacoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("kilocoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("millicoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("microcoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("nanocoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("picocoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("abcoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("emu_charge to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("statcoulomb to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("esu_charge to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("franklin to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("ampere-minute to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("ampere-hour to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("faraday to ampere-second", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "ampere-second") {
            const value = coulombCalculation("elementary_charge to ampere-second", calc);
            setRes(value)
        }
    }
    const forFaraday = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("coulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("megacoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("kilocoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("millicoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("microcoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("nanocoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("picocoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("abcoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("emu_charge to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("statcoulomb to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("esu_charge to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("franklin to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("ampere-minute to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("ampere-hour to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("ampere-second to faraday", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "elementary_charge" && selectedChargeTo === "faraday") {
            const value = coulombCalculation("elementary_charge to faraday", calc);
            setRes(value)
        }
    }
    const forElementarycharge = () => {
        if (selectedChargeFrom === "coulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("coulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "megacoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("megacoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kilocoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("kilocoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "microcoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("microcoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "millicoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("millicoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "nanocoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("nanocoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "picocoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("picocoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "abcoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("abcoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "emu_charge" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("emu_charge to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "statcoulomb" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("statcoulomb to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "esu_charge" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("esu_charge to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "franklin" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("franklin to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-minute" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("ampere-minute to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-hour" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("ampere-hour to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ampere-second" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("ampere-second to elementary_charge", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "faraday" && selectedChargeTo === "elementary_charge") {
            const value = coulombCalculation("faraday to elementary_charge", calc);
            setRes(value)
        }
    }
    //#endregion

    useEffect(() => {
        if (selectedChargeFrom === selectedChargeTo) setRes(calc);
        else if (selectedChargeTo === "coulomb") forCoulomb();
        else if (selectedChargeTo === "megacoulomb") forMegacoulomb();
        else if (selectedChargeTo === "kilocoulomb") forkilocoulomb();
        else if (selectedChargeTo === "millicoulomb") formillicoulomb();
        else if (selectedChargeTo === "microcoulomb") forMicrocoulomb();
        else if (selectedChargeTo === "nanocoulomb") forNanocoulomb();
        else if (selectedChargeTo === "picocoulomb") forPicocoulomb();
        else if (selectedChargeTo === "abcoulomb") forAbcoulomb();
        else if (selectedChargeTo === "emu_charge") forEmu_charge();
        else if (selectedChargeTo === "statcoulomb") forStatcoulomb();
        else if (selectedChargeTo === "esu_charge") forEsu_charge();
        else if (selectedChargeTo === "franklin") forFranklin();
        else if (selectedChargeTo === "ampere-hour") forAampereHour();
        else if (selectedChargeTo === "ampere-minute") forAampereminute();
        else if (selectedChargeTo === "ampere-second") forAamperesecond();
        else if (selectedChargeTo === "faraday") forFaraday();
        else if (selectedChargeTo === "elementary_charge") forElementarycharge();
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
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Charge" headingLast="Calculator" />

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