import { FiltersActionsType} from "../actions/filters";


export type initialStateType ={
    category: string | number | null
    sortBy: string
}

const initialState: initialStateType = {
    category: null,
    sortBy: 'popular'
}

export default function  filters (state: initialStateType = initialState, action: FiltersActionsType): initialStateType  {
    switch (action.type){
        case  'SET_SORT_BY':
        return {
            ...state, sortBy: action.payload
        };
        case   'SET_CATEGORY':
        return {
            ...state, category: action.payload
        };
    }

    return state
}