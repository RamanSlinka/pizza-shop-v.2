import {itemsType, PizzasActionsType} from "../actions/pizzas";

type initialStateType ={
    items: [] | itemsType
    isLoaded: boolean
}

const initialState: initialStateType = {
    items: [],
    isLoaded: false
}

export default function pizzas(state: initialStateType = initialState, action: PizzasActionsType): initialStateType {
    switch (action.type) {
        case  'SET_PIZZAS':
            return {
                ...state, items: action.payload,
                isLoaded: true
            };
            case  'SET_LOADED':
            return {
                ...state, isLoaded: action.payload,

            };
        default:
            return state;
    }
}