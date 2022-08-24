import user, {UserStateType, userType} from './user';
import {logout, setUser} from "../actions/auth";

const newUser:userType = {
    email: 'test@user.com',
    password: '12345',
    name: 'Tester',
}

const defaultState: UserStateType = {
    currentUser: {},
    isAuth: false
}

test('User should be logged/checked', () => {
    const action = setUser(newUser)
    const newState = user(defaultState,action)

    expect(newState.currentUser.name).toBe('Tester')
    expect(newState.currentUser.email).toBe('test@user.com')
    expect(newState.currentUser).not.toBe(undefined)

    expect(newState.isAuth).toBe(true)
})

test('User must logOut', () => {
    const action = logout()
    const newState = user(defaultState, action)

    expect(newState.isAuth).toBe(false)
    expect(newState.currentUser).toStrictEqual({})
})



