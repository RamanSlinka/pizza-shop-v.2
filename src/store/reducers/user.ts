import {UserActionType} from "../actions/auth";

export type userType = {
    email?: string
    password?: string
    role?: string
    name?: string
}
export type UserStateType = {
    currentUser?: userType
    isAuth: boolean
}

const initialState = {
    currentUser: {},
    isAuth: false
}

export default function user(state = initialState, action: UserActionType): UserStateType {
    switch (action.type) {
        case 'SET_USER' :
            return {
                ...state, currentUser: action.user,
                isAuth: true
            }
        case 'LOGOUT':
            return {
                ...state, currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}

