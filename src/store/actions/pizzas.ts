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




export const setPizzasAC = (items: itemsType) => ({
    type: 'SET_PIZZAS',
    payload: items
} as const);



export const fetchPizzas = (): AppThunkType=> (dispatch)=> {
    axios.get('http://localhost:3001/pizzas')
        .then(({data}) => {
          dispatch(setPizzasAC(data))
        })
}