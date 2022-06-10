
// import { voltage } from 'units-converter';
// import convert from "convert-units"


const fixedValue = 2;
let thousand = 1000;

export const conductivityCalculation = (method, num) => {
    //#region  for simens_per_meter
    if (method === "picosimens_per_meter to simens_per_meter") return Number.parseFloat(eval(num / Math.pow(thousand, 4)));
    else if (method === "mho_per_meter to simens_per_meter") return Number.parseFloat(eval(num));
    else if (method === "mho_per_centimeter to simens_per_meter") return Number.parseFloat(eval(num * 100));
    else if (method === "abmho_per_meter to simens_per_meter") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "abmho_per_centimeter to simens_per_meter") return Number.parseFloat(eval(num * (Math.pow(thousand, 4) / 10)));
    else if (method === "statmho_per_meter to simens_per_meter") return Number.parseFloat(eval(num * 1.112653456E-12));
    else if (method === "statmho_per_centimeter to simens_per_meter") return Number.parseFloat(eval(num * 1.112653456E-10));
    //#endregion

    //#region  for picosimens_per_meter
    if (method === "simens_per_meter to picosimens_per_meter") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "mho_per_meter to picosimens_per_meter") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "mho_per_centimeter to picosimens_per_meter") return Number.parseFloat(eval(num * (Math.pow(thousand, 5) / 10)));
    else if (method === "abmho_per_meter to picosimens_per_meter") return Number.parseFloat(eval(num * 1.E+21));
    else if (method === "abmho_per_centimeter to picosimens_per_meter") return Number.parseFloat(eval(num * 1.E+23));
    else if (method === "statmho_per_meter to picosimens_per_meter") return Number.parseFloat(eval(num * 1.112653456));
    else if (method === "statmho_per_centimeter to picosimens_per_meter") return Number.parseFloat(eval(num * 111.2653456));
    //#endregion

    //#region  for mho_per_meter
    if (method === "simens_per_meter to mho_per_meter") return Number.parseFloat(eval(num * 1));
    else if (method === "picosimens_per_meter to mho_per_meter") return Number.parseFloat(eval(num * 1.E-12));
    else if (method === "mho_per_centimeter to mho_per_meter") return Number.parseFloat(eval(num * 100));
    else if (method === "abmho_per_meter to mho_per_meter") return Number.parseFloat(eval(num * 1000000000));
    else if (method === "abmho_per_centimeter to mho_per_meter") return Number.parseFloat(eval(num * 100000000000));
    else if (method === "statmho_per_meter to mho_per_meter") return Number.parseFloat(eval(num * 1.112653456E-12));
    else if (method === "statmho_per_centimeter to mho_per_meter") return Number.parseFloat(eval(num * 1.112653456E-10));
    //#endregion

    //#region  for mho_per_centimeter
    if (method === "simens_per_meter to mho_per_centimeter") return Number.parseFloat(eval(num * 0.01));
    else if (method === "picosimens_per_meter to mho_per_centimeter") return Number.parseFloat(eval(num * 1.E-14));
    else if (method === "mho_per_meter to mho_per_centimeter") return Number.parseFloat(eval(num * 0.01));
    else if (method === "abmho_per_meter to mho_per_centimeter") return Number.parseFloat(eval(num * 10000000));
    else if (method === "abmho_per_centimeter to mho_per_centimeter") return Number.parseFloat(eval(num * 1000000000));
    else if (method === "statmho_per_meter to mho_per_centimeter") return Number.parseFloat(eval(num * 1.112653456E-14));
    else if (method === "statmho_per_centimeter to mho_per_centimeter") return Number.parseFloat(eval(num * 1.112653456E-12));
    //#endregion

    //#region  for abmho_per_meter
    if (method === "simens_per_meter to abmho_per_meter") return Number.parseFloat(eval(num * 1.E-9));
    else if (method === "picosimens_per_meter to abmho_per_meter") return Number.parseFloat(eval(num * 1.E-21));
    else if (method === "mho_per_meter to abmho_per_meter") return Number.parseFloat(eval(num * 1.E-9));
    else if (method === "mho_per_centimeter to abmho_per_meter") return Number.parseFloat(eval(num * 1.E-7));
    else if (method === "abmho_per_centimeter to abmho_per_meter") return Number.parseFloat(eval(num * 100));
    else if (method === "statmho_per_meter to abmho_per_meter") return Number.parseFloat(eval(num * 1.112653456E-21));
    else if (method === "statmho_per_centimeter to abmho_per_meter") return Number.parseFloat(eval(num * 1.112653456E-19));
    //#endregion

    //#region  for abmho_per_centimeter
    if (method === "simens_per_meter to abmho_per_centimeter") return Number.parseFloat(eval(num * 1.E-11));
    else if (method === "picosimens_per_meter to abmho_per_centimeter") return Number.parseFloat(eval(num * 1.E-23));
    else if (method === "mho_per_meter to abmho_per_centimeter") return Number.parseFloat(eval(num * 1.E-11));
    else if (method === "mho_per_centimeter to abmho_per_centimeter") return Number.parseFloat(eval(num * 9.999999999E-10));
    else if (method === "abmho_per_meter to abmho_per_centimeter") return Number.parseFloat(eval(num / 100));
    else if (method === "statmho_per_meter to abmho_per_centimeter") return Number.parseFloat(eval(num * 1.112653456E-23));
    else if (method === "statmho_per_centimeter to abmho_per_centimeter") return Number.parseFloat(eval(num * 1.112653456E-21));
    //#endregion

    //#region  for statmho_per_meter
    if (method === "simens_per_meter to statmho_per_meter") return Number.parseFloat(eval(num * 898752432400));
    else if (method === "picosimens_per_meter to statmho_per_meter") return Number.parseFloat(eval(num * 0.8987524324));
    else if (method === "mho_per_meter to statmho_per_meter") return Number.parseFloat(eval(num * 898752432400));
    else if (method === "mho_per_centimeter to statmho_per_meter") return Number.parseFloat(eval(num * 89875243240000));
    else if (method === "abmho_per_meter to statmho_per_meter") return Number.parseFloat(eval(num * 898752432400000000000));
    else if (method === "abmho_per_centimeter to statmho_per_meter") return Number.parseFloat(eval(num * 8.987524324E+22));
    else if (method === "statmho_per_centimeter to statmho_per_meter") return Number.parseFloat(eval(num * 100));
    //#endregion

    //#region  for statmho_per_centimeter
    if (method === "simens_per_meter to statmho_per_centimeter") return Number.parseFloat(eval(num * 8987524324));
    else if (method === "picosimens_per_meter to statmho_per_centimeter") return Number.parseFloat(eval(num * 0.0089875243));
    else if (method === "mho_per_meter to statmho_per_centimeter") return Number.parseFloat(eval(num * 8987524324));
    else if (method === "mho_per_centimeter to statmho_per_centimeter") return Number.parseFloat(eval(num * 898752432400));
    else if (method === "abmho_per_meter to statmho_per_centimeter") return Number.parseFloat(eval(num * 8987524323999999000));
    else if (method === "abmho_per_centimeter to statmho_per_centimeter") return Number.parseFloat(eval(num * 898752432400000100000));
    else if (method === "statmho_per_meter to statmho_per_centimeter") return Number.parseFloat(eval(num / 100));
    //#endregion
}