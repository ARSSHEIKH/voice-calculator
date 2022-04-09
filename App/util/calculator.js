export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
    result: "0",
    lastInput: null
};

export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
        return { currentValue: `${value}` };
    }

    return {
        currentValue: `${state.currentValue}${value}`
    };
};

export const handleEqual = state => {
    const { currentValue, previousValue, operator, result } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    // const resetState = {
    //     operator: null,
    //     previousValue: null
    // };

    if (operator === "/") {
        return {
            result: previous / current,
            // ...resetState
        };
    }

    if (operator === "*") {
        return {
            result: previous * current,
            // ...resetState
        };
    }

    if (operator === "+") {
        return {
            result: previous + current,
            // ...resetState
        };
    }

    if (operator === "-") {
        return {
            result: previous - current,
            // ...resetState
        };
    }

    return state;
};

const calculator = (type, value, state) => {
    state.lastInput = value
    switch (type) {
        case "number":
            return handleNumber(value, state);
        case "operator":
            return {
                operator: value,
                previousValue: state.currentValue,
                currentValue: "0",
                result: state.result
            };
        case "equal":
            return handleEqual(state);
        case "clear":
            return initialState;
        case "delete":
            return {
                operator: state.operator,
                previousValue: null,
                currentValue: "0",
                result: state.result

            }
        case "posneg":
            return {
                result: `${parseFloat(state.result) * -1}`
            };
        case "percentage":
            return {
                result: `${parseFloat(state.result) * 0.01}`
            };
        default:
            return state;
    }
};

export default calculator;
