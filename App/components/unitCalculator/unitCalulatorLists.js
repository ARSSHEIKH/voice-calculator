import AngleCalculator from "../../screen/otherCalculators/unitCalculator/angle"
import AreaCalculator from "../../screen/otherCalculators/unitCalculator/area"
import CapacitanceCalculator from "../../screen/otherCalculators/unitCalculator/capacitance"
import ChargeCalculator from "../../screen/otherCalculators/unitCalculator/charge"
import ConcentrationCalculator from "../../screen/otherCalculators/unitCalculator/concentration"
import ConductanceCalculator from "../../screen/otherCalculators/unitCalculator/conductance"
import ConductivityCalculator from "../../screen/otherCalculators/unitCalculator/conductivity"
import CookingCalculator from "../../screen/otherCalculators/unitCalculator/cooking"
import CurrentCalculator from "../../screen/otherCalculators/unitCalculator/current"
import DensityCalculator from "../../screen/otherCalculators/unitCalculator/density"
import EnergyCalculator from "../../screen/otherCalculators/unitCalculator/energy"
import FlowCalculator from "../../screen/otherCalculators/unitCalculator/flow"
import ForceCalculator from "../../screen/otherCalculators/unitCalculator/force"

import UnderConstruction from "../../screen/otherCalculators/unitCalculator/underConstruction"
import FrequencyCalculator from "../../screen/otherCalculators/unitCalculator/frequency";
import FuelEfficiencyCalculator from "../../screen/otherCalculators/unitCalculator/fuel-efficiency"

const unitCalulatorLists = [
    {
        name: "Angle",
        path: "angle",
        icon:"",
        components: AngleCalculator
    },
    {
        name: "Area",
        path: "area",
        icon:"",
        components: AreaCalculator
    },
    {
        name: "Capacitance",
        path: "Capacitance",
        icon:"",
        components: CapacitanceCalculator
    },
    {
        name: "Charge",
        path: "Charge",
        icon:"",
        components: ChargeCalculator
    },
    {
        name: "Concentration",
        path: "Concentration",
        icon:"",
        components: ConcentrationCalculator
    },
    {
        name: "Conductivity",
        path: "Conductivity",
        icon:"",
        components: ConductivityCalculator
    },
    { 
        name: "Conductance",
        path: "Conductance",
        icon:"",
        components: ConductanceCalculator
    },
    {
        name: "Cooking",
        path: "Cooking",
        icon:"",
        components: CookingCalculator
    },
    {
        name: "Currency",
        path: "Currency",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Current",
        path: "Current",
        icon:"",
        components: CurrentCalculator
    },
    {
        name: "Density",
        path: "Density",
        icon:"",
        components: DensityCalculator
    },
    {
        name: "Energy",
        path: "Energy",
        icon:"",
        components: EnergyCalculator
    },
    {
        name: "Flow",
        path: "Flow",
        icon:"",
        components: FlowCalculator
    },
    {
        name: "Force",
        path: "Force",
        icon:"",
        components: ForceCalculator
    },
    {
        name: "Frequency",
        path: "Frequency",
        icon:"",
        components: FrequencyCalculator
    },
    {
        name: "Fuel Efficiency",
        path: "Fuel Efficiency",
        icon:"",
        components: FuelEfficiencyCalculator
    },
    {
        name: "Fuel",
        path: "Fuel",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Heat Capacity",
        path: "Heat Capacity",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Illumination",
        path: "Illumination",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Image",
        path: "Image",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Inductance",
        path: "Inductance",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Interia",
        path: "Interia",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Length",
        path: "Length",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Luminance",
        path: "Luminance",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Magnet",
        path: "Magnet",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Permiability",
        path: "Permiability",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Power",
        path: "Power",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Pressure",
        path: "Pressure",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Prefix",
        path: "Prefix",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Radiation",
        path: "Radiation",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Solution",
        path: "Solution",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Sound",
        path: "Sound",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Speed",
        path: "Speed",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Storage",
        path: "Storage",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Surface Tension",
        path: "Surface Tension",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Temperature",
        path: "Temperature",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Time",
        path: "Time",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Torque",
        path: "Torque",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Viscosity",
        path: "Viscosity",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Volume",
        path: "Volume",
        icon:"",
        components: UnderConstruction
    },
    {
        name: "Weight",
        path: "Weight",
        icon:"",
        components: UnderConstruction
    },
]
export default unitCalulatorLists