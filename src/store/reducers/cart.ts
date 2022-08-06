import {itemType} from "../actions/pizzas";
import {PizzasActionType} from "../actions/cart";

export type newItemsType = {
    _id: number
    item: itemType
}

type initialStateType = {
    itemsCart: { [key: string]: Array<newItemsType> }
    totalPrice: number
    totalCount: number
}


const initialState: initialStateType = {
    itemsCart: {},
    totalPrice: 0,
    totalCount: 0
}


export default function cart(state: initialStateType = initialState, action: PizzasActionType): initialStateType {
    switch (action.type) {
        case  'ADD_PIZZA_CART':
            const newItems = {
                ...state.itemsCart,
                [action.payload._id]: (!state.itemsCart[action.payload._id]
                    ? [action.payload]
                    : [...state.itemsCart[action.payload._id], action.payload]),
            };

            const allPizzas = [].concat.apply([], Object.values(newItems));

            const totalPrice = allPizzas.reduce((sum: number, obj: any) => {
                return obj.price + sum
            }, 0);

            return {
                ...state,
                itemsCart: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            };

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.itemsCart,
            };

            const currentTotalPrice = newItems[action.payload].reduce((sum: number, obj: any) => {
                return obj.price + sum
            }, 0);

            const currentTotalCount = newItems[action.payload].length;

            delete newItems[action.payload];
            return {
                ...state,
                itemsCart: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case 'CLEAR_CART':
            return {totalPrice: 0, totalCount: 0, itemsCart: {}};


        default:
            return state;
    }
}

