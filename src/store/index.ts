import {applyMiddleware, combineReducers, createStore} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {PizzasActionsType} from "./actions/pizzas";
import {FiltersActionsType} from "./actions/filters";
import cart from "./reducers/cart";

const rootReducer = combineReducers({
    filters, pizzas, cart
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//
 export type AppRootStateType = ReturnType<typeof rootReducer>
//
export type AppActionType =
    PizzasActionsType | FiltersActionsType
 //   | ActionsType
//     | TodolistsActionsType
//     | TasksActionsType
//     | LoginActionsType;
//
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>