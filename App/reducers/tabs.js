const initialstate = 0;

function tabs_state(state = initialstate, action) {
    switch (action.type) {
        case "set_tabs_state":
            return action.payload
        
        case "reset_tabs_state":
            return initialstate

        default:
            return state
    }
}

export default tabs_state;