import {LoaderActionType} from "../actions/loader";

export type AppInitialStateType = {
    loader: boolean
}

const initialState = {
    loader: false
}

export default function loader(state = initialState, action: LoaderActionType): AppInitialStateType {
    switch (action.type) {
        case 'SHOW_LOADER': return {...state, loader: true}
        case 'HIDE_LOADER': return {...state, loader: false}

        default: return state
}}