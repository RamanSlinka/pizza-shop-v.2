import {applyMiddleware, combineReducers, createStore} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {PizzasActionsType} from "./actions/pizzas";
import {FiltersActionsType} from "./actions/filters";
import {AddPizzaToCartActionType} from "./actions/cart";

const rootReducer = combineReducers({
    filters, pizzas, cart
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//
 export type AppRootStateType = ReturnType<typeof rootReducer>
//
export type AppActionType =
    PizzasActionsType | FiltersActionsType | AddPizzaToCartActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>