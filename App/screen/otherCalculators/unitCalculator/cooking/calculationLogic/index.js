export const cookingCalculation = (method, num) => {
    //#region  for cup_euro
    if (method === "cup_us to cup_euro") return Number.parseFloat(eval(num / 1.0144));
    else if (method === "fluid_ounce to cup_euro") return Number.parseFloat(eval(num / 8.1154));
    else if (method === "gram_euro to cup_euro") return Number.parseFloat(eval(num / 240));
    else if (method === "kg_euro to cup_euro") return Number.parseFloat(eval(num * 0.24));
    else if (method === "l_euro to cup_euro") return Number.parseFloat(eval(num * 0.24));
    else if (method === "ml_euro to cup_euro") return Number.parseFloat(eval(num / 240));
    else if (method === "ounce to cup_euro") return Number.parseFloat(eval(num / 8.4658));
    else if (method === "pint to cup_euro") return Number.parseFloat(eval(num * 1.9716));
    else if (method === "pound to cup_euro") return Number.parseFloat(eval(num * 1.89));
    else if (method === "table_spoon_euro to cup_euro") return Number.parseFloat(eval(num / 16));
    else if (method === "table_spoon_us to cup_euro") return Number.parseFloat(eval(num / 16.2307));
    else if (method === "tea_spoon_euro to cup_euro") return Number.parseFloat(eval(num / 48));
    else if (method === "tea_spoon_us to cup_euro") return Number.parseFloat(eval(num / 48.6922));
    //#endregion

    //#region  for cup_us
    if (method === "cup_euro to cup_us") return Number.parseFloat(eval(num * 1.0144));
    else if (method === "fluid_ounce to cup_us") return Number.parseFloat(eval(num / 8));
    else if (method === "gram_euro to cup_us") return Number.parseFloat(eval(num * 0.0042));
    else if (method === "kg_euro to cup_us") return Number.parseFloat(eval(num * 4.2268));
    else if (method === "l_euro to cup_us") return Number.parseFloat(eval(num * 4.2268));
    else if (method === "ml_euro to cup_us") return Number.parseFloat(eval(num * 0.0042));
    else if (method === "ounce to cup_us") return Number.parseFloat(eval(num / 8.3454));
    else if (method === "pint to cup_us") return Number.parseFloat(eval(num * 1));
    else if (method === "pound to cup_us") return Number.parseFloat(eval(num * 1.9172));
    else if (method === "table_spoon_euro to cup_us") return Number.parseFloat(eval(num / 15.7725));
    else if (method === "table_spoon_us to cup_us") return Number.parseFloat(eval(num / 16));
    else if (method === "tea_spoon_euro to cup_us") return Number.parseFloat(eval(num * 0.0211));
    else if (method === "tea_spoon_us to cup_us") return Number.parseFloat(eval(num / 48));
    //#endregion

    //#region  for fluid_ounce
    else if (method === "cup_euro to fluid_ounce") return Number.parseFloat(eval(num * 8.1154));
    else if (method === "cup_us to fluid_ounce") return Number.parseFloat(eval(num * 8));
    else if (method === "gram_euro to fluid_ounce") return Number.parseFloat(eval(num / 29.5735));
    else if (method === "kg_euro to fluid_ounce") return Number.parseFloat(eval(num * 33.814));
    else if (method === "l_euro to fluid_ounce") return Number.parseFloat(eval(num * 33.814));
    else if (method === "ml_euro to fluid_ounce") return Number.parseFloat(eval(num / 29.5735));
    else if (method === "ounce to fluid_ounce") return Number.parseFloat(eval(num / 1.0432));
    else if (method === "pint to fluid_ounce") return Number.parseFloat(eval(num * 16));
    else if (method === "pound to fluid_ounce") return Number.parseFloat(eval(num * 15.3378));
    else if (method === "table_spoon_us to fluid_ounce") return Number.parseFloat(eval(num / 2));
    else if (method === "table_spoon_euro to fluid_ounce") return Number.parseFloat(eval(num / 1.9716));
    else if (method === "tea_spoon_us to fluid_ounce") return Number.parseFloat(eval(num / 6));
    else if (method === "tea_spoon_euro to fluid_ounce") return Number.parseFloat(eval(num / 5.9147));
    //#endregion

    //#region  for gram_euro
    else if (method === "cup_euro to gram_euro") return Number.parseFloat(eval(num * 240));
    else if (method === "cup_us to gram_euro") return Number.parseFloat(eval(num * 236.5882));
    else if (method === "fluid_ounce to gram_euro") return Number.parseFloat(eval(num * 29.5735));
    else if (method === "kg_euro to gram_euro") return Number.parseFloat(eval(num * 1000));
    else if (method === "l_euro to gram_euro") return Number.parseFloat(eval(num * 1000));
    else if (method === "ml_euro to gram_euro") return Number.parseFloat(eval(num * 1));
    else if (method === "gram_euro to ml_euro") return Number.parseFloat(eval(num * 1));
    else if (method === "ounce to gram_euro") return Number.parseFloat(eval(num * 28.3495));
    else if (method === "pint to gram_euro") return Number.parseFloat(eval(num * 473.1765));
    else if (method === "pound to gram_euro") return Number.parseFloat(eval(num * 453.5924));
    else if (method === "table_spoon_us to gram_euro") return Number.parseFloat(eval(num * 14.7868));
    else if (method === "table_spoon_euro to gram_euro") return Number.parseFloat(eval(num * 15));
    else if (method === "tea_spoon_euro to gram_euro") return Number.parseFloat(eval(num * 5));
    else if (method === "tea_spoon_us to gram_euro") return Number.parseFloat(eval(num * 4.9289));
    //#endregion

    //#region  for kg_euro
    else if (method === "cup_euro to kg_euro") return Number.parseFloat(eval(num * 0.24));
    else if (method === "cup_us to kg_euro") return Number.parseFloat(eval(num * 0.2366));
    else if (method === "fluid_ounce to kg_euro") return Number.parseFloat(eval(num / 33.814));
    else if (method === "gram_euro to kg_euro") return Number.parseFloat(eval(num / 1000));
    else if (method === "l_euro to kg_euro") return Number.parseFloat(eval(num * 1));
    else if (method === "kg_euro to l_euro") return Number.parseFloat(eval(num * 1));
    else if (method === "ml_euro to kg_euro") return Number.parseFloat(eval(num / 1000));
    else if (method === "ounce to kg_euro") return Number.parseFloat(eval(num / 35.274));
    else if (method === "pint to kg_euro") return Number.parseFloat(eval(num / 2.1134));
    else if (method === "pound to kg_euro") return Number.parseFloat(eval(num / 2.2046));
    else if (method === "table_spoon_euro to kg_euro") return Number.parseFloat(eval(num * 0.015));
    else if (method === "table_spoon_us to kg_euro") return Number.parseFloat(eval(num * 0.0148));
    else if (method === "tea_spoon_euro to kg_euro") return Number.parseFloat(eval(num / 200));
    else if (method === "tea_spoon_us to kg_euro") return Number.parseFloat(eval(num / 202.8841));
    //#endregion

    //#region  for ounce
    else if (method === "cup_euro to ounce") return Number.parseFloat(eval(num * 8.4658));
    else if (method === "cup_us to ounce") return Number.parseFloat(eval(num * 8.3454));
    else if (method === "fluid_ounce to ounce") return Number.parseFloat(eval(num * 1.0432));
    else if (method === "gram_euro to ounce") return Number.parseFloat(eval(num * 0.0353));
    else if (method === "l_euro to ounce") return Number.parseFloat(eval(num * 35.274));
    else if (method === "kg_euro to ounce") return Number.parseFloat(eval(num * 35.274));
    else if (method === "ml_euro to ounce") return Number.parseFloat(eval(num * 0.0353));
    else if (method === "pint to ounce") return Number.parseFloat(eval(num * 16.6908));
    else if (method === "pound to ounce") return Number.parseFloat(eval(num * 16));
    else if (method === "table_spoon_euro to ounce") return Number.parseFloat(eval(num * 0.5291));
    else if (method === "table_spoon_us to ounce") return Number.parseFloat(eval(num * 0.5216));
    else if (method === "tea_spoon_euro to ounce") return Number.parseFloat(eval(num / 5.6699));
    else if (method === "tea_spoon_us to ounce") return Number.parseFloat(eval(num / 5.7517));
    //#endregion

    //#region  for pint
    else if (method === "cup_euro to pint") return Number.parseFloat(eval(num * 0.5072));
    else if (method === "cup_us to pint") return Number.parseFloat(eval(num * 0.5));
    else if (method === "fluid_ounce to pint") return Number.parseFloat(eval(num / 16));
    else if (method === "gram_euro to pint") return Number.parseFloat(eval(num * 0.0021));
    else if (method === "kg_euro to pint") return Number.parseFloat(eval(num * 2.1134));
    else if (method === "l_euro to pint") return Number.parseFloat(eval(num * 2.1134));
    else if (method === "ml_euro to pint") return Number.parseFloat(eval(num * 0.0021));
    else if (method === "ounce to pint") return Number.parseFloat(eval(num * 0.0599));
    else if (method === "pound to pint") return Number.parseFloat(eval(num * 0.9586));
    else if (method === "table_spoon_euro to pint") return Number.parseFloat(eval(num * 0.0317));
    else if (method === "table_spoon_us to pint") return Number.parseFloat(eval(num * 0.0312));
    else if (method === "tea_spoon_euro to pint") return Number.parseFloat(eval(num * 0.0106));
    else if (method === "tea_spoon_us to pint") return Number.parseFloat(eval(num * 0.0104));
    //#endregion

    //#region  for pound
    else if (method === "cup_euro to pound") return Number.parseFloat(eval(num * 8.1154));
    else if (method === "cup_us to pound") return Number.parseFloat(eval(num * 8));
    else if (method === "fluid_ounce to pound") return Number.parseFloat(eval(num / 15.3378));
    else if (method === "gram_euro to pound") return Number.parseFloat(eval(num * 0.0022));
    else if (method === "kg_euro to pound") return Number.parseFloat(eval(num * 2.2046));
    else if (method === "l_euro to pound") return Number.parseFloat(eval(num * 2.2046));
    else if (method === "ml_euro to pound") return Number.parseFloat(eval(num * 0.0022));
    else if (method === "ounce to pound") return Number.parseFloat(eval(num / 16));
    else if (method === "pint to pound") return Number.parseFloat(eval(num * 1.0432));
    else if (method === "table_spoon_euro to pound") return Number.parseFloat(eval(num * 0.0331));
    else if (method === "table_spoon_us to pound") return Number.parseFloat(eval(num * 0.0326));
    else if (method === "tea_spoon_euro to pound") return Number.parseFloat(eval(num * 0.011));
    else if (method === "tea_spoon_us to pound") return Number.parseFloat(eval(num * 0.0109));
    //#endregion
    
}