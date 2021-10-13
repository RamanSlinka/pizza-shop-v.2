import {itemsType, SetPizzasActionType} from "../actions/pizzas";

type initialStateType ={
    items: [] | itemsType
    isLoaded: boolean
}

const initialState: initialStateType = {
    items: [],
    isLoaded: false
}

export default function pizzas(state: initialStateType = initialState, action: SetPizzasActionType): initialStateType {
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