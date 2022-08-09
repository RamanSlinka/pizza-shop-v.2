import {newItemsType} from "../reducers/cart";

export type AddPizzaToCartActionType = ReturnType<typeof addPizzaToCart>
export type ClearCartActionType = ReturnType<typeof clearCart>
export type RemoveCartItemActionType = ReturnType<typeof removeCartItem>
export type IncrementCartItemActionType = ReturnType<typeof incrementCartItem>
export type DecrementCartItemActionType = ReturnType<typeof decrementCartItem>

export type PizzasActionType =
    AddPizzaToCartActionType
    | ClearCartActionType
    | RemoveCartItemActionType
    | IncrementCartItemActionType
    | DecrementCartItemActionType

export const addPizzaToCart = (pizzaObj: newItemsType) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
} as const)


export const removeCartItem = (id: string) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
} as const);

export const clearCart = () => ({
    type: 'CLEAR_CART',
} as const);

export const incrementCartItem = (id: string) => ({
    type: 'INCREMENT_CART_ITEM',
    payload: id,
} as const);

export const decrementCartItem = (id: string) => ({
    type: 'DECREMENT_CART_ITEM',
    payload: id,
} as const);