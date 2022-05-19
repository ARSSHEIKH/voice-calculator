const initialstate = {
    show: false,
    from: "",
    dataToShow: {}
};

function modal_state(state = initialstate, action) {
    switch (action.type) {
        case "set_modal_state":
            return action.payload
        
        case "reset_modal_state":
            return initialstate

        default:
            return state
    }
}

export default modal_state;