import {userType} from "../reducers/user";
import axios from "axios";
import {AppThunkType} from "../index";
import App from "../../App";

export type SetUserType = ReturnType<typeof setUser>
export type LogoutType = ReturnType<typeof logout>
export type UserActionType = SetUserType | LogoutType

export const setUser = (user: userType ) =>
    ({type: 'SET_USER', user} as const);

export const logout = () =>
    ({type: 'LOGOUT'} as const)





export const registration = async (email: string, password: number) => {
    try {
        const response = await axios.post(`https://pizza-shop--server.herokuapp.com/api/registration`, {
            email, password
        })
        console.log(response.data.user)
        alert(response.data.message)
    } catch (e) {
        console.log(e)
    }

}

export const login = (email: string, password: string) : AppThunkType=> {
    return async dispatch => {
        try {
            const response = await axios.post(`https://pizza-shop--server.herokuapp.com/api/login`, {
                email, password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data.user)
        } catch (e) {
            alert(e)
            console.log(e)
        }
    }
}



export const auth =  ():AppThunkType => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://pizza-shop--server.herokuapp.com/api/auth`,
                {headers: {Authorisation: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            console.log(response.data.user)
            localStorage.setItem('token', response.data.token)

        } catch (error) {
            localStorage.removeItem('token')
        }
    }
}