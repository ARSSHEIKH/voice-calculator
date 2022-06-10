import React, { useEffect, useState } from "react";
import Row from "../../../../components/Row";
import Button from "../../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import Header from '../../../../components/header';
import InterstitialAdsShow from '../../../../components/admob/interstitialAds/adShow';
import { useFocusEffect } from '@react-navigation/native';
import { Dropdown } from "react-native-element-dropdown";
import { Divider } from "react-native-elements";
import dropdownList from "./dropdownList";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

// utils Calculator logics components
import { arceUs_Calculation, arce_Calculation, circularInch_Calculation, circularMil_Calculation, homestead_calculation, rood_Calculation, sabin_calculation, section_Calculation, squareAre_Calculation, squareBarn_Calculation, squareCentimeter_Calculation, squareChain_Calculation, squareDecimeter_Calculation, squareDekameter_Calculation, squareFootUs_Calculation, squareHectare_Calculation, squareHectometer_Calculation, squareInch_Calculation, squarekilometer_Calculation, squaremeter_Calculation, squareMicrometer_Calculation, squareMileUs_Calculation, squareMile_Calculation, squareMilimeter_Calculation, squareMil_Calculation, squareNanometer_Calculation, squarePerch_Calculation, squarePole_Calculation, squareRodUs_Calculation, squareRod_Calculation, squareYard_Calculation, township_Calculation, arpent_calculation, cuerda_calculation, plaza_calculation, varasCastellanasCuad_calculation, varasConuquerasCuad_calculation, electronCrossSection_calculation } from "./calculationLogic/areaCalculation";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let values_array = [];
let lastIndexOfCalc = 0;
export default function AreaCalculator() {
    const dispatch = useDispatch()
    const [calc, setCalc] = useState('')
    const [res, setRes] = useState('')
    const operators = ["+", "-"];
    const theme_mode = useSelector(state => state.theme_state.screens.simpleCalculator);
    const theme_back = useSelector(state => state.theme_state.header);
    const adClosed = useSelector(state => state.adClosed);
    const [selectedAngleFrom, setSelectedAngleFrom] = useState(dropdownList[0].value);
    const [selectedAngleTo, setSelectedAngleTo] = useState(dropdownList[1].value);

    useFocusEffect(
        React.useCallback(() => {
            // dispatch({ type: "set_tabs_state", payload: 0 })
            // dispatch({ type: "reset_adClosed" })
            return () => {
                // dispatch({ type: "reset_adClosed" })
            };
        }, [])
    )

    //#region calculation methods

    const forSquarekilometer = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_meter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_hectometer to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_dekameter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_decimeter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_centimeter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_milimeter to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_micrometer to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_nanometer to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("hectare to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arc" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("are to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("barn to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_mile to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_mile_us to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_yard to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_foot to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_foot_us to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_inch to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("circular_inch to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("township to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("section to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("arce to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("arce_us to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("rood to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_chain to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_rod to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_rod_us to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_perch to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_pole to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("square_mil to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("circular_mil to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("homestead to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("sabin to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("arpent to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("cuerda to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("plaza to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("varas_castellanas_cuad to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("varas_conuqueras_cuad to square_kilometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_kilometer") {
            const value = squarekilometer_Calculation("electron_cross_section to square_kilometer", calc);
            setRes(value)
        }
    }
    const forSquareMeter = () => {
        if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_kilometer to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_hectometer to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_dekameter to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_decimeter to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_centimeter to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_milimeter to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_micrometer to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_nanometer to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("hectare to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("are to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("barn to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_mile to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_mile_us to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_yard to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_foot to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_foot_us to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_inch to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("circular_inch to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("township to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("section to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("arce to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("arce_us to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("rood to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_chain to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_rod to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_rod_us to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_perch to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_pole to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("square_mil to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("circular_mil to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("homestead to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("sabin to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("arpent to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("cuerda to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("plaza to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("varas_castellanas_cuad to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("varas_conuqueras_cuad to square_meter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_meter") {
            const value = squaremeter_Calculation("electron_cross_section to square_meter", calc);
            setRes(value)
        }
    }
    const forSquareHectometer = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_meter to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_kilometer to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_dekameter to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_decimeter to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_centimeter to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_milimeter to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_micrometer to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_nanometer to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("hectare to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("are to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("barn to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_mile to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_mile_us to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_yard to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_foot to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_foot_us to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_inch to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("circular_inch to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("township to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("section to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("arce to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("arce_us to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("rood to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_chain to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_rod to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_rod_us to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_perch to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_pole to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("square_mil to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("circular_mil to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("homestead to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("sabin to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("arpent to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("cuerda to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("plaza to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("varas_castellanas_cuad to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("varas_conuqueras_cuad to square_hectometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_hectometer") {
            const value = squareHectometer_Calculation("electron_cross_section to square_hectometer", calc);
            setRes(value)
        }
    }
    const forSquareDekameter = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_meter to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_kilometer to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_hectometer to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_decimeter to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_centimeter to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_milimeter to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_micrometer to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_nanometer to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("hectare to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("are to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("barn to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_mile to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_mile_us to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_yard to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_foot to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_foot_us to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_inch to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("circular_inch to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("township to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("section to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("arce to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("arce_us to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("rood to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_chain to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_rod to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_rod_us to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_perch to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_pole to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("square_mil to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("circular_mil to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("homestead to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("sabin to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("arpent to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("cuerda to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("plaza to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("varas_castellanas_cuad to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("varas_conuqueras_cuad to square_dekameter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_dekameter") {
            const value = squareDekameter_Calculation("electron_cross_section to square_dekameter", calc);
            setRes(value)
        }
    }
    const forSquareDecimeter = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_meter to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_kilometer to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_hectometer to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_dekameter to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_centimeter to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_milimeter to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_micrometer to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_nanometer to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("hectare to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("are to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("barn to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_mile to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_mile_us to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_yard to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_foot to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_foot_us to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_inch to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("circular_inch to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("township to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("section to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("arce to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("arce_us to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("rood to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_chain to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_rod to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_rod_us to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_perch to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_pole to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("square_mil to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("circular_mil to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("homestead to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("sabin to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("arpent to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("cuerda to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("plaza to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("varas_castellanas_cuad to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("varas_conuqueras_cuad to square_decimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_decimeter") {
            const value = squareDecimeter_Calculation("electron_cross_section to square_decimeter", calc);
            setRes(value)
        }
    }
    const forSquareCentimeter = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_meter to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_kilometer to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_hectometer to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_dekameter to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_decimeter to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_milimeter to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_micrometer to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_nanometer to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("hectare to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("are to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("barn to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_mile to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_mile_us to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_yard to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_foot to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_foot_us to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_inch to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("circular_inch to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("township to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("section to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("arce to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("arce_us to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("rood to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_chain to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_rod to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_rod_us to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_perch to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_pole to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("square_mil to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("circular_mil to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("homestead to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("sabin to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("arpent to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("cuerda to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("plaza to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("varas_castellanas_cuad to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("varas_conuqueras_cuad to square_centimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_centimeter") {
            const value = squareCentimeter_Calculation("electron_cross_section to square_centimeter", calc);
            setRes(value)
        }
    }
    const forSquareMilimeter = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_meter to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_kilometer to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_hectometer to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_dekameter to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_decimeter to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_centimeter to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_micrometer to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_nanometer to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("hectare to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("are to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("barn to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_mile to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_mile_us to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_yard to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_foot to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_foot_us to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_inch to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("circular_inch to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("township to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("section to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("arce to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("arce_us to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("rood to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_chain to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_rod to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_rod_us to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_perch to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_pole to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("square_mil to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("circular_mil to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("homestead to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("sabin to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("arpent to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("cuerda to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("plaza to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("varas_castellanas_cuad to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("varas_conuqueras_cuad to square_milimeter", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_milimeter") {
            const value = squareMilimeter_Calculation("electron_cross_section to square_milimeter", calc);
            setRes(value)
        }
    }
    const forSquareMicrometer = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_meter to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_kilometer to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_hectometer to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_dekameter to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_decimeter to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_centimeter to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_milimeter to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_nanometer to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("hectare to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("are to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("barn to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_mile to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_mile_us to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_yard to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_foot to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_foot_us to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_inch to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("circular_inch to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("township to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("section to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("arce to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("arce_us to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("rood to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_chain to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_rod to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_rod_us to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_perch to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_pole to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("square_mil to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("circular_mil to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("homestead to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("sabin to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("arpent to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("cuerda to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("plaza to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("varas_castellanas_cuad to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("varas_conuqueras_cuad to square_micrometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_micrometer") {
            const value = squareMicrometer_Calculation("electron_cross_section to square_micrometer", calc);
            setRes(value)
        }
    }
    const forSquareNanometer = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_meter to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_kilometer to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_hectometer to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_dekameter to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_decimeter to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_centimeter to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_milimeter to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_micrometer to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("hectare to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("are to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("barn to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_mile to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_mile_us to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_yard to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_foot to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_foot_us to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_inch to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("circular_inch to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("township to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("section to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("arce to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("arce_us to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("rood to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_chain to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_rod to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_rod_us to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_perch to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_pole to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("square_mil to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("circular_mil to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("homestead to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("sabin to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("arpent to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("cuerda to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("plaza to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("varas_castellanas_cuad to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("varas_conuqueras_cuad to square_nanometer", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_nanometer") {
            const value = squareNanometer_Calculation("electron_cross_section to square_nanometer", calc);
            setRes(value)
        }
    }
    const forHectare = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_meter to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_kilometer to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_hectometer to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_dekameter to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_decimeter to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_centimeter to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_milimeter to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_micrometer to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_nanometer to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("are to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("barn to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_mile to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_mile_us to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_yard to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_foot to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_foot_us to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_inch to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("circular_inch to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("township to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("section to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("arce to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("arce_us to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("rood to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_chain to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_rod to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_rod_us to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_perch to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_pole to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("square_mil to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("circular_mil to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("homestead to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("sabin to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("arpent to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("cuerda to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("plaza to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("varas_castellanas_cuad to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("varas_conuqueras_cuad to hectare", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "hectare") {
            const value = squareHectare_Calculation("electron_cross_section to hectare", calc);
            setRes(value)
        }
    }
    const forAre = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_meter to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_kilometer to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_hectometer to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_dekameter to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_decimeter to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_centimeter to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_milimeter to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_micrometer to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_nanometer to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("hectare to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("barn to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_mile to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_mile_us to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_yard to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_foot to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_foot_us to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_inch to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("circular_inch to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("township to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("section to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("arce to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("arce_us to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("rood to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_chain to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_rod to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_rod_us to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_perch to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_pole to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("square_mil to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("circular_mil to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("homestead to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("sabin to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("arpent to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("cuerda to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("plaza to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("varas_castellanas_cuad to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("varas_conuqueras_cuad to are", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "are") {
            const value = squareAre_Calculation("electron_cross_section to are", calc);
            setRes(value)
        }
    }
    const forBarn = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_meter to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_kilometer to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_hectometer to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_dekameter to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_decimeter to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_centimeter to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_milimeter to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_micrometer to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_nanometer to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("hectare to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("are to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_mile to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_mile_us to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_yard to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_foot to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_foot_us to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_inch to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("circular_inch to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("township to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("section to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("arce to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("arce_us to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("rood to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_chain to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_rod to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_rod_us to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_perch to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_pole to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("square_mil to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("circular_mil to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("homestead to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("sabin to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("arpent to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("cuerda to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("plaza to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("varas_castellanas_cuad to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("varas_conuqueras_cuad to barn", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "barn") {
            const value = squareBarn_Calculation("electron_cross_section to barn", calc);
            setRes(value)
        }
    }
    const forSquareMile = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_meter to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_kilometer to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_hectometer to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_dekameter to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_decimeter to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_centimeter to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_milimeter to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_micrometer to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_nanometer to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("hectare to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("are to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareMile_Calculation("barn to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_mile_us to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_yard to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_foot to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_foot_us to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_inch to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("circular_inch to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("township to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("section to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("arce to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("arce_us to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("rood to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_chain to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_rod to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_rod_us to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_perch to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_pole to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("square_mil to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("circular_mil to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("homestead to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("sabin to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("arpent to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("cuerda to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("plaza to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("varas_castellanas_cuad to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("varas_conuqueras_cuad to square_mile", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_mile") {
            const value = squareMile_Calculation("electron_cross_section to square_mile", calc);
            setRes(value)
        }
    }
    const forSquareMileUs = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_meter to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_kilometer to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_hectometer to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_dekameter to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_decimeter to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_centimeter to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_milimeter to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_micrometer to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_nanometer to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("hectare to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("are to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareMileUs_Calculation("barn to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_mile to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_yard to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_foot to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_foot_us to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_inch to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("circular_inch to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("township to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("section to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("arce to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("arce_us to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("rood to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_chain to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_rod to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_rod_us to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_perch to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_pole to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("square_mil to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("circular_mil to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("homestead to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("sabin to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("arpent to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("cuerda to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("plaza to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("varas_castellanas_cuad to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("varas_conuqueras_cuad to square_mile_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_mile_us") {
            const value = squareMileUs_Calculation("electron_cross_section to square_mile_us", calc);
            setRes(value)
        }
    }
    const forSquareYard = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_meter to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_kilometer to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_hectometer to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_dekameter to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_decimeter to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_centimeter to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_milimeter to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_micrometer to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_nanometer to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("hectare to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("are to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareYard_Calculation("barn to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_mile to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_mile_us to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_foot to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_foot_us to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_inch to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("circular_inch to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("township to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("section to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("arce to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("arce_us to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("rood to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_chain to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_rod to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_rod_us to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_perch to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_pole to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("square_mil to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("circular_mil to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("homestead to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("sabin to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("arpent to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("cuerda to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("plaza to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("varas_castellanas_cuad to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("varas_conuqueras_cuad to square_yard", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_yard") {
            const value = squareYard_Calculation("electron_cross_section to square_yard", calc);
            setRes(value)
        }
    }
    const forSquareFoot = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_meter to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_kilometer to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_hectometer to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_dekameter to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_decimeter to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_centimeter to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_milimeter to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_micrometer to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_nanometer to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("hectare to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("are to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareFoot_Calculation("barn to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_mile to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_mile_us to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_yard to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_foot_us to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_inch to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("circular_inch to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("township to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("section to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("arce to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("arce_us to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("rood to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_chain to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_rod to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_rod_us to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_perch to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_pole to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("square_mil to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("circular_mil to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("homestead to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("sabin to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("arpent to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("cuerda to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("plaza to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("varas_castellanas_cuad to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("varas_conuqueras_cuad to square_foot", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_foot") {
            const value = squareFoot_Calculation("electron_cross_section to square_foot", calc);
            setRes(value)
        }
    }
    const forSquareFootUs = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_meter to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_kilometer to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_hectometer to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_dekameter to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_decimeter to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_centimeter to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_milimeter to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_micrometer to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_nanometer to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("hectare to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("are to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareFootUs_Calculation("barn to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_mile to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_mile_us to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_yard to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_foot to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_inch to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("circular_inch to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("township to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("section to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("arce to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("arce_us to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("rood to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_chain to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_rod to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_rod_us to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_perch to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_pole to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("square_mil to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("circular_mil to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("homestead to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("sabin to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("arpent to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("cuerda to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("plaza to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("varas_castellanas_cuad to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("varas_conuqueras_cuad to square_foot_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_foot_us") {
            const value = squareFootUs_Calculation("electron_cross_section to square_foot_us", calc);
            setRes(value)
        }
    }
    const forSquareInch = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_meter to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_kilometer to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_hectometer to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_dekameter to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_decimeter to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_centimeter to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_milimeter to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_micrometer to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_nanometer to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("hectare to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("are to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareInch_Calculation("barn to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_mile to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_mile_us to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_yard to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_foot to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_foot_us to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("circular_inch to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("township to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("section to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("arce to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("arce_us to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("rood to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_chain to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_rod to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_rod_us to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_perch to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_pole to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("square_mil to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("circular_mil to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("homestead to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("sabin to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("arpent to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("cuerda to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("plaza to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("varas_castellanas_cuad to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("varas_conuqueras_cuad to square_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_inch") {
            const value = squareInch_Calculation("electron_cross_section to square_inch", calc);
            setRes(value)
        }
    }
    const forCircularInch = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_meter to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_kilometer to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_hectometer to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_dekameter to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_decimeter to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_centimeter to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_milimeter to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_micrometer to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_nanometer to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("hectare to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("are to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = circularInch_Calculation("barn to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_mile to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_mile_us to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_yard to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_foot to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_foot_us to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_inch to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("township to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("section to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("arce to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("arce_us to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("rood to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_chain to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_rod to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_rod_us to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_perch to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_pole to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("square_mil to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("circular_mil to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("homestead to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("sabin to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("arpent to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("cuerda to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("plaza to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("varas_castellanas_cuad to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("varas_conuqueras_cuad to circular_inch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "circular_inch") {
            const value = circularInch_Calculation("electron_cross_section to circular_inch", calc);
            setRes(value)
        }
    }
    const forTownship = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "township") {
            const value = township_Calculation("square_meter to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "township") {
            const value = township_Calculation("square_kilometer to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "township") {
            const value = township_Calculation("square_hectometer to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "township") {
            const value = township_Calculation("square_dekameter to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "township") {
            const value = township_Calculation("square_decimeter to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "township") {
            const value = township_Calculation("square_centimeter to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "township") {
            const value = township_Calculation("square_milimeter to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "township") {
            const value = township_Calculation("square_micrometer to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "township") {
            const value = township_Calculation("square_nanometer to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "township") {
            const value = township_Calculation("hectare to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "township") {
            const value = township_Calculation("are to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = township_Calculation("barn to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "township") {
            const value = township_Calculation("square_mile to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "township") {
            const value = township_Calculation("square_mile_us to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "township") {
            const value = township_Calculation("square_yard to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "township") {
            const value = township_Calculation("square_foot to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "township") {
            const value = township_Calculation("square_foot_us to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "township") {
            const value = township_Calculation("square_inch to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "township") {
            const value = township_Calculation("circular_inch to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "township") {
            const value = township_Calculation("section to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "township") {
            const value = township_Calculation("arce to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "township") {
            const value = township_Calculation("arce_us to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "township") {
            const value = township_Calculation("rood to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "township") {
            const value = township_Calculation("square_chain to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "township") {
            const value = township_Calculation("square_rod to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "township") {
            const value = township_Calculation("square_rod_us to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "township") {
            const value = township_Calculation("square_perch to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "township") {
            const value = township_Calculation("square_pole to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "township") {
            const value = township_Calculation("square_mil to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "township") {
            const value = township_Calculation("circular_mil to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "township") {
            const value = township_Calculation("homestead to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "township") {
            const value = township_Calculation("sabin to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "township") {
            const value = township_Calculation("arpent to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "township") {
            const value = township_Calculation("cuerda to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "township") {
            const value = township_Calculation("plaza to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "township") {
            const value = township_Calculation("varas_castellanas_cuad to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "township") {
            const value = township_Calculation("varas_conuqueras_cuad to township", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "township") {
            const value = township_Calculation("electron_cross_section to township", calc);
            setRes(value)
        }
    }
    const forSection = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "section") {
            const value = section_Calculation("square_meter to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "section") {
            const value = section_Calculation("square_kilometer to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "section") {
            const value = section_Calculation("square_hectometer to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "section") {
            const value = section_Calculation("square_dekameter to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "section") {
            const value = section_Calculation("square_decimeter to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "section") {
            const value = section_Calculation("square_centimeter to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "section") {
            const value = section_Calculation("square_milimeter to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "section") {
            const value = section_Calculation("square_micrometer to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "section") {
            const value = section_Calculation("square_nanometer to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "section") {
            const value = section_Calculation("hectare to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "section") {
            const value = section_Calculation("are to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = section_Calculation("barn to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "section") {
            const value = section_Calculation("square_mile to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "section") {
            const value = section_Calculation("square_mile_us to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "section") {
            const value = section_Calculation("square_yard to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "section") {
            const value = section_Calculation("square_foot to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "section") {
            const value = section_Calculation("square_foot_us to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "section") {
            const value = section_Calculation("square_inch to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "section") {
            const value = section_Calculation("circular_inch to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "section") {
            const value = section_Calculation("township to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "section") {
            const value = section_Calculation("arce to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "section") {
            const value = section_Calculation("arce_us to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "section") {
            const value = section_Calculation("rood to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "section") {
            const value = section_Calculation("square_chain to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "section") {
            const value = section_Calculation("square_rod to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "section") {
            const value = section_Calculation("square_rod_us to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "section") {
            const value = section_Calculation("square_perch to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "section") {
            const value = section_Calculation("square_pole to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "section") {
            const value = section_Calculation("square_mil to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "section") {
            const value = section_Calculation("circular_mil to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "section") {
            const value = section_Calculation("homestead to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "section") {
            const value = section_Calculation("sabin to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "section") {
            const value = section_Calculation("arpent to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "section") {
            const value = section_Calculation("cuerda to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "section") {
            const value = section_Calculation("plaza to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "section") {
            const value = section_Calculation("varas_castellanas_cuad to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "section") {
            const value = section_Calculation("varas_conuqueras_cuad to section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "section") {
            const value = section_Calculation("electron_cross_section to section", calc);
            setRes(value)
        }
    }
    const forArce = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_meter to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_kilometer to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_hectometer to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_dekameter to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_decimeter to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_centimeter to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_milimeter to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_micrometer to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_nanometer to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "arce") {
            const value = arce_Calculation("hectare to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "arce") {
            const value = arce_Calculation("are to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = arce_Calculation("barn to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_mile to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_mile_us to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_yard to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_foot to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_foot_us to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_inch to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "arce") {
            const value = arce_Calculation("circular_inch to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "arce") {
            const value = arce_Calculation("township to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "arce") {
            const value = arce_Calculation("section to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "arce") {
            const value = arce_Calculation("arce_us to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "arce") {
            const value = arce_Calculation("rood to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_chain to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_rod to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_rod_us to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_perch to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_pole to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "arce") {
            const value = arce_Calculation("square_mil to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "arce") {
            const value = arce_Calculation("circular_mil to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "arce") {
            const value = arce_Calculation("homestead to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "arce") {
            const value = arce_Calculation("sabin to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "arce") {
            const value = arce_Calculation("arpent to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "arce") {
            const value = arce_Calculation("cuerda to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "arce") {
            const value = arce_Calculation("plaza to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "arce") {
            const value = arce_Calculation("varas_castellanas_cuad to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "arce") {
            const value = arce_Calculation("varas_conuqueras_cuad to arce", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "arce") {
            const value = arce_Calculation("electron_cross_section to arce", calc);
            setRes(value)
        }
    }
    const forArceUs = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_meter to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_kilometer to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_hectometer to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_dekameter to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_decimeter to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_centimeter to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_milimeter to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_micrometer to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_nanometer to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("hectare to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("are to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = arceUs_Calculation("barn to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_mile to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_mile_us to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_yard to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_foot to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_foot_us to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_inch to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("circular_inch to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("township to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("section to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("arce to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("rood to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_chain to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_rod to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_rod_us to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_perch to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_pole to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("square_mil to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("circular_mil to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("homestead to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("sabin to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("arpent to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("cuerda to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("plaza to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("varas_castellanas_cuad to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("varas_conuqueras_cuad to arce_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "arce_us") {
            const value = arceUs_Calculation("electron_cross_section to arce_us", calc);
            setRes(value)
        }
    }
    const forRood = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_meter to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_kilometer to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_hectometer to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_dekameter to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_decimeter to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_centimeter to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_milimeter to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_micrometer to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_nanometer to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "rood") {
            const value = rood_Calculation("hectare to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "rood") {
            const value = rood_Calculation("are to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = rood_Calculation("barn to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_mile to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_mile_us to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_yard to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_foot to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_foot_us to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_inch to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "rood") {
            const value = rood_Calculation("circular_inch to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "rood") {
            const value = rood_Calculation("township to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "rood") {
            const value = rood_Calculation("section to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "rood") {
            const value = rood_Calculation("arce to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "rood") {
            const value = rood_Calculation("arce_us to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_chain to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_rod to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_rod_us to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_perch to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_pole to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "rood") {
            const value = rood_Calculation("square_mil to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "rood") {
            const value = rood_Calculation("circular_mil to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "rood") {
            const value = rood_Calculation("homestead to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "rood") {
            const value = rood_Calculation("sabin to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "rood") {
            const value = rood_Calculation("arpent to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "rood") {
            const value = rood_Calculation("cuerda to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "rood") {
            const value = rood_Calculation("plaza to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "rood") {
            const value = rood_Calculation("varas_castellanas_cuad to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "rood") {
            const value = rood_Calculation("varas_conuqueras_cuad to rood", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "rood") {
            const value = rood_Calculation("electron_cross_section to rood", calc);
            setRes(value)
        }
    }
    const forSquareChain = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_meter to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_kilometer to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_hectometer to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_dekameter to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_decimeter to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_centimeter to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_milimeter to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_micrometer to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_nanometer to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("hectare to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("are to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareChain_Calculation("barn to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_mile to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_mile_us to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_yard to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_foot to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_foot_us to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_inch to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("circular_inch to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("township to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("section to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("arce to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("arce_us to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("rood to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_rod to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_rod_us to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_perch to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_pole to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("square_mil to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("circular_mil to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("homestead to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("sabin to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("arpent to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("cuerda to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("plaza to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("varas_castellanas_cuad to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("varas_conuqueras_cuad to square_chain", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_chain") {
            const value = squareChain_Calculation("electron_cross_section to square_chain", calc);
            setRes(value)
        }
    }
    const forSquareRod = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_meter to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_kilometer to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_hectometer to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_dekameter to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_decimeter to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_centimeter to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_milimeter to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_micrometer to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_nanometer to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("hectare to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("are to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareRod_Calculation("barn to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_mile to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_mile_us to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_yard to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_foot to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_foot_us to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_inch to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("circular_inch to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("township to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("section to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("arce to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("arce_us to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("rood to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_chain to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_rod_us to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_perch to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_pole to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("square_mil to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("circular_mil to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("homestead to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("sabin to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("arpent to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("cuerda to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("plaza to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("varas_castellanas_cuad to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("varas_conuqueras_cuad to square_rod", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_rod") {
            const value = squareRod_Calculation("electron_cross_section to square_rod", calc);
            setRes(value)
        }
    }
    const forSquareRodUs = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_meter to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_kilometer to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_hectometer to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_dekameter to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_decimeter to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_centimeter to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_milimeter to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_micrometer to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_nanometer to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("hectare to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("are to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareRodUs_Calculation("barn to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_mile to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_mile_us to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_yard to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_foot to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_foot_us to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_inch to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("circular_inch to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("township to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("section to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("arce to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("arce_us to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("rood to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_chain to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_rod to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_perch to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_pole to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("square_mil to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("circular_mil to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("homestead to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("sabin to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("arpent to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("cuerda to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("plaza to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("varas_castellanas_cuad to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("varas_conuqueras_cuad to square_rod_us", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_rod_us") {
            const value = squareRodUs_Calculation("electron_cross_section to square_rod_us", calc);
            setRes(value)
        }
    }
    const forSquarePearch = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_meter to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_kilometer to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_hectometer to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_dekameter to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_decimeter to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_centimeter to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_milimeter to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_micrometer to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_nanometer to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("hectare to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("are to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squarePerch_Calculation("barn to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_mile to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_mile_us to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_yard to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_foot to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_foot_us to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_inch to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("circular_inch to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("township to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("section to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("arce to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("arce_us to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("rood to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_chain to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_rod to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_rod_us to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_pole to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("square_mil to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("circular_mil to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("homestead to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("sabin to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("arpent to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("cuerda to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("plaza to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("varas_castellanas_cuad to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("varas_conuqueras_cuad to square_perch", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_perch") {
            const value = squarePerch_Calculation("electron_cross_section to square_perch", calc);
            setRes(value)
        }
    }
    const forSquarePole = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_meter to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_kilometer to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_hectometer to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_dekameter to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_decimeter to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_centimeter to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_milimeter to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_micrometer to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_nanometer to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("hectare to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("are to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squarePole_Calculation("barn to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_mile to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_mile_us to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_yard to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_foot to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_foot_us to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_inch to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("circular_inch to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("township to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("section to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("arce to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("arce_us to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("rood to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_chain to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_rod to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_rod_us to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_perch to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("square_mil to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("circular_mil to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("homestead to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("sabin to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("arpent to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("cuerda to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("plaza to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("varas_castellanas_cuad to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("varas_conuqueras_cuad to square_pole", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_pole") {
            const value = squarePole_Calculation("electron_cross_section to square_pole", calc);
            setRes(value)
        }
    }
    const forSquareMil = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_meter to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_kilometer to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_hectometer to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_dekameter to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_decimeter to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_centimeter to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_milimeter to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_micrometer to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_nanometer to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("hectare to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("are to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = squareMil_Calculation("barn to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_mile to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_mile_us to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_yard to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_foot to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_foot_us to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_inch to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("circular_inch to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("township to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("section to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("arce to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("arce_us to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("rood to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_chain to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_rod to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_rod_us to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_perch to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("square_pole to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("circular_mil to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("homestead to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("sabin to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("arpent to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("cuerda to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("plaza to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("varas_castellanas_cuad to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("varas_conuqueras_cuad to square_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "square_mil") {
            const value = squareMil_Calculation("electron_cross_section to square_mil", calc);
            setRes(value)
        }
    }
    const forCircularMil = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_meter to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_kilometer to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_hectometer to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_dekameter to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_decimeter to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_centimeter to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_milimeter to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_micrometer to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_nanometer to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("hectare to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("are to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = circularMil_Calculation("barn to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_mile to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_mile_us to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_yard to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_foot to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_foot_us to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_inch to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("circular_inch to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("township to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("section to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("arce to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("arce_us to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("rood to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_chain to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_rod to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_rod_us to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_perch to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_pole to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("square_mil to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("homestead to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("sabin to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("arpent to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("cuerda to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("plaza to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("varas_castellanas_cuad to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("varas_conuqueras_cuad to circular_mil", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "circular_mil") {
            const value = circularMil_Calculation("electron_cross_section to circular_mil", calc);
            setRes(value)
        }
    }
    const forHomestead = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_meter to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_kilometer to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "homestead") {
            const value = homestead_Calculation("square_hectometer to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_dekameter to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_decimeter to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_centimeter to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_milimeter to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_micrometer to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_nanometer to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("hectare to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("are to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = homestead_calculation("barn to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_mile to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_mile_us to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_yard to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_foot to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_foot_us to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_inch to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("circular_inch to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("township to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("section to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("arce to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("arce_us to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("rood to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_chain to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_rod to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_rod_us to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_perch to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_pole to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("square_mil to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("circular_mil to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("sabin to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("arpent to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("cuerda to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("plaza to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("varas_castellanas_cuad to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("varas_conuqueras_cuad to homestead", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "homestead") {
            const value = homestead_calculation("electron_cross_section to homestead", calc);
            setRes(value)
        }
    }
    const forSabin = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_meter to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_kilometer to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "sabin") {
            const value = sabin_Calculation("square_hectometer to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_dekameter to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_decimeter to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_centimeter to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_milimeter to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_micrometer to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_nanometer to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("hectare to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("are to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = sabin_calculation("barn to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_mile to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_mile_us to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_yard to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_foot to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_foot_us to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_inch to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("circular_inch to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("township to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("section to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("arce to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("arce_us to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("rood to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_chain to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_rod to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_rod_us to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_perch to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_pole to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("square_mil to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("circular_mil to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("homestead to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("arpent to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("cuerda to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("plaza to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("varas_castellanas_cuad to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("varas_conuqueras_cuad to sabin", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "sabin") {
            const value = sabin_calculation("electron_cross_section to sabin", calc);
            setRes(value)
        }
    }
    const forArpent = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_meter to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_kilometer to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "arpent") {
            const value = arpent_Calculation("square_hectometer to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_dekameter to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_decimeter to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_centimeter to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_milimeter to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_micrometer to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_nanometer to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("hectare to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("are to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = arpent_calculation("barn to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_mile to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_mile_us to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_yard to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_foot to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_foot_us to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_inch to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("circular_inch to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("township to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("section to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("arce to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("arce_us to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("rood to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_chain to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_rod to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_rod_us to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_perch to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_pole to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("square_mil to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("circular_mil to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("homestead to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("sabin to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("cuerda to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("plaza to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("varas_castellanas_cuad to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("varas_conuqueras_cuad to arpent", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "arpent") {
            const value = arpent_calculation("electron_cross_section to arpent", calc);
            setRes(value)
        }
    }
    const forCuerda = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_meter to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_kilometer to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_hectometer to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_dekameter to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_decimeter to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_centimeter to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_milimeter to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_micrometer to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_nanometer to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("hectare to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("are to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = cuerda_calculation("barn to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_mile to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_mile_us to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_yard to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_foot to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_foot_us to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_inch to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("circular_inch to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("township to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("section to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("arce to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("arce_us to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("rood to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_chain to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_rod to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_rod_us to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_perch to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_pole to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("square_mil to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("circular_mil to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("homestead to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("sabin to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("cuerda to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("plaza to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("varas_castellanas_cuad to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("varas_conuqueras_cuad to cuerda", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "cuerda") {
            const value = cuerda_calculation("electron_cross_section to cuerda", calc);
            setRes(value)
        }
    }
    const forPlaza = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_meter to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_kilometer to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_hectometer to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_dekameter to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_decimeter to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_centimeter to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_milimeter to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_micrometer to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_nanometer to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("hectare to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("are to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = plaza_calculation("barn to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_mile to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_mile_us to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_yard to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_foot to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_foot_us to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_inch to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("circular_inch to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("township to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("section to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("arce to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("arce_us to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("rood to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_chain to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_rod to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_rod_us to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_perch to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_pole to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("square_mil to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("circular_mil to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("homestead to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("sabin to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("arpent to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("cuerda to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("varas_castellanas_cuad to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("varas_conuqueras_cuad to plaza", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "plaza") {
            const value = plaza_calculation("electron_cross_section to plaza", calc);
            setRes(value)
        }
    }
    const forVarasCastellanasCuad = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_meter to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_kilometer to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_hectometer to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_dekameter to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_decimeter to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_centimeter to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_milimeter to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_micrometer to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_nanometer to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("hectare to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("are to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = varasCastellanasCuad_calculation("barn to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_mile to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_mile_us to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_yard to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_foot to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_foot_us to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_inch to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("circular_inch to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("township to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("section to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("arce to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("arce_us to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("rood to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_chain to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_rod to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_rod_us to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_perch to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_pole to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("square_mil to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("circular_mil to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("homestead to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("sabin to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("arpent to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("cuerda to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("plaza to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("varas_conuqueras_cuad to varas_castellanas_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "varas_castellanas_cuad") {
            const value = varasCastellanasCuad_calculation("electron_cross_section to varas_castellanas_cuad", calc);
            setRes(value)
        }
    }
    const forVarasConuquerasCuad = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_meter to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_kilometer to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_hectometer to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_dekameter to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_decimeter to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_centimeter to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_milimeter to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_micrometer to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_nanometer to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("hectare to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("are to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = varasConuquerasCuad_calculation("barn to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_mile to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_mile_us to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_yard to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_foot to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_foot_us to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_inch to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("circular_inch to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("township to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("section to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("arce to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("arce_us to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("rood to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_chain to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_rod to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_rod_us to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_perch to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_pole to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("square_mil to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("circular_mil to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("homestead to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("sabin to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("arpent to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("cuerda to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("plaza to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("varas_castellanas_cuad to varas_conuqueras_cuad", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "electron_cross_section" && selectedAngleTo === "varas_conuqueras_cuad") {
            const value = varasConuquerasCuad_calculation("electron_cross_section to varas_conuqueras_cuad", calc);
            setRes(value)
        }
    }
    const forElectronCrossSection = () => {
        if (selectedAngleFrom === "square_meter" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_meter to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_kilometer" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_kilometer to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_hectometer" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_hectometer to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_dekameter" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_dekameter to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_decimeter" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_decimeter to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_centimeter" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_centimeter to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_milimeter" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_milimeter to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_micrometer" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_micrometer to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_nanometer" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_nanometer to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "hectare" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("hectare to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "are" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("are to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "barn" && selectedAngleTo === "barn") {
            const value = electronCrossSection_calculation("barn to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_mile to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mile_us" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_mile_us to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_yard" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_yard to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_foot to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_foot_us" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_foot_us to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_inch" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_inch to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_inch" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("circular_inch to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "township" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("township to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "section" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("section to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("arce to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arce_us" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("arce_us to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "rood" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("rood to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_chain" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_chain to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_rod to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_rod_us" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_rod_us to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_perch" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_perch to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_pole" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_pole to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "square_mil" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("square_mil to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "circular_mil" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("circular_mil to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "homestead" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("homestead to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "sabin" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("sabin to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "arpent" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("arpent to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "cuerda" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("cuerda to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "plaza" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("plaza to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_castellanas_cuad" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("varas_castellanas_cuad to electron_cross_section", calc);
            setRes(value)
        }
        else if (selectedAngleFrom === "varas_conuqueras_cuad" && selectedAngleTo === "electron_cross_section") {
            const value = electronCrossSection_calculation("varas_conuqueras_cuad to electron_cross_section", calc);
            setRes(value)
        }
    }

    //#endregion

    useEffect(() => {
        if (selectedAngleFrom === selectedAngleTo) setRes(calc)
        else if (selectedAngleTo === "square_meter") forSquareMeter();
        else if (selectedAngleTo === "square_kilometer") forSquarekilometer();
        else if (selectedAngleTo === "square_hectometer") forSquareHectometer();
        else if (selectedAngleTo === "square_dekameter") forSquareDekameter();
        else if (selectedAngleTo === "square_decimeter") forSquareDecimeter();
        else if (selectedAngleTo === "square_centimeter") forSquareCentimeter();
        else if (selectedAngleTo === "square_milimeter") forSquareMilimeter();
        else if (selectedAngleTo === "square_micrometer") forSquareMicrometer();
        else if (selectedAngleTo === "square_nanometer") forSquareNanometer();
        else if (selectedAngleTo === "hectare") forHectare();
        else if (selectedAngleTo === "are") forAre();
        else if (selectedAngleTo === "barn") forBarn();
        else if (selectedAngleTo === "square_mile") forSquareMile();
        else if (selectedAngleTo === "square_mile_us") forSquareMileUs();
        else if (selectedAngleTo === "square_yard") forSquareYard();
        else if (selectedAngleTo === "square_foot") forSquareFoot();
        else if (selectedAngleTo === "square_foot_us") forSquareFootUs();
        else if (selectedAngleTo === "square_inch") forSquareInch();
        else if (selectedAngleTo === "circular_inch") forCircularInch();
        else if (selectedAngleTo === "township") forTownship();
        else if (selectedAngleTo === "section") forSection();
        else if (selectedAngleTo === "arce") forArce();
        else if (selectedAngleTo === "arce_us") forArceUs();
        else if (selectedAngleTo === "rood") forRood();
        else if (selectedAngleTo === "square_chain") forSquareChain();
        else if (selectedAngleTo === "square_rod") forSquareRod();
        else if (selectedAngleTo === "square_rod_us") forSquareRodUs();
        else if (selectedAngleTo === "square_perch") forSquarePearch();
        else if (selectedAngleTo === "square_pole") forSquarePole();
        else if (selectedAngleTo === "square_mil") forSquareMil();
        else if (selectedAngleTo === "circular_mil") forCircularMil();
        else if (selectedAngleTo === "homestead") forHomestead();
        else if (selectedAngleTo === "sabin") forSabin();
        else if (selectedAngleTo === "arpent") forArpent();
        else if (selectedAngleTo === "cuerda") forCuerda();
        else if (selectedAngleTo === "plaza") forPlaza();
        else if (selectedAngleTo === "varas_castellanas_cuad") forVarasCastellanasCuad();
        else if (selectedAngleTo === "varas_conuqueras_cuad") forVarasConuquerasCuad();
        else if (selectedAngleTo === "electron_cross_section") forElectronCrossSection();
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
        <Header theme_mode={theme_back} tabsShow={false} headingFirst="Area" headingLast="Calculator" />

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
                                    inputSearchStyle={styles.inputSearchStyle}
                                    search
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
});