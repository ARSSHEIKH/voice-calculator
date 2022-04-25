const initialstate = false;

function adClosed(state = initialstate, action) {
    switch (action.type) {
        case "set_adClosed":
            return true
        case "reset_adClosed":
            return false
        default:
            return state
    }
}

export default adClosed;