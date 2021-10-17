import {itemsType, itemType} from "../actions/pizzas";
import {AddPizzaToCartActionType} from "../actions/cart";

// type newItemsType = {
//     id: number
//     items: {} | itemType
// }

type initialStateType = {
    items: {} | itemType
   // newItems: newItemsType
    totalPrice: number
    totalCount: number
}


const initialState: initialStateType = {
    items: {},
    //newItems: {?id, ?items},
    totalPrice: 0,
    totalCount: 0
}

export default function cart(state: any = initialState, action: AddPizzaToCartActionType): any {
    switch (action.type) {
        case  'ADD_PIZZA_CART':
            const newItems = {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id]
                        ? [action.payload]

                        : [...state.items[action.payload.id], action.payload],
                };

            const allPizzas = [].concat.apply([], Object.values(newItems));
            // @ts-ignore
            const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0); //error

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            };

        default:
            return state;
    }
}