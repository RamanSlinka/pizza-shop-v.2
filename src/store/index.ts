import {applyMiddleware, combineReducers, createStore} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {PizzasActionsType} from "./actions/pizzas";
import {SetFiltersActionsType} from "./actions/filters";

const rootReducer = combineReducers({
    filters, pizzas
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//
 export type AppRootStateType = ReturnType<typeof rootReducer>
//
export type AppActionType =
    PizzasActionsType | SetFiltersActionsType
 //   | ActionsType
//     | TodolistsActionsType
//     | TasksActionsType
//     | LoginActionsType;
//
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>