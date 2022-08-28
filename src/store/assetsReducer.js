const defaultState = {
    assets: [],
    cryptoAssets: [],
    fiatAssets: []
}

export const assetsReducer = (state=defaultState, action) => {
    switch (action.type){
        case "SET_ASSETS":
            return {...state, assets: action.payload};
        case "SET_CRYPTO":
            return {...state, cryptoAssets: action.payload};
        case "SET_FIAT":
            return {...state, fiatAssets: action.payload};
        default:
            return state;
    }
}