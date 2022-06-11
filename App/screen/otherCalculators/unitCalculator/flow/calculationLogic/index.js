import { volumeFlowRate } from 'units-converter';
export const flowCalculation = (from, to, num) => volumeFlowRate(num).from(from).to(to).value;