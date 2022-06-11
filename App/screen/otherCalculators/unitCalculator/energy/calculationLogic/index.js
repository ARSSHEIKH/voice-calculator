import Convert from 'unit-converter-pro';
const energy = new Convert.Energy();
export const energyCalculation = (from, to, num) => energy[from](num)[to]();
