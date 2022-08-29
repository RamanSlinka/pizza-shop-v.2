import {addPizzaToCart, clearCart} from "../actions/cart";
import cart, {itemType, newItemsType} from "./cart";

const itemCart: itemType = {
    _id: '123',
    imageUrl: 'https://dodopizza.azureedge.net/',
    name: 'Pizza',
    types: [1, 2],
    sizes: [23, 45],
    price: 100,
    category: 'meat',
    rating: 0
}

const newItem: newItemsType = {
    _id: 1212,
    item: itemCart
}

type defaultStateType = {
    itemsCart: { [key: string]: Array<newItemsType> }
    totalPrice: number
    totalCount: number
}

const defaultState: defaultStateType = {
    itemsCart: {},
    totalPrice: 0,
    totalCount: 0
}

test('item should be added to cart', () => {
    const action = addPizzaToCart(newItem)
    const newState = cart(defaultState, action)

    expect(newState.itemsCart[1212].length).toBe(1)
    expect(newState.itemsCart[1212][0].item.category).toBe('meat')
    expect(newState.totalCount).toBe(1)
})

test('cart should be clear', () => {

    const action = addPizzaToCart(newItem)
    let newState = cart(defaultState, action)
    const action2 = clearCart()

    expect(newState.itemsCart[1212].length).toBe(1)

    newState = cart(defaultState, action2)
    expect(newState.itemsCart[1212]).toBe(undefined)
    expect(newState.itemsCart).toStrictEqual({})
})