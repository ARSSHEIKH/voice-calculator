const fixedValue = 2;

export const squarekilometer_Calculation = (method, num) => {
    if (method === "square_meter to square_kilometer") return Number.parseFloat(eval(num / 1e-6)).toExponential(fixedValue);
    else if (method === "square_hectometer to square_kilometer") return Number.parseFloat(num / 100).toExponential(fixedValue);
    else if (method === "square_dekameter to square_kilometer") return Number.parseFloat(num / 10000).toExponential(fixedValue);
    else if (method === "square_decimeter to square_kilometer") return Number.parseFloateval(num / 1e+8).toExponential(fixedValue);
    else if (method === "square_centimeter to square_kilometer") return Number.parseFloateval(num / 1e+10).toExponential(fixedValue);
    else if (method === "square_milimeter to square_kilometer") return Number.parseFloateval(num / 1e+12).toExponential(fixedValue);
    else if (method === "square_micrometer to square_kilometer") return Number.parseFloateval(num / 1e+18).toExponential(fixedValue);
    else if (method === "square_nanometer to square_kilometer") return Number.parseFloateval(num * 1e-24).toExponential(fixedValue);

    else if (method === "hectare to square_kilometer") return Number.parseFloat(eval(num / 100)).toExponential(fixedValue);
    else if (method === "arc to square_kilometer") return Number.parseFloat(eval(num / 247)).toExponential(fixedValue);
    else if (method === "barn to square_kilometer") return Number.parseFloat(eval(num * 1e-34)).toExponential(fixedValue);
    else if (method === "square_mile to square_kilometer") return Number.parseFloat(eval(num * 6.4516e-16)).toExponential(fixedValue);
    else if (method === "square_mile_us to square_kilometer") return Number.parseFloat(eval(num * 2.59)).toExponential(fixedValue);
    else if (method === "square_yard to square_kilometer") return Number.parseFloat(eval(num / 1.196e+6)).toExponential(fixedValue);
    else if (method === "square_foot to square_kilometer") return Number.parseFloat(eval(num  * 9.2903e-8)).toExponential(fixedValue);
    else if (method === "square_foot_us to square_kilometer") return Number.parseFloat(eval(num * 9.2903e-8)).toExponential(fixedValue);
    else if (method === "square_inch to square_kilometer") return Number.parseFloat(eval(num / 1.55e+9)).toExponential(fixedValue);
    else if (method === "circular_inch to square_kilometer") return Number.parseFloat(eval(num * 5.06707479e-10)).toExponential(fixedValue);
    else if (method === "township to square_kilometer") return Number.parseFloat(eval(num * 93.239571972)).toExponential(fixedValue);
    else if (method === "section to square_kilometer") return Number.parseFloat(eval(num * 2.5899881103)).toExponential(fixedValue);
    else if (method === "arce to square_kilometer") return Number.parseFloat(eval(num / 247)).toExponential(fixedValue);
    else if (method === "arce_us to square_kilometer") return Number.parseFloat(eval(num / 247)).toExponential(fixedValue);
    else if (method === "rood to square_kilometer") return Number.parseFloat(eval(num * 0.001)).toExponential(fixedValue);
    else if (method === "square_chain to square_kilometer") return Number.parseFloat(eval(num / 2471)).toExponential(fixedValue);
    else if (method === "square_rod to square_kilometer") return Number.parseFloat(eval(num / 39537)).toExponential(fixedValue);
    else if (method === "square_rod_us to square_kilometer") return Number.parseFloat(eval(num / 39537)).toExponential(fixedValue);
    else if (method === "square_perch to square_kilometer") return Number.parseFloat(eval(num * 39537)).toExponential(fixedValue);
    else if (method === "square_pole to square_kilometer") return Number.parseFloat(eval(num * 39537)).toExponential(fixedValue);
    else if (method === "square_mil to square_kilometer") return Number.parseFloat(eval(num * 6.4516e-16)).toExponential(fixedValue);
    else if (method === "circular_mil to square_kilometer") return Number.parseFloat(eval(num * 5.06707479e-16)).toExponential(fixedValue);
    else if (method === "homestead to square_kilometer") return Number.parseFloat(eval(num * 0.6475)).toExponential(fixedValue);
    else if (method === "sabin to square_kilometer") return Number.parseFloat(eval(num * 9.290303999e-8)).toExponential(fixedValue);
    else if (method === "arpent to square_kilometer") return Number.parseFloat(eval(num * 0.0040412822)).toExponential(fixedValue);
    else if (method === "cuerda to square_kilometer") return Number.parseFloat(eval(num * 9.2903e-8)).toExponential(fixedValue);
    else if (method === "plaza to square_kilometer") return Number.parseFloat(eval(num * 0.0064)).toExponential(fixedValue);
    else if (method === "varas_castellanas_cuad to square_kilometer") return Number.parseFloat(eval(num * 6.987369999e-7)).toExponential(fixedValue);
    else if (method === "varas_conuqueras_cuad to square_kilometer") return Number.parseFloat(eval(num * 0.0039303956)).toExponential(fixedValue);
    else if (method === "electron_cross_section to square_kilometer") return Number.parseFloat(eval(num * 6.652461599e-35)).toExponential(fixedValue);

}