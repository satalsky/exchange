const defaultState = {
    from: {},
    to: {}
}

export const exchangeReducer = (state=defaultState, action) => {
    switch (action.type) {
        case "SET_FROM":
            return {...state, from: action.payload}
        case "SET_TO":
            return {...state, to: action.payload}
        default:
            return state
    }
}