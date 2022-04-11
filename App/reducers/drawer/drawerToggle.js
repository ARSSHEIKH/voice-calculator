const initialstate = false;

function drawerToggle_state(state = initialstate, action) {
    switch (action.type) {
        case "open_drawerToggle_state":
            return action.payload
        
        case "close_drawerToggle_state":
            return initialstate

        default:
            return state
    }
}

export default drawerToggle_state;