
import {newItemsType} from "../reducers/cart";

export type AddPizzaToCartActionType = ReturnType<typeof addPizzaToCart>



export const addPizzaToCart = (pizzaObj: newItemsType) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj } as const )