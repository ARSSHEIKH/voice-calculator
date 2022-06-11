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
import { cookingCalculation } from "./calculationLogic";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function CookingCalculator() {
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

    const forcup_euro = () => {
        if (selectedChargeFrom === "cup_us" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("cup_us to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("fluid_ounce to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("gram_euro to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("kg_euro to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("l_euro to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("ml_euro to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("ounce to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("pint to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("pound to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("table_spoon_us to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("table_spoon_euro to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("tea_spoon_us to cup_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro" && selectedChargeTo === "cup_euro") {
            const value = cookingCalculation("tea_spoon_euro to cup_euro", calc);
            setRes(value)
        }
    }
    const forcup_us = () => {
        if (selectedChargeFrom === "cup_euro" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("cup_euro to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("fluid_ounce to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("gram_euro to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("kg_euro to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("l_euro to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("ml_euro to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("ounce to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("pint to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("pound to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("table_spoon_us to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("table_spoon_euro to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("tea_spoon_us to cup_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro" && selectedChargeTo === "cup_us") {
            const value = cookingCalculation("tea_spoon_euro to cup_us", calc);
            setRes(value)
        }
    }
    const forfluid_ounce = () => {
        if (selectedChargeFrom === "cup_euro" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("cup_euro to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("cup_us to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("gram_euro to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("kg_euro to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("l_euro to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("ml_euro to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("ounce to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("pint to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("pound to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("table_spoon_us to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("table_spoon_euro to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("tea_spoon_us to fluid_ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro" && selectedChargeTo === "fluid_ounce") {
            const value = cookingCalculation("tea_spoon_euro to fluid_ounce", calc);
            setRes(value)
        }
    }
    const forgram_euro = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro") {
            const value = cookingCalculation("kg_euro to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce") {
            const value = cookingCalculation("ounce to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint") {
            const value = cookingCalculation("pint to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound") {
            const value = cookingCalculation("pound to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us") {
            const value = cookingCalculation("table_spoon_us to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us") {
            const value = cookingCalculation("tea_spoon_us to gram_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to gram_euro", calc);
            setRes(value)
        }
    }
    const forkg_euro = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro") {
            const value = cookingCalculation("gram_euro to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce") {
            const value = cookingCalculation("ounce to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint") {
            const value = cookingCalculation("pint to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound") {
            const value = cookingCalculation("pound to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us") {
            const value = cookingCalculation("table_spoon_us to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us") {
            const value = cookingCalculation("tea_spoon_us to kg_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to kg_euro", calc);
            setRes(value)
        }
    }

    const forounce = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro") {
            const value = cookingCalculation("gram_euro to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro") {
            const value = cookingCalculation("kg_euro to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint") {
            const value = cookingCalculation("pint to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound") {
            const value = cookingCalculation("pound to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us") {
            const value = cookingCalculation("table_spoon_us to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us") {
            const value = cookingCalculation("tea_spoon_us to ounce", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to ounce", calc);
            setRes(value)
        }
    }
    const forpint = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro") {
            const value = cookingCalculation("gram_euro to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro") {
            const value = cookingCalculation("kg_euro to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce") {
            const value = cookingCalculation("ounce to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound") {
            const value = cookingCalculation("pound to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us") {
            const value = cookingCalculation("table_spoon_us to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us") {
            const value = cookingCalculation("tea_spoon_us to pint", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to pint", calc);
            setRes(value)
        }
    }
    const forpound = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro") {
            const value = cookingCalculation("gram_euro to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro") {
            const value = cookingCalculation("kg_euro to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce") {
            const value = cookingCalculation("ounce to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint") {
            const value = cookingCalculation("pint to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us") {
            const value = cookingCalculation("table_spoon_us to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us") {
            const value = cookingCalculation("tea_spoon_us to pound", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to pound", calc);
            setRes(value)
        }
    }
    const fortable_spoon_euro = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro") {
            const value = cookingCalculation("gram_euro to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro") {
            const value = cookingCalculation("kg_euro to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce") {
            const value = cookingCalculation("ounce to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint") {
            const value = cookingCalculation("pint to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound") {
            const value = cookingCalculation("pound to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_us") {
            const value = cookingCalculation("tea_spoon_us to table_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to table_spoon_euro", calc);
            setRes(value)
        }
    }
    const fortea_spoon_us = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro") {
            const value = cookingCalculation("gram_euro to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro") {
            const value = cookingCalculation("kg_euro to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce") {
            const value = cookingCalculation("ounce to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint") {
            const value = cookingCalculation("pint to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound") {
            const value = cookingCalculation("pound to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us") {
            const value = cookingCalculation("table_spoon_us to tea_spoon_us", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to tea_spoon_us", calc);
            setRes(value)
        }
    }
    const fortea_spoon_euro = () => {
        if (selectedChargeFrom === "cup_euro") {
            const value = cookingCalculation("cup_euro to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "cup_us") {
            const value = cookingCalculation("cup_us to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "fluid_ounce") {
            const value = cookingCalculation("fluid_ounce to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "gram_euro") {
            const value = cookingCalculation("gram_euro to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "kg_euro") {
            const value = cookingCalculation("kg_euro to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "l_euro") {
            const value = cookingCalculation("l_euro to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ml_euro") {
            const value = cookingCalculation("ml_euro to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "ounce") {
            const value = cookingCalculation("ounce to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pint") {
            const value = cookingCalculation("pint to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "pound") {
            const value = cookingCalculation("pound to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_euro") {
            const value = cookingCalculation("table_spoon_euro to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "table_spoon_us") {
            const value = cookingCalculation("table_spoon_us to tea_spoon_euro", calc);
            setRes(value)
        }
        else if (selectedChargeFrom === "tea_spoon_euro") {
            const value = cookingCalculation("tea_spoon_euro to tea_spoon_euro", calc);
            setRes(value)
        }
    }

    //#endregion

    useEffect(() => {
        if (selectedChargeFrom === selectedChargeTo) setRes(calc);
        else if (selectedChargeTo === "cup_euro") forcup_euro();
        else if (selectedChargeTo === "cup_us") forcup_us();
        else if (selectedChargeTo === "fluid_ounce") forfluid_ounce();
        else if (selectedChargeTo === "gram_euro" || selectedChargeTo === "ml_euro") forgram_euro();
        else if (selectedChargeTo === "kg_euro" || selectedChargeTo === "l_euro") forkg_euro();
        else if (selectedChargeTo === "ounce") forounce();
        else if (selectedChargeTo === "pint") forpint();
        else if (selectedChargeTo === "pound") forpound();
        else if (selectedChargeTo === "table_spoon_euro") fortable_spoon_euro();
        else if (selectedChargeTo === "table_spoon_us") fortable_spoon_us();
        else if (selectedChargeTo === "tea_spoon_us") fortea_spoon_us();
        else if (selectedChargeTo === "tea_spoon_euro") fortea_spoon_euro();

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
            <Header theme_mode={theme_back} tabsShow={false} headingFirst="Cooking" headingLast="Calculator" />

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