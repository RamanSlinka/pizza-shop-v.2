import axios from "axios";
import {AppThunkType} from "../index";

export type itemType = {
    id: number
    imageUrl: string
    name: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}

export type itemsType = {
    items: Array<itemType>
}

export type SetPizzasActionType = ReturnType<typeof setPizzasAC>
export type SetLoadedActionType = ReturnType<typeof setLoaded>

export type PizzasActionsType = SetPizzasActionType | SetLoadedActionType

export const setLoaded = (payload: boolean) => ({
    type: 'SET_LOADED',
    payload
} as const);

export const setPizzasAC = (items: itemsType) => ({
    type: 'SET_PIZZAS',
    payload: items
} as const);


export const fetchPizzas = (sortBy: string, category: any ): AppThunkType => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
    }&_sort=${sortBy}&_order=desc`,
        )
        .then(({data}) => {
            dispatch(setPizzasAC(data));
            dispatch(setLoaded(true));
        })

}