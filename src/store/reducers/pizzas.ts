import { PizzasActionsType} from "../actions/pizzas";
import {itemType} from "./cart";

export type initialStateType = {
    items: Array<itemType> | []
    isLoaded: boolean
    category: string | null
    sortBy: string
}

const initialState: initialStateType = {
    items: [],
    isLoaded: false,
    category: null,
    sortBy: 'rating'
}

export default function pizzas(state = initialState, action: PizzasActionsType): initialStateType {
    switch (action.type) {
        case  'SET_PIZZAS':
            return {
                ...state, items: action.payload,
                isLoaded: true
            };

        case 'PIZZAS_FILTER_CATEGORY':
            return {
                ...state, category: action.payload
            };

        case "PIZZAS_FILTER_SORT_BY":
            return {
                ...state, sortBy: action.payload
            }

        case  'SET_LOADED':
            return {...state, isLoaded: action.payload};


        default:
            return state;
    }
}