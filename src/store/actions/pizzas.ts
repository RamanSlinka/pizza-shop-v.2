import axios from "axios";
import {AppThunkType} from "../index";


export type itemType = {
    id: number
    imageUrl: string
    name: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number | null
    rating: number
}



export type SetPizzasActionType = ReturnType<typeof setPizzasAC>
export type SetLoadedActionType = ReturnType<typeof setLoaded>
export type SetFilterCategoryActionType = ReturnType<typeof setFilterCategory>
export type SetSortByActionType = ReturnType<typeof setFilterSortBy>


export type PizzasActionsType = SetPizzasActionType
    | SetLoadedActionType
    | SetFilterCategoryActionType
    | SetSortByActionType

export const setLoaded = (payload: boolean) => ({
    type: 'SET_LOADED', payload
} as const);

export const setPizzasAC = (items: Array<itemType>) => ({
    type: 'SET_PIZZAS', payload: items
} as const);

export const setFilterCategory = (category: number | null) => ({
    type: 'PIZZAS_FILTER_CATEGORY',
    payload: category
} as const);


export const setFilterSortBy = (price: string) => ({
    type: 'PIZZAS_FILTER_SORT_BY',
    payload: price
} as const);







export const fetchPizzas = (): AppThunkType => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`https://pizza-shop--server.herokuapp.com/api/pizzas`
    )
        .then(({data}) => {
            dispatch(setPizzasAC(data));
            dispatch(setLoaded(true));
        })

}