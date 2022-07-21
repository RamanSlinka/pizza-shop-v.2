import {itemsType, itemType, PizzasActionsType} from "../actions/pizzas";

type initialStateType = {
    items: [] | itemsType
    isLoaded: boolean
}

const initialState: initialStateType = {
    items: [],
    isLoaded: false
}

export default function pizzas(state = initialState, action: PizzasActionsType): initialStateType {
    switch (action.type) {
        case  'SET_PIZZAS':
            return {
                ...state, items: action.payload,
                isLoaded: true
            };
        // case 'PIZZAS_FILTER_CATEGORY':
        //     return {
        //         items.map((i: itemType) => i.category === action.payload ? {...i, filter: action.payload} : i)
        //     }
        //     debugger
        case  'SET_LOADED':
            return {
                ...state, isLoaded: action.payload,

            };


        default:
            return state;
    }
}