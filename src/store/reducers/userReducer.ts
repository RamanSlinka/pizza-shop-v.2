import {UserActionType} from "../actions/user";

export type userType = {
    email?: string
    password?: string
    role?:  string
    // name: string
}
type initialStateType = {
    currentUser?:  userType
    isAuth: boolean
}

const initialState = {
    currentUser : {},
    isAuth : false
}

export default function userReducer  (state= initialState, action: UserActionType): initialStateType {
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

