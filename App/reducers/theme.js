import * as light_mode from "../services/themes/light.json";
import * as dark_mode from "../services/themes/dark.json";

const initialstate = light_mode;

function theme_state(state = initialstate, action) {
    switch (action.type) {
        case "dark_mode":
            return dark_mode
        case "light_mode":
            return light_mode
        default:
            return state
    }
}

export default theme_state;