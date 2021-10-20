import { itemType} from "../actions/pizzas";
import {AddPizzaToCartActionType} from "../actions/cart";

export type newItemsType = {
    id: number
    item:  itemType
}

type initialStateType = {
    itemsCart: { [key: string] : Array<newItemsType> }
    totalPrice: number
    totalCount: number
}


const initialState: initialStateType = {
    itemsCart: {},
    totalPrice: 0,
    totalCount: 0
}



export default function cart(state: initialStateType = initialState, action: AddPizzaToCartActionType): initialStateType {
    switch (action.type) {
        case  'ADD_PIZZA_CART':
            const newItems = {
                    ...state.itemsCart,
                    [action.payload.id]: (!state.itemsCart[action.payload.id]
                        ? [action.payload]
                        : [...state.itemsCart[action.payload.id], action.payload]),
                };

            const allPizzas = [].concat.apply([], Object.values(newItems));

            const totalPrice = allPizzas.reduce((sum: number, obj: any) => {
                return  obj.price + sum
            }, 0);

            return {
                ...state,
                itemsCart: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            };

        default:
            return state;
    }
}

