
// import { voltage } from 'units-converter';
// import convert from "convert-units"



const fixedValue = 2;
let thousand = 1000;
let seconds = 3600;

export const concentrationCalculation = (method, num) => {

    //#region  for mol_cubicmeter

    if (method === "mol_liter to mol_cubicmeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "mol_cubiccentimeter to mol_cubicmeter") return Number.parseFloat(eval(num * (thousand * thousand)));
    else if (method === "mol_cubicmillimeter to mol_cubicmeter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "kilomol_cubicmeter to mol_cubicmeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_liter to mol_cubicmeter") return Number.parseFloat(eval(num * (thousand * thousand)));
    else if (method === "kilomol_cubiccentimeter to mol_cubicmeter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "kilomol_cubicmillimeter to mol_cubicmeter") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "millimol_cubicmeter to mol_cubicmeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "millimol_liter to mol_cubicmeter") return Number.parseFloat(eval(num * 1));
    else if (method === "millimol_cubiccentimeter to mol_cubicmeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "millimol_cubicmillimeter to mol_cubicmeter") return Number.parseFloat(eval(num * (thousand * thousand)));
    //#endregion

    //#region  for mol_liter
    else if (method === "mol_cubicmeter to mol_liter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_cubiccentimeter to mol_liter") return Number.parseFloat(eval(num * thousand));
    else if (method === "mol_cubicmillimeter to mol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "kilomol_cubicmeter to mol_liter") return Number.parseFloat(eval(num * 1));
    else if (method === "kilomol_liter to mol_liter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_cubiccentimeter to mol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "kilomol_cubicmillimeter to mol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "millimol_cubicmeter to mol_liter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_liter to mol_liter") return Number.parseFloat(eval(num / thousand));
    else if (method === "millimol_cubiccentimeter to mol_liter") return Number.parseFloat(eval(num * 1));
    else if (method === "millimol_cubicmillimeter to mol_liter") return Number.parseFloat(eval(num * thousand));
    //#endregion

    //#region  for mol_cubiccentimeter
    else if (method === "mol_cubicmeter to mol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "mol_liter to mol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_cubicmillimeter to mol_cubiccentimeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_cubicmeter to mol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_liter to mol_cubiccentimeter") return Number.parseFloat(eval(num * 1));
    else if (method === "kilomol_cubiccentimeter to mol_cubiccentimeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_cubicmillimeter to mol_cubiccentimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "millimol_cubicmeter to mol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "millimol_liter to mol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_cubiccentimeter to mol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "millimol_cubicmillimeter to mol_cubiccentimeter") return Number.parseFloat(eval(num * 1));
    //#endregion

    //#region  for mol_cubicmillimeter
    else if (method === "mol_cubicmeter to mol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "mol_liter to mol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "mol_cubiccentimeter to mol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_cubicmeter to mol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "kilomol_liter to mol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_cubiccentimeter to mol_cubicmillimeter") return Number.parseFloat(eval(num * 1));
    else if (method === "kilomol_cubicmillimeter to mol_cubicmillimeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "millimol_cubicmeter to mol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 4)));
    else if (method === "millimol_liter to mol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "millimol_cubiccentimeter to mol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_cubicmillimeter to mol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    //#endregion

    //#region  for kilomol_cubicmeter
    else if (method === "mol_cubicmeter to kilomol_cubicmeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_liter to kilomol_cubicmeter") return Number.parseFloat(eval(num));
    else if (method === "mol_cubiccentimeter to kilomol_cubicmeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "mol_cubicmillimeter to kilomol_cubicmeter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "kilomol_liter to kilomol_cubicmeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_cubiccentimeter to kilomol_cubicmeter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "kilomol_cubicmillimeter to kilomol_cubicmeter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "millimol_cubicmeter to kilomol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_liter to kilomol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 1)));
    else if (method === "millimol_cubiccentimeter to kilomol_cubicmeter") return Number.parseFloat(eval(num));
    else if (method === "millimol_cubicmillimeter to kilomol_cubicmeter") return Number.parseFloat(eval(num * thousand));
    //#endregion

    //#region  for kilomol_liter
    else if (method === "mol_cubicmeter to kilomol_liter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "mol_liter to kilomol_liter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_cubiccentimeter to kilomol_liter") return Number.parseFloat(eval(num));
    else if (method === "mol_cubicmillimeter to kilomol_liter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_cubicmeter to kilomol_liter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_cubiccentimeter to kilomol_liter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_cubicmillimeter to kilomol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "millimol_cubicmeter to kilomol_liter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "millimol_liter to kilomol_liter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_cubiccentimeter to kilomol_liter") return Number.parseFloat(eval(num / thousand));
    else if (method === "millimol_cubicmillimeter to kilomol_liter") return Number.parseFloat(eval(num));
    //#endregion

    //#region  for kilomol_cubiccentimeter
    else if (method === "mol_cubicmeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "mol_liter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "mol_cubiccentimeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_cubicmillimeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num));
    else if (method === "kilomol_cubicmeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "kilomol_liter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_cubicmillimeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "millimol_cubicmeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 4)));
    else if (method === "millimol_liter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "millimol_cubiccentimeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_cubicmillimeter to kilomol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    //#endregion

    //#region  for kilomol_cubicmillimeter
    else if (method === "mol_cubicmeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "mol_liter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "mol_cubiccentimeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_cubicmillimeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num));
    else if (method === "kilomol_cubicmeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "kilomol_liter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_cubiccentimeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "millimol_cubicmeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 4)));
    else if (method === "millimol_liter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "millimol_cubiccentimeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_cubicmillimeter to kilomol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    //#endregion

    //#region  for millimol_cubicmeter
    else if (method === "mol_cubicmeter to millimol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "mol_liter to millimol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "mol_cubiccentimeter to millimol_cubicmeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_cubicmillimeter to millimol_cubicmeter") return Number.parseFloat(eval(num));
    else if (method === "kilomol_cubicmeter to millimol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "kilomol_liter to millimol_cubicmeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_cubicmillimeter to millimol_cubicmeter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_cubiccentimeter to millimol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 4)));
    else if (method === "millimol_liter to millimol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "millimol_cubiccentimeter to millimol_cubicmeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_cubicmillimeter to millimol_cubicmeter") return Number.parseFloat(eval(num / thousand));
    //#endregion

    //#region  for millimol_liter
    else if (method === "mol_cubicmeter to millimol_liter") return Number.parseFloat(eval(num));
    else if (method === "mol_liter to millimol_liter") return Number.parseFloat(eval(num * thousand));
    else if (method === "mol_cubiccentimeter to millimol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "mol_cubicmillimeter to millimol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "kilomol_cubicmeter to millimol_liter") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilomol_liter to millimol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "kilomol_cubicmillimeter to millimol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "kilomol_cubiccentimeter to millimol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "millimol_cubicmeter to millimol_liter") return Number.parseFloat(eval(num / thousand));
    else if (method === "millimol_cubiccentimeter to millimol_liter") return Number.parseFloat(eval(num * thousand));
    else if (method === "millimol_cubicmillimeter to millimol_liter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    //#endregion

    //#region  for millimol_cubiccentimeter
    else if (method === "mol_cubicmeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_liter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * 1));
    else if (method === "mol_cubiccentimeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 1)));
    else if (method === "mol_cubicmillimeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "kilomol_cubicmeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * 1));
    else if (method === "kilomol_liter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 1)));
    else if (method === "kilomol_cubiccentimeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "kilomol_cubicmillimeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "millimol_cubicmeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_liter to millimol_cubiccentimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "millimol_cubicmillimeter to millimol_cubiccentimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 1)));
    //#endregion

    //#region  for millimol_cubicmillimeter
    else if (method === "mol_cubicmeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "mol_liter to millimol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "mol_cubiccentimeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num));
    else if (method === "mol_cubicmillimeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 1)));
    else if (method === "kilomol_cubicmeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    else if (method === "kilomol_liter to millimol_cubicmillimeter") return Number.parseFloat(eval(num));
    else if (method === "kilomol_cubiccentimeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 1)));
    else if (method === "kilomol_cubicmillimeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "millimol_cubicmeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num /  Math.pow(thousand, 3)));
    else if (method === "millimol_liter to millimol_cubicmillimeter") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "millimol_cubiccentimeter to millimol_cubicmillimeter") return Number.parseFloat(eval(num / thousand));
    //#endregion

}