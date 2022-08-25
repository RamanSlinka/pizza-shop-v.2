import pizzas, {initialStateType} from "./pizzas";
import {setFilterCategory, setFilterSortBy, setLoaded, setPizzasAC} from "../actions/pizzas";
import {itemType} from "./cart";

const defaultState: initialStateType = {
    items: [],
    isLoaded: false,
    category: null,
    sortBy: 'rating'
}

const pizzasArr: Array<itemType> = [
    {
        _id: '0',
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        name: "PEPPERONI Fresh ",
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 14,
        category: '0' ,
        rating: 4

    },
    {
        _id: '1',
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
        name: "4 Cheeses",
        types: [0],
        sizes: [26, 40],
        price: 10,
        category: '2',
        rating: 6

    },
]

test('pizzas should be added', () => {
    const action = setPizzasAC(pizzasArr)
    const newState = pizzas(defaultState, action)

    expect(newState.items.length).toBe(2)
    expect(newState.items[1].name).toBe("4 Cheeses")

    expect(newState.isLoaded).toBe(true)
    expect(newState.isLoaded).not.toBe(false)
})

test('loader should be changed to true and later to false', () => {

    let payload = true
    let action = setLoaded(payload)
    let newState = pizzas(defaultState, action)

    expect(newState.isLoaded).toBe(true)

    payload = false
     action = setLoaded(payload)
     newState = pizzas(defaultState, action)
    expect(newState.isLoaded).toBe(false)
})

test('category should be changed', () => {

    let category = '1'
    let action = setFilterCategory(category)
    let newState = pizzas(defaultState, action)

    expect(newState.category).toBe('1')

     category = '123'
     action = setFilterCategory(category)
     newState = pizzas(defaultState, action)
    expect(newState.category).toBe('123')
})

test('filter title should be changed', () => {
    let filterTitle = 'meat'
    let action = setFilterSortBy(filterTitle)
    let newState = pizzas(defaultState,action)
    expect(newState.sortBy).toBe('meat')

     filterTitle = 'fish'
     action = setFilterSortBy(filterTitle)
     newState = pizzas(defaultState,action)
    expect(newState.sortBy).toBe('fish')

})