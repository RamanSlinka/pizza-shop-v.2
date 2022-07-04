import {applyMiddleware, combineReducers, createStore} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {PizzasActionsType} from "./actions/pizzas";
import {FiltersActionsType} from "./actions/filters";
import {AddPizzaToCartActionType} from "./actions/cart";
import user from "./reducers/user";
import {UserActionType} from "./actions/auth";
import loader from "./reducers/loader";
import {LoaderActionType} from "./actions/loader";

const rootReducer = combineReducers({
    filters, pizzas, cart, user, appReducer: loader
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//
 export type AppRootStateType = ReturnType<typeof rootReducer>
//
export type AppActionType =
    PizzasActionsType | FiltersActionsType | AddPizzaToCartActionType | UserActionType | LoaderActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>