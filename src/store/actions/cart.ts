import {newItemsType} from "../reducers/cart";

export type AddPizzaToCartActionType = ReturnType<typeof addPizzaToCart>
export type ClearCartActionType = ReturnType<typeof clearCart>

export type PizzasActionType =
    AddPizzaToCartActionType
    | ClearCartActionType

export const addPizzaToCart = (pizzaObj: newItemsType) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
} as const)

export const clearCart = () => ({
    type: 'CLEAR_CART',
} as const);