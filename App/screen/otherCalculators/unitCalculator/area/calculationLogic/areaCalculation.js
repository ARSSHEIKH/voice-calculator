const fixedValue = 4;

export const squarekilometer_Calculation = (method, num) => {
    if (method === "square_meter to square_kilometer") return eval(num / 1e-6).toFixed(fixedValue);
    else if (method === "square_hectometer to square_kilometer") return (num / 100).toFixed(fixedValue);
    else if (method === "square_dekameter to square_kilometer") return (num / 10000).toFixed(fixedValue);
    else if (method === "square_decimeter to square_kilometer") return eval(num / 1e+8).toFixed(fixedValue);
    else if (method === "square_centimeter to square_kilometer") return eval(num / 1e+10).toFixed(fixedValue);
    else if (method === "square_milimeter to square_kilometer") return eval(num / 1e+12).toFixed(fixedValue);
    else if (method === "square_micrometer to square_kilometer") return eval(num / 1e+18).toFixed(fixedValue);
    else if (method === "square_nanometer to square_kilometer") return eval(num * 1e-24).toFixed(fixedValue);

    else if (method === "hectare to square_kilometer") return eval(num / 100).toFixed(fixedValue);
    else if (method === "arc to square_kilometer") return eval(num / 247).toFixed(fixedValue);
    else if (method === "barn to square_kilometer") return eval(num * 1e-34).toFixed(fixedValue);
    else if (method === "square_mile to square_kilometer") return eval(num * 6.4516e-16).toFixed(fixedValue);
    else if (method === "square_mile_us to square_kilometer") return eval(num * 2.59).toFixed(fixedValue);
    else if (method === "square_yard to square_kilometer") return eval(num / 1.196e+6).toFixed(fixedValue);
    else if (method === "square_foot to square_kilometer") return eval(num  * 9.2903e-8).toFixed(fixedValue);
    else if (method === "square_foot_us to square_kilometer") return eval(num * 9.2903e-8).toFixed(fixedValue);
    else if (method === "square_inch to square_kilometer") return eval(num / 1.55e+9).toFixed(fixedValue);
    else if (method === "circular_inch to square_kilometer") return eval(num * 5.06707479e-10).toFixed(fixedValue);

}