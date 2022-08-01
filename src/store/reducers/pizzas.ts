import {itemType, PizzasActionsType} from "../actions/pizzas";

type initialStateType = {
    items: Array<itemType> | []
    isLoaded: boolean
    category: string | null
    sortBy: string
}

const initialState: initialStateType = {
    items: [],
    isLoaded: false,
    category: null,
    sortBy: 'popular'
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
                // ...state, items: state.items.map((item: itemType) => item.name === action.payload).sort(),


                 ...state, items: state.items.filter((item: itemType) => item.name !== action.payload),
                sortBy: action.payload
            }

        case  'SET_LOADED':
            return {...state, isLoaded: action.payload};


        default:
            return state;
    }
}