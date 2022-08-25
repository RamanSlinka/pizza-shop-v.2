import loader, {AppInitialStateType} from "./loader";
import {hideLoader, showLoader} from "../actions/loader";

const defaultState: AppInitialStateType = {
    loader: false
}

test('loader can be changed to true', () => {
    const action = showLoader()
    const newState = loader(defaultState, action)

    expect(newState.loader).toBe(true)
})

test('loader can be changed to false', () => {
    const action = hideLoader()
    const newState = loader(defaultState, action)

    expect(newState.loader).toBe(false)
})