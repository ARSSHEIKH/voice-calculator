import Convert from 'unit-converter-pro';
const density = new Convert.Density();
export const densityCalculation = (from, to, num) => density[from](num)[to]();
