let initialState: Array<{_id: number, name: string, age: number}> = []

export const homeWorkReducer = (state= initialState, action: { type: 'sort' | 'check', payload: 'up' | 'down' | number }) => {
    switch (action.type) {
        case "sort": {
            if(action.payload === 'up') {
                return [...state].sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
            }
            if(action.payload === 'down') {
                return [...state].sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
            }
            return state
        }
        case "check": {
            return state.filter(u => u.age > action.payload)
        }
        default: return state
    }
};

