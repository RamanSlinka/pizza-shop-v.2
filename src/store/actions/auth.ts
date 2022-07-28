import {userType} from "../reducers/user";
import axios from "axios";
import {AppThunkType} from "../index";
import {hideLoader, showLoader} from "./loader";

export type SetUserType = ReturnType<typeof setUser>
export type LogoutType = ReturnType<typeof logout>
export type UserActionType = SetUserType | LogoutType

export const setUser = (user: userType) =>
    ({type: 'SET_USER', user} as const);

export const logout = () =>
    ({type: 'LOGOUT'} as const)


export const registration = async (name: string, email: string, password: string): Promise<void> => {
    try {
        const response = await axios.post(`https://pizza-shop--server.herokuapp.com/api/registration`, {
            name, email, password
        })
        console.log(response.data.message)
        alert(response.data.message)
    } catch (e) {
        console.log(e)
        alert(e)
    }
}

export const login = (email: string, password: string): AppThunkType => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.post(`https://pizza-shop--server.herokuapp.com/api/login`, {
                email, password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e)
            console.log(e)
        } finally {
            dispatch(hideLoader())
        }
    }
}


export const auth = (): AppThunkType => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`https://pizza-shop--server.herokuapp.com/api/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)

        } catch (error) {
            localStorage.removeItem('token')
        } finally {
            dispatch(hideLoader())
        }
    }
}