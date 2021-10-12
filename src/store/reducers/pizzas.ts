
type initialStateType ={
    items: []
    isLoaded: boolean
}

const initialState = {
    items: [],
    isLoaded: false
}

export default function pizzas(state = initialState, action: any) {
    switch (action.type) {
        case  'SET_PIZZAS':
            return {
                ...state, items: action.payload,
                isLoaded: true
            };
        default:
            return state;
    }
}