import axios from "axios";
import {AppThunkType} from "../index";
import {itemType} from "../reducers/cart";

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

export const setFilterCategory = (category: string | null) => ({
    type: 'PIZZAS_FILTER_CATEGORY',
    payload: category
} as const);


export const setFilterSortBy = (name: string) => ({
    type: 'PIZZAS_FILTER_SORT_BY',
    payload: name
} as const);


export const fetchPizzas = (sort: string | null): AppThunkType => (dispatch) => {
    dispatch(setLoaded(false));
    let URL = `https://pizza-shop--server.herokuapp.com/api/pizzas`
    if (sort) {
        URL = `https://pizza-shop--server.herokuapp.com/api/pizzas?sort=${sort}`
    } else {
        URL = `https://pizza-shop--server.herokuapp.com/api/pizzas`
    }

    axios.get(URL
        // axios.get(`https://pizza-shop--server.herokuapp.com/api/pizzas`
    )
        .then(({data}) => {
            dispatch(setPizzasAC(data));
            dispatch(setLoaded(true));
        })

}


export const filterPizzas = (filter: string | null): AppThunkType => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`https://pizza-shop--server.herokuapp.com/api/search?search=${filter}`
    )
        .then(({data}) => {
            dispatch(setPizzasAC(data));
        })
        .catch((e) => {
            alert(`'searchFiles' ${e?.response?.data?.message}`)
        })
        .finally(() => {
            dispatch(setLoaded(true));
        })
}

export const createNewPizza = async (imageUrl: string,
                                     name: string,
                                     types: Array<number>,
                                     sizes: Array<number>,
                                     price: number,
                                     category: number,
                                     rating: number) => {
    try {
        const response = await axios.post(`https://pizza-shop--server.herokuapp.com/api/pizza`, {

            imageUrl,
            name,
            types,
            sizes,
            price,
            category,
            rating


        }, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})

        console.log(response.data.message)
        alert(response.data.message)
    } catch (e) {
        console.log(e)
        alert(e)
    }
}