//action types
const SET_APP_INITIALIZED = "set-app-initialized"
const SET_APP_ERROR = "set-app-error"

const initState = {
    isAppInitialized: false,
    // isLoggedIn: false
}

type AppStateType = typeof initState


export const appReducer = (state: AppStateType = initState, action: AppActionType) => {
    switch (action.type) {
        case SET_APP_INITIALIZED:
            return {...state, isAppInitialized: action.initApp}
        default:
            return state
    }
}
// {...state, {...action.payload}}}
// actions
export const setAppInitialized = (initApp: boolean) => ({
    type: SET_APP_INITIALIZED,
    initApp
})
export const setAppError = (errorApp: string) => ({
    type: SET_APP_INITIALIZED,
    errorApp
})

//types
type AppActionType = ReturnType<typeof setAppInitialized>