import {userType} from "../reducers/userReducer";

export type SetUserType = ReturnType<typeof setUser>
export type LogoutType = ReturnType<typeof logout>
export type UserActionType = SetUserType | LogoutType

export const setUser = (user: userType ) =>
    ({type: 'SET_USER', user} as const);

export const logout = () =>
    ({type: 'LOGOUT'} as const)