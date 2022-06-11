import Convert from 'unit-converter-pro';
const force = new Convert.Force();
export const forceCalculation = (from, to, num) => {
   return Number.parseFloat(force[from](num)[to]()).toPrecision(4)
};
