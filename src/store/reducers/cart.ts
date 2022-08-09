
import {PizzasActionType} from "../actions/cart";

export type itemType = {
    _id: string
    imageUrl: string
    name: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: string | null
    rating: number
}

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


const getTotalPrice = (arr: Array<any>) => arr.reduce((sum: number, obj: itemType) => obj.price + sum, 0);

const _get = (obj: any, path: any) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val: any, key: number) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: any, path: any) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};


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

            const totalPrice = allPizzas.reduce((sum: number, obj: itemType) => {
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


        case "INCREMENT_CART_ITEM": {

            const newObjItems = [
                ...state.itemsCart[action.payload],
                state.itemsCart[action.payload][0]
            ];
            console.log(newObjItems)


            const newItems = {
                ...state.itemsCart,

                [action.payload]: {
                    itemsCart: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)

                    //     newObjItems.reduce((sum: number, obj: any) => {
                    //     return obj.price + sum
                    // }, 0)
                }
            };

            const totalCount = newObjItems.length
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            debugger

            return {
                ...state,
                // @ts-ignore
                itemsCart: newItems,
                // @ts-ignore
                totalPrice,
                totalCount
            }
        }
        case 'CLEAR_CART':
            return {totalPrice: 0, totalCount: 0, itemsCart: {}};


        default:
            return state;
    }
}

