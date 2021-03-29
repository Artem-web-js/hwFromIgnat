const initState = {
    theme: "dark" as IThemeStateType
};

export type IThemeStateType = 'dark' | 'red' | 'some'

export const themeReducer = (state = initState, action: ActionType): {theme: IThemeStateType }  => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: IThemeStateType) => ({type: "CHANGE-THEME", theme} as const); // fix any

type ActionType = ReturnType<typeof changeThemeC>