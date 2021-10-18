import { itemType} from "../actions/pizzas";
import {AddPizzaToCartActionType} from "../actions/cart";

export type newItemsType = {
    id: number
    item:  itemType
}

type initialStateType = {
    items: {} | Array<newItemsType>
  //  newItems: {} | Array<newItemsType>
    totalPrice: number
    totalCount: number
}


const initialState: initialStateType = {
    items: {},
   // newItems: {},
    totalPrice: 0,
    totalCount: 0
}

export default function cart(state: any = initialState, action: AddPizzaToCartActionType): initialStateType {
    switch (action.type) {
        case  'ADD_PIZZA_CART':
            const newItems = {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id], action.payload],
                };


            console.log(state.items);
            console.log(newItems);
           // debugger
            const allPizzas = [].concat.apply([], Object.values(newItems));
            console.log(allPizzas)

            const totalPrice = allPizzas.reduce((sum: number, obj: any) => {
                return  obj.obj.price + sum
            }, 0);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            };

        default:
            return state;
    }
}
//
// const getTotalPrice = (arr: any) => arr.reduce((sum: any, obj: any) => obj.price + sum, 0);
//
// const _get = (obj: any, path:any ) => {
//     const [firstKey, ...keys] = path.split('.');
//     return keys.reduce((val:any, key:any) => {
//         return val[key];
//     }, obj[firstKey]);
// };
//
// const getTotalSum = (obj:itemType, path:any) => {
//     return Object.values(obj).reduce((sum, obj) => {
//         const value = _get(obj, path);
//         return sum + value;
//     }, 0);
// };
//
// export default function cart  (state: any = initialState, action: AddPizzaToCartActionType): any  {
//     switch (action.type) {
//         case 'ADD_PIZZA_CART': {
//             const currentPizzaItems = !state.items[action.payload.id]
//                 ? [action.payload]
//                 : [...state.items[action.payload.id].items, action.payload];
//
//             const newItems = {
//                 ...state.items,
//                 [action.payload.id]: {
//                     items: currentPizzaItems,
//                     totalPrice: getTotalPrice(currentPizzaItems),
//                 },
//             };
//
//             const totalCount = getTotalSum(newItems, 'items.length');
//             const totalPrice = getTotalSum(newItems, 'totalPrice');
//
//             return {
//                 ...state,
//                 items: newItems,
//                 totalCount,
//                 totalPrice,
//             };
//         }
//         default:
//            return state;
//      }
//  }