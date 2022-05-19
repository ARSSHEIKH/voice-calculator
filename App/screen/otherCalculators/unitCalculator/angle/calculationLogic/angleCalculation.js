const fixedValue = 4;

export const degreeCalculation = (method, num) => {
    if (method === "radian to degree") return (num * 180 / Math.PI).toFixed(fixedValue)
    else if (method === "gradian to degree") return (num * 180 / 200).toFixed(fixedValue)
    else if (method === "gon to degree") return (num * 0.9).toFixed(fixedValue)
    else if (method === "minute to degree") return (num / 60).toFixed(fixedValue)
    else if (method === "second to degree") return (num / 3600).toFixed(fixedValue)
    else if (method === "sign to degree") return (num * 30).toFixed(fixedValue)
    else if (method === "mil to degree") return (num * 0.05625).toFixed(fixedValue)
    else if (method === "revolution to degree") return (num * 360).toFixed(fixedValue)
    else if (method === "circle to degree") return (num * 360).toFixed(fixedValue)
    else if (method === "turn to degree") return (num * 360).toFixed(fixedValue)
    else if (method === "quadrant to degree") return (num * 90).toFixed(fixedValue)
    else if (method === "right angle to degree") return (num * 90).toFixed(fixedValue)
    else if (method === "sextant to degree") return (num * 60).toFixed(fixedValue)
}
export const radianCalculation = (method, num) => {
    if (method === "degree to radian") return (num * Math.PI / 180).toFixed(fixedValue)
    else if (method === "gradian to radian") return (num * Math.PI / 200).toFixed(fixedValue)
    else if (method === "gon to radian") return (num * 0.0157079633).toFixed(fixedValue)
    else if (method === "minute to radian") return (num * (Math.PI / (60 * 180))).toFixed(fixedValue)
    else if (method === "second to radian") return (num * (Math.PI / (180 * 3600))).toFixed(fixedValue)
    else if (method === "sign to radian") return (num * 0.5235987756).toFixed(fixedValue)
    else if (method === "mil to radian") return (num * 0.0009817477).toFixed(fixedValue)
    else if (method === "revolution to radian") return (num * 6.2831853072).toFixed(fixedValue)
    else if (method === "circle to radian") return (num * 6.2831853072).toFixed(fixedValue)
    else if (method === "turn to radian") return (num * 6.2831853072).toFixed(fixedValue)
    else if (method === "quadrant to radian") return (num * 1.5707963268).toFixed(fixedValue)
    else if (method === "right angle to radian") return (num * 1.5707963268).toFixed(fixedValue)
    else if (method === "sextant to radian") return (num * 1.0471975512).toFixed(fixedValue)
}
export const gradianCalculation = (method, num) => {
    if (method === "degree to gradian") return (num * 200 / 180).toFixed(fixedValue)
    else if (method === "radian to gradian") return (num * 200 / Math.PI).toFixed(fixedValue)
    else if (method === "gon to gradian") return (num * 1).toFixed(fixedValue)
    else if (method === "minute to gradian") return (num / 54).toFixed(fixedValue)
    else if (method === "second to gradian") return (num / 3240).toFixed(fixedValue)
    else if (method === "sign to gradian") return (num * 33.3333333333).toFixed(fixedValue)
    else if (method === "mil to gradian") return (num * 0.0625).toFixed(fixedValue)
    else if (method === "revolution to gradian") return (num * 400).toFixed(fixedValue)
    else if (method === "circle to gradian") return (num * 400).toFixed(fixedValue)
    else if (method === "turn to gradian") return (num * 400).toFixed(fixedValue)
    else if (method === "quadrant to gradian") return (num * 100).toFixed(fixedValue)
    else if (method === "right angle to gradian") return (num * 100).toFixed(fixedValue)
    else if (method === "sextant to gradian") return (num * 66.666666667).toFixed(fixedValue)
}
export const gonCalculation = (method, num) => {
    if (method === "degree to gon") return (num * 1.1111111111).toFixed(fixedValue)
    else if (method === "radian to gon") return (num * 63.661977237).toFixed(fixedValue)
    else if (method === "gradian to gon") return (num * 1).toFixed(fixedValue)
    else if (method === "minute to gon") return (num / 54).toFixed(fixedValue)
    else if (method === "second to gon") return (num / 3240).toFixed(fixedValue)
    else if (method === "sign to gon") return (num * 33.3333333333).toFixed(fixedValue)
    else if (method === "mil to gon") return (num * 0.0625).toFixed(fixedValue)
    else if (method === "revolution to gon") return (num * 400).toFixed(fixedValue)
    else if (method === "circle to gon") return (num * 400).toFixed(fixedValue)
    else if (method === "turn to gon") return (num * 400).toFixed(fixedValue)
    else if (method === "quadrant to gon") return (num * 100).toFixed(fixedValue)
    else if (method === "right angle to gon") return (num * 100).toFixed(fixedValue)
    else if (method === "sextant to gon") return (num * 66.666666667).toFixed(fixedValue)
}
export const minuteCalculation = (method, num) => {
    if (method === "degree to minute") return (num * 60).toFixed(fixedValue)
    else if (method === "radian to minute") return (num * ((60 * 180) / Math.PI)).toFixed(fixedValue)
    else if (method === "gradian to minute") return (num * 54).toFixed(fixedValue)
    else if (method === "gon to minute") return (num * 54).toFixed(fixedValue)
    else if (method === "second to minute") return (num / 60).toFixed(fixedValue)
    else if (method === "sign to minute") return (num * 1800).toFixed(fixedValue)
    else if (method === "mil to minute") return (num * 3.375).toFixed(fixedValue)
    else if (method === "revolution to minute") return (num * 21600).toFixed(fixedValue)
    else if (method === "circle to minute") return (num * 21600).toFixed(fixedValue)
    else if (method === "turn to minute") return (num * 21600).toFixed(fixedValue)
    else if (method === "quadrant to minute") return (num * 5400).toFixed(fixedValue)
    else if (method === "right angle to minute") return (num * 5400).toFixed(fixedValue)
    else if (method === "sextant to minute") return (num * 3600).toFixed(fixedValue)
}
export const secondCalculation = (method, num) => {
    if (method === "degree to second") return (num * 3600).toFixed(fixedValue)
    else if (method === "radian to second") return (num * ((3600 * 180) / Math.PI)).toFixed(fixedValue)
    else if (method === "gradian to second") return (num * 3240).toFixed(fixedValue)
    else if (method === "gon to second") return (num * 3240).toFixed(fixedValue)
    else if (method === "minute to second") return (num * 60).toFixed(fixedValue)
    else if (method === "sign to second") return (num * 108000).toFixed(fixedValue)
    else if (method === "mil to second") return (num * 202.5).toFixed(fixedValue)
    else if (method === "revolution to second") return (num * 1296000).toFixed(fixedValue)
    else if (method === "circle to second") return (num * 1296000).toFixed(fixedValue)
    else if (method === "turn to second") return (num * 1296000).toFixed(fixedValue)
    else if (method === "quadrant to second") return (num * 324000).toFixed(fixedValue)
    else if (method === "right angle to second") return (num * 324000).toFixed(fixedValue)
    else if (method === "sextant to second") return (num * 216000).toFixed(fixedValue)
}
export const signCalculation = (method, num) => {
    if (method === "degree to sign") return (num * 0.0333333333).toFixed(fixedValue)
    else if (method === "radian to sign") return (num * 1.9098593171).toFixed(fixedValue)
    else if (method === "gradian to sign") return (num * 0.03).toFixed(fixedValue)
    else if (method === "gon to sign") return (num * 0.03).toFixed(fixedValue)
    else if (method === "minute to sign") return (num * 0.0005555556).toFixed(fixedValue)
    else if (method === "second to sign") return (num * 0.0000092593).toFixed(fixedValue)
    else if (method === "mil to sign") return (num * 0.001875).toFixed(fixedValue)
    else if (method === "revolution to sign") return (num * 12).toFixed(fixedValue)
    else if (method === "circle to sign") return (num * 12).toFixed(fixedValue)
    else if (method === "turn to sign") return (num * 12).toFixed(fixedValue)
    else if (method === "quadrant to sign") return (num * 3).toFixed(fixedValue)
    else if (method === "right angle to sign") return (num * 3).toFixed(fixedValue)
    else if (method === "sextant to sign") return (num * 2).toFixed(fixedValue)
}
export const milCalculation = (method, num) => {
    if (method === "degree to mil") return (num * 17.777777778).toFixed(fixedValue)
    else if (method === "radian to mil") return (num * 1018.5916358).toFixed(fixedValue)
    else if (method === "gradian to mil") return (num * 16).toFixed(fixedValue)
    else if (method === "gon to mil") return (num * 16).toFixed(fixedValue)
    else if (method === "minute to mil") return (num * 0.2962962963).toFixed(fixedValue)
    else if (method === "second to mil") return (num * 0.0049382716).toFixed(fixedValue)
    else if (method === "sign to mil") return (num * 533.33333333).toFixed(fixedValue)
    else if (method === "revolution to mil") return (num * 6400).toFixed(fixedValue)
    else if (method === "circle to mil") return (num * 6400).toFixed(fixedValue)
    else if (method === "turn to mil") return (num * 6400).toFixed(fixedValue)
    else if (method === "quadrant to mil") return (num * 1600).toFixed(fixedValue)
    else if (method === "right angle to mil") return (num * 1600).toFixed(fixedValue)
    else if (method === "sextant to mil") return (num * 1066.6666667).toFixed(fixedValue)
}
export const revolutionCalculation = (method, num) => {
    if (method === "degree to revolution") return (num * 0.0027777778).toFixed(fixedValue)
    else if (method === "radian to revolution") return (num * 0.1591549431).toFixed(fixedValue)
    else if (method === "gradian to revolution") return (num * 0.0025).toFixed(fixedValue)
    else if (method === "gon to revolution") return (num * 0.0025).toFixed(fixedValue)
    else if (method === "minute to revolution") return (num * 0.0000462963).toFixed(fixedValue)
    else if (method === "second to revolution") return (eval(num * 7.7160493827161E-7)).toFixed(fixedValue)
    else if (method === "sign to revolution") return (num * 0.0833333333).toFixed(fixedValue)
    else if (method === "mil to revolution") return (num * 0.00015625).toFixed(fixedValue)
    else if (method === "circle to revolution") return (num * 1).toFixed(fixedValue)
    else if (method === "turn to revolution") return (num * 1).toFixed(fixedValue)
    else if (method === "quadrant to revolution") return (num * 0.25).toFixed(fixedValue)
    else if (method === "right angle to revolution") return (num * 0.25).toFixed(fixedValue)
    else if (method === "sextant to revolution") return (num * 0.1666666667).toFixed(fixedValue)
}
export const circleCalculation = (method, num) => {
    if (method === "degree to circle") return (num * 0.0027777778).toFixed(fixedValue)
    else if (method === "radian to circle") return (num * 0.1591549431).toFixed(fixedValue)
    else if (method === "gradian to circle") return (num * 0.0025).toFixed(fixedValue)
    else if (method === "gon to circle") return (num * 0.0025).toFixed(fixedValue)
    else if (method === "minute to circle") return (num * 0.0000462963).toFixed(fixedValue)
    else if (method === "second to circle") return (eval(num * 7.716049382E-7)).toFixed(fixedValue)
    else if (method === "sign to circle") return (num * 0.0833333333).toFixed(fixedValue)
    else if (method === "mil to circle") return (num * 0.00015625).toFixed(fixedValue)
    else if (method === "revolution to circle") return (num * 1).toFixed(fixedValue)
    else if (method === "turn to circle") return (num * 1).toFixed(fixedValue)
    else if (method === "quadrant to circle") return (num * 0.25).toFixed(fixedValue)
    else if (method === "right angle to circle") return (num * 0.25).toFixed(fixedValue)
    else if (method === "sextant to circle") return (num * 0.1666666667).toFixed(fixedValue)
}
export const turnCalculation = (method, num) => {
    if (method === "degree to turn") return (num * 0.0027777778).toFixed(fixedValue)
    else if (method === "radian to turn") return (num * 0.1591549431).toFixed(fixedValue)
    else if (method === "gradian to turn") return (num * 0.0025).toFixed(fixedValue)
    else if (method === "gon to turn") return (num * 0.0025).toFixed(fixedValue)
    else if (method === "minute to turn") return (num * 0.0000462963).toFixed(fixedValue)
    else if (method === "second to turn") return (eval(num * 7.716049382E-7)).toFixed(fixedValue)
    else if (method === "sign to turn") return (num * 0.0833333333).toFixed(fixedValue)
    else if (method === "mil to turn") return (num * 0.00015625).toFixed(fixedValue)
    else if (method === "revolution to turn") return (num * 1).toFixed(fixedValue)
    else if (method === "circle to turn") return (num * 1).toFixed(fixedValue)
    else if (method === "quadrant to turn") return (num * 0.25).toFixed(fixedValue)
    else if (method === "right angle to turn") return (num * 0.25).toFixed(fixedValue)
    else if (method === "sextant to turn") return (num * 0.1666666667).toFixed(fixedValue)
}
export const quadrantCalculation = (method, num) => {
    if (method === "degree to quadrant") return (num * 0.0111111111).toFixed(fixedValue)
    else if (method === "radian to quadrant") return (num * 0.6366197724).toFixed(fixedValue)
    else if (method === "gradian to quadrant") return (num * 0.01).toFixed(fixedValue)
    else if (method === "gon to quadrant") return (num * 0.01).toFixed(fixedValue)
    else if (method === "minute to quadrant") return (num * 0.0001851852).toFixed(fixedValue)
    else if (method === "second to quadrant") return (num * 0.0000030864).toFixed(fixedValue)
    else if (method === "sign to quadrant") return (num * 0.3333333333).toFixed(fixedValue)
    else if (method === "mil to quadrant") return (num * 0.000625).toFixed(fixedValue)
    else if (method === "revolution to quadrant") return (num * 4).toFixed(fixedValue)
    else if (method === "circle to quadrant") return (num * 4).toFixed(fixedValue)
    else if (method === "turn to quadrant") return (num * 4).toFixed(fixedValue)
    else if (method === "right angle to quadrant") return (num * 1).toFixed(fixedValue)
    else if (method === "sextant to quadrant") return (num * 0.6666666667).toFixed(fixedValue)
}
export const right_angleCalculation = (method, num) => {
    if (method === "degree to right angle") return (num * 0.0111111111).toFixed(fixedValue)
    else if (method === "radian to right angle") return (num * 0.6366197724).toFixed(fixedValue)
    else if (method === "gradian to right angle") return (num * 0.01).toFixed(fixedValue)
    else if (method === "gon to right angle") return (num * 0.01).toFixed(fixedValue)
    else if (method === "minute to right angle") return (num * 0.0001851852).toFixed(fixedValue)
    else if (method === "second to right angle") return (num * 0.0000030864).toFixed(fixedValue)
    else if (method === "sign to right angle") return (num * 0.3333333333).toFixed(fixedValue)
    else if (method === "mil to right angle") return (num * 0.000625).toFixed(fixedValue)
    else if (method === "revolution to right angle") return (num * 4).toFixed(fixedValue)
    else if (method === "circle to right angle") return (num * 4).toFixed(fixedValue)
    else if (method === "turn to right angle") return (num * 4).toFixed(fixedValue)
    else if (method === "quadrant to right angle") return (num * 1).toFixed(fixedValue)
    else if (method === "sextant to right angle") return (num * 0.1666666667).toFixed(fixedValue)
}
export const sextantCalculation = (method, num) => {
    if (method === "degree to sextant") return (num * 0.0166666667).toFixed(fixedValue);
    else if (method === "radian to sextant") return (num * 0.9549296586).toFixed(fixedValue);
    else if (method === "gradian to sextant") return (num * 0.015).toFixed(fixedValue);
    else if (method === "gon to sextant") return (num * 0.015).toFixed(fixedValue);
    else if (method === "minute to sextant") return (num * 0.0002777778).toFixed(fixedValue);
    else if (method === "second to sextant") return (num * 0.0000046296).toFixed(fixedValue);
    else if (method === "sign to sextant") return (num * 0.5).toFixed(fixedValue);
    else if (method === "mil to sextant") return (num * 0.000625).toFixed(fixedValue);
    else if (method === "revolution to sextant") return (num * 6).toFixed(fixedValue);
    else if (method === "circle to sextant") return (num * 6).toFixed(fixedValue);
    else if (method === "turn to sextant") return (num * 6).toFixed(fixedValue);
    else if (method === "quadrant to sextant") return (num * 1.5).toFixed(fixedValue);
    else if (method === "right angle to sextant") return (num * 1.5).toFixed(fixedValue);
}
// Number.parseFloat((num * 0.0000046296)).toExponential(fixedValue);