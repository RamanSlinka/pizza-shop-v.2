import {itemType} from "./pizzas";

export type AddPizzaToCartActionType = ReturnType<typeof addPizzaToCart>

//export type AddToCardActionsType = AddPizzaToCartActionType




export const addPizzaToCart = (pizzaObj: itemType) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj} as const )