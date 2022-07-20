import { frequency } from 'units-converter';
export const frequencyCalculation = (from, to, num) => frequency(num).from(from).to(to).value;