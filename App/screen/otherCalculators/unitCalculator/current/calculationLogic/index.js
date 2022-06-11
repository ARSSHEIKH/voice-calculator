import { current } from 'units-converter';
export const currentCalculation = (from, to, num) => current(num).from(from).to(to).value
