const thousand = 1000;

export const fuelEffieciencyCalculation = (method, num) => {
        // J_per_kg
        if (method === "J/kg to kJ/kg") return Number.parseFloat(eval(num / thousand));
        else if (method === "J/kg to cal/g") return Number.parseFloat(eval(num * 0.0002));
        else if (method === "J/kg to cal (th)/g") return Number.parseFloat(eval(num * 0.0002));
        else if (method === "J/kg to kg/J") return Number.parseFloat(eval(num));
        else if (method === "J/kg to kg/kJ") return Number.parseFloat(eval(num * thousand));
        else if (method === "J/kg to g/cal") return Number.parseFloat(eval(num * 4186.8));
        else if (method === "J/kg to g/cal (th)") return Number.parseFloat(eval(num * 4184));
        else if (method === "J/kg to Btu/lb") return Number.parseFloat(eval(num * 0.0004));
        else if (method === "J/kg to Btu (th)/lb") return Number.parseFloat(eval(num * 0.0004));
        else if (method === "J/kg to lb/Btu") return Number.parseFloat(eval(num * 2326));
        else if (method === "J/kg to lb/Btu (th)") return Number.parseFloat(eval(num * 2324.4444));
        else if (method === "J/kg to lb/(hp*h)") return Number.parseFloat(eval(num * 5918352.5016));
        else if (method === "J/kg to g(hp*h)") return Number.parseFloat(eval(num * 2647795500));
        else if (method === "J/kg to g(kW*h)") return Number.parseFloat(eval(num * 3600000000));

        // kJ/kg
        else if (method === "kJ/kg to J/kg") return Number.parseFloat(eval(num * thousand));
        else if (method === "kJ/kg to cal/g") return Number.parseFloat(eval(num * 0.2388));
        else if (method === "kJ/kg to cal (th)/g") return Number.parseFloat(eval(num * 0.239));
        else if (method === "kJ/kg to kg/J") return Number.parseFloat(eval(num / thousand));
        else if (method === "kJ/kg to kg/kJ") return Number.parseFloat(eval(num));
        else if (method === "kJ/kg to g/cal") return Number.parseFloat(eval(num * 4.1868));
        else if (method === "kJ/kg to g/cal (th)") return Number.parseFloat(eval(num * 4.184));
        else if (method === "kJ/kg to Btu/lb") return Number.parseFloat(eval(num * 0.4299));
        else if (method === "kJ/kg to Btu (th)/lb") return Number.parseFloat(eval(num * 0.4302));
        else if (method === "kJ/kg to lb/Btu") return Number.parseFloat(eval(num * 2.326));
        else if (method === "kJ/kg to lb/Btu (th)") return Number.parseFloat(eval(num * 2.3244));
        else if (method === "kJ/kg to lb/(hp*h)") return Number.parseFloat(eval(num * 5918.3525016));
        else if (method === "kJ/kg to g(hp*h)") return Number.parseFloat(eval(num * 2647795.5));
        else if (method === "kJ/kg to g(kW*h)") return Number.parseFloat(eval(num * 3600000));

        // cal/g
        else if (method === "cal/g to J/kg") return Number.parseFloat(eval(num * 4186.8));
        else if (method === "cal/g to kJ/kg") return Number.parseFloat(eval(num * 4.1868));
        else if (method === "cal/g to cal (th)/g") return Number.parseFloat(eval(num * 1.0007));
        else if (method === "cal/g to kg/J") return Number.parseFloat(eval(num * 0.0002));
        else if (method === "cal/g to kg/kJ") return Number.parseFloat(eval(num * 0.2388));
        else if (method === "cal/g to g/cal") return Number.parseFloat(eval(num));
        else if (method === "cal/g to g/cal (th)") return Number.parseFloat(eval(num * 0.9993));
        else if (method === "cal/g to Btu/lb") return Number.parseFloat(eval(num * 1.8));
        else if (method === "cal/g to Btu (th)/lb") return Number.parseFloat(eval(num * 1.8012));
        else if (method === "cal/g to lb/Btu") return Number.parseFloat(eval(num * 0.5556));
        else if (method === "cal/g to lb/Btu (th)") return Number.parseFloat(eval(num * 0.5552));
        else if (method === "cal/g to lb/(hp*h)") return Number.parseFloat(eval(num * 1413.5742098));
        else if (method === "cal/g to g(hp*h)") return Number.parseFloat(eval(num * 632415.09028));
        else if (method === "cal/g to g(kW*h)") return Number.parseFloat(eval(num * 859845.22786));

        // cal (th)/g
        else if (method === "cal (th)/g to J/kg") return Number.parseFloat(eval(num * 4184));
        else if (method === "cal (th)/g to kJ/kg") return Number.parseFloat(eval(num * 4.184));
        else if (method === "cal (th)/g to cal/g") return Number.parseFloat(eval(num * 0.9993));
        else if (method === "cal (th)/g to kg/J") return Number.parseFloat(eval(num * 0.0002));
        else if (method === "cal (th)/g to kg/kJ") return Number.parseFloat(eval(num * 0.239));
        else if (method === "cal (th)/g to g/cal") return Number.parseFloat(eval(num*1.0007));
        else if (method === "cal (th)/g to g/cal (th)") return Number.parseFloat(eval(num * 1));
        else if (method === "cal (th)/g to Btu/lb") return Number.parseFloat(eval(num * 1.7988));
        else if (method === "cal (th)/g to Btu (th)/lb") return Number.parseFloat(eval(num * 1.8));
        else if (method === "cal (th)/g to lb/Btu") return Number.parseFloat(eval(num * 0.5559));
        else if (method === "cal (th)/g to lb/Btu (th)") return Number.parseFloat(eval(num * 0.5556));
        else if (method === "cal (th)/g to lb/(hp*h)") return Number.parseFloat(eval(num * 1414.5742098));
        else if (method === "cal (th)/g to g(hp*h)") return Number.parseFloat(eval(num * 632838.31262));
        else if (method === "cal (th)/g to g(kW*h)") return Number.parseFloat(eval(num * 860420.65009));
}