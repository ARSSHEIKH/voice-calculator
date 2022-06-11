export const conductanceCalculation = (method, num) => {

    let perSiemens = 1000;
    let statMho = 899;
    let quantizedHallConductance = 25812.805627;

    //#region  for siemens
    if (method === "mega_siemens to siemens") return Number.parseFloat(eval(num * perSiemens));
    else if (method === "kilo_siemens to siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 2))));
    else if (method === "milli_siemens to siemens") return Number.parseFloat(eval(num / perSiemens));
    else if (method === "micro_siemens to siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "ampere_volt to siemens") return Number.parseFloat(eval(num * 1));
    else if (method === "mho to siemens") return Number.parseFloat(eval(num * 1));
    else if (method === "gem_mho to siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "mirco_mho to siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "ab_mho to siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 3))));
    else if (method === "stat_mho to siemens") return Number.parseFloat(eval(num * 1.112347052E-12));
    else if (method === "quantized_hall_conductance to siemens") return Number.parseFloat(eval(num * 0.0000387405));
    //#endregion

    //#region  for mega_siemens
    if (method === "siemens to mega_siemens") return Number.parseFloat(eval(num / Math.pow(perSiemens, 2)));
    else if (method === "kilo_siemens to mega_siemens") return Number.parseFloat(eval(num / perSiemens));
    else if (method === "milli_siemens to mega_siemens") return Number.parseFloat(eval(num / Math.pow(perSiemens, 3)));
    else if (method === "micro_siemens to mega_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 4))));
    else if (method === "ampere_volt to mega_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "mho to mega_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "gem_mho to mega_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 4))));
    else if (method === "mirco_mho to mega_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 4))));
    else if (method === "ab_mho to mega_siemens") return Number.parseFloat(eval(num * perSiemens));
    else if (method === "stat_mho to mega_siemens") return Number.parseFloat(eval(num * 1.112347052E-18));
    else if (method === "quantized_hall_conductance to mega_siemens") return Number.parseFloat(eval(num * 3.874046139E-11));
    //#endregion

    //#region  for kilo_siemens
    if (method === "siemens to kilo_siemens") return Number.parseFloat(eval(num / Math.pow(perSiemens, 2)));
    else if (method === "mega_siemens to kilo_siemens") return Number.parseFloat(eval(num * Math.pow(perSiemens, 1)));
    else if (method === "milli_siemens to kilo_siemens") return Number.parseFloat(eval(num / Math.pow(perSiemens, 2)));
    else if (method === "micro_siemens to kilo_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 3))));
    else if (method === "ampere_volt to kilo_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 1))));
    else if (method === "mho to kilo_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 1))));
    else if (method === "gem_mho to kilo_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 3))));
    else if (method === "mirco_mho to kilo_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 3))));
    else if (method === "ab_mho to kilo_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 2))));
    else if (method === "stat_mho to kilo_siemens") return Number.parseFloat(eval(num * 1.112347052E-15));
    else if (method === "quantized_hall_conductance to kilo_siemens") return Number.parseFloat(eval(num * 3.874046139E-8));
    //#endregion

    //#region  for milli_siemens
    if (method === "siemens to milli_siemens") return Number.parseFloat(eval(num * Math.pow(perSiemens, 1)));
    else if (method === "mega_siemens to milli_siemens") return Number.parseFloat(eval(num * Math.pow(perSiemens, 3)));
    else if (method === "kilo_siemens to milli_siemens") return Number.parseFloat(eval(num * Math.pow(perSiemens, 2)));
    else if (method === "micro_siemens to milli_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 1))));
    else if (method === "ampere_volt to milli_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 1))));
    else if (method === "mho to milli_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 1))));
    else if (method === "gem_mho to milli_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 1))));
    else if (method === "mirco_mho to milli_siemens") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 1))));
    else if (method === "ab_mho to milli_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 4))));
    else if (method === "stat_mho to milli_siemens") return Number.parseFloat(eval(num * 1.112347052E-9));
    else if (method === "quantized_hall_conductance to milli_siemens") return Number.parseFloat(eval(num * 0.0387404614));
    //#endregion

    //#region  for micro_siemens
    if (method === "siemens to micro_siemens") return Number.parseFloat(eval(num * Math.pow(perSiemens, 2)));
    else if (method === "mega_siemens to micro_siemens") return Number.parseFloat(eval(num * Math.pow(perSiemens, 4)));
    else if (method === "kilo_siemens to micro_siemens") return Number.parseFloat(eval(num * Math.pow(perSiemens, 3)));
    else if (method === "milli_siemens to micro_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 1))));
    else if (method === "ampere_volt to micro_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 2))));
    else if (method === "mho to micro_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 2))));
    else if (method === "gem_mho to micro_siemens") return Number.parseFloat(eval(num / 1));
    else if (method === "mirco_mho to micro_siemens") return Number.parseFloat(eval(num / 1));
    else if (method === "ab_mho to micro_siemens") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 5))));
    else if (method === "stat_mho to micro_siemens") return Number.parseFloat(eval(num * 0.0000011123));
    else if (method === "quantized_hall_conductance to micro_siemens") return Number.parseFloat(eval(num * 38.7404614));
    //#endregion

    //#region  for ampere_volt and mho
    if (method === "siemens to ampere_volt") return Number.parseFloat(eval(num * 1));
    else if (method === "mega_siemens to ampere_volt") return Number.parseFloat(eval(num * Math.pow(perSiemens, 2)));
    else if (method === "kilo_siemens to ampere_volt") return Number.parseFloat(eval(num * Math.pow(perSiemens, 1)));
    else if (method === "milli_siemens to ampere_volt") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 1))));
    else if (method === "micro_siemens to ampere_volt") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "mho to ampere_volt") return Number.parseFloat(eval(num * 1));
    else if (method === "gem_mho to ampere_volt") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "mirco_mho to ampere_volt") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 2))));
    else if (method === "ab_mho to ampere_volt") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 3))));
    else if (method === "stat_mho to ampere_volt") return Number.parseFloat(eval(num * 1.112347052E-12));
    else if (method === "quantized_hall_conductance to ampere_volt") return Number.parseFloat(eval(num * 0.0000387405));
    //#endregion

    //#region  for gem_mho & mirco_mho
    if (method === "siemens to gem_mho") return Number.parseFloat(eval(num * Math.pow(perSiemens, 2)));
    else if (method === "mega_siemens to gem_mho") return Number.parseFloat(eval(num * Math.pow(perSiemens, 4)));
    else if (method === "kilo_siemens to gem_mho") return Number.parseFloat(eval(num * Math.pow(perSiemens, 3)));
    else if (method === "milli_siemens to gem_mho") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 1))));
    else if (method === "micro_siemens to gem_mho") return Number.parseFloat(eval(num * 1));
    else if (method === "ampere_volt to gem_mho") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 2))));
    else if (method === "mho to gem_mho") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 2))));
    else if (method === "mirco_mho to gem_mho") return Number.parseFloat(eval(num * 1));
    else if (method === "ab_mho to gem_mho") return Number.parseFloat(eval(num * (Math.pow(perSiemens, 5))));
    else if (method === "stat_mho to gem_mho") return Number.parseFloat(eval(num * 0.0000011123));
    else if (method === "quantized_hall_conductance to gem_mho") return Number.parseFloat(eval(num * 38.7404614));
    //#endregion

    //#region  for ab_mho
    if (method === "siemens to ab_mho") return Number.parseFloat(eval(num / Math.pow(perSiemens, 3)));
    else if (method === "mega_siemens to ab_mho") return Number.parseFloat(eval(num / Math.pow(perSiemens, 1)));
    else if (method === "kilo_siemens to ab_mho") return Number.parseFloat(eval(num / Math.pow(perSiemens, 2)));
    else if (method === "milli_siemens to ab_mho") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 4))));
    else if (method === "micro_siemens to ab_mho") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 5))));
    else if (method === "ampere_volt to ab_mho") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 3))));
    else if (method === "mho to ab_mho") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 3))));
    else if (method === "gem_mho to ab_mho") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 5))));
    else if (method === "mirco_mho to ab_mho") return Number.parseFloat(eval(num / (Math.pow(perSiemens, 5))));
    else if (method === "stat_mho to ab_mho") return Number.parseFloat(eval(num * 1.112347052E-21));
    else if (method === "quantized_hall_conductance to ab_mho") return Number.parseFloat(eval(num * 3.874046139E-14));
    //#endregion

    //#region  for stat_mho
    if (method === "siemens to stat_mho") return Number.parseFloat(eval(num * Math.pow(statMho, 3)));
    else if (method === "mega_siemens to stat_mho") return Number.parseFloat(eval(num * 898999999999999900));
    else if (method === "kilo_siemens to stat_mho") return Number.parseFloat(eval(num * Math.pow(statMho, 4)));
    else if (method === "milli_siemens to stat_mho") return Number.parseFloat(eval(num * (Math.pow(statMho, 2))));
    else if (method === "micro_siemens to stat_mho") return Number.parseFloat(eval(num * (Math.pow(statMho, 1))));
    else if (method === "ampere_volt to stat_mho") return Number.parseFloat(eval(num * (Math.pow(statMho, 3))));
    else if (method === "mho to stat_mho") return Number.parseFloat(eval(num * (Math.pow(statMho, 3))));
    else if (method === "gem_mho to stat_mho") return Number.parseFloat(eval(num * (Math.pow(statMho, 1))));
    else if (method === "mirco_mho to stat_mho") return Number.parseFloat(eval(num * (Math.pow(statMho, 1))));
    else if (method === "ab_mho to stat_mho") return Number.parseFloat(eval(num * (Math.pow(statMho, 6))));
    else if (method === "quantized_hall_conductance to stat_mho") return Number.parseFloat(eval(num * 34827674.799));
    //#endregion

    //#region  for quantized_hall_conductance
    if (method === "siemens to quantized_hall_conductance") return Number.parseFloat(eval(num * quantizedHallConductance));
    else if (method === "mega_siemens to quantized_hall_conductance") return Number.parseFloat(eval(num * (quantizedHallConductance * Math.pow(perSiemens, 2))));
    else if (method === "kilo_siemens to quantized_hall_conductance") return Number.parseFloat(eval(num * (quantizedHallConductance * perSiemens)));
    else if (method === "milli_siemens to quantized_hall_conductance") return Number.parseFloat(eval(num * (quantizedHallConductance / perSiemens)));
    else if (method === "micro_siemens to quantized_hall_conductance") return Number.parseFloat(eval(num * (quantizedHallConductance / Math.pow(perSiemens, 2))));
    else if (method === "ampere_volt to quantized_hall_conductance") return Number.parseFloat(eval(num * quantizedHallConductance));
    else if (method === "mho to quantized_hall_conductance") return Number.parseFloat(eval(num * quantizedHallConductance));
    else if (method === "gem_mho to quantized_hall_conductance") return Number.parseFloat(eval(num * (quantizedHallConductance / Math.pow(perSiemens, 2))));
    else if (method === "mirco_mho to quantized_hall_conductance") return Number.parseFloat(eval(num * (quantizedHallConductance / Math.pow(perSiemens, 2))));
    else if (method === "ab_mho to quantized_hall_conductance") return Number.parseFloat(eval(num * 25812805626523));
    else if (method === "stat_mho to quantized_hall_conductance") return Number.parseFloat(eval(num * 2.871279824E-8));
    //#endregion
}