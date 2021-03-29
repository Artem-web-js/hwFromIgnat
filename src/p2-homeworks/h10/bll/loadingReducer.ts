const initState = {
    loading: false
};

type IStateType = {
    loading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): IStateType => { // fix any
    switch (action.type) {
        case "LOADING-TOGGLE": {
            return {...state, loading: action.loading};
        }
        default: return state;
    }
};

export const loadingAC = (loading: boolean) => ({type: 'LOADING-TOGGLE', loading} as const)

type LoadingActionType = ReturnType<typeof loadingAC>