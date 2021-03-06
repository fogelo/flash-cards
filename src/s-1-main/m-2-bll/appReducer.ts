const initState = {
    isAppInitialized: false,
    isLoggedIn: false,
    errorApp: "",
    isLoading: false
}

type AppStateType = typeof initState


export const appReducer = (state: AppStateType = initState, action: AppActionType) => {
    switch (action.type) {
        case "app/set-app-initialized":
            return {...state, isAppInitialized: action.isAppInitialized}
        case "app/set-is-logged-in":
            return {...state, isLoggedIn: action.isLoggedIn}
        case "app/set-app-error":
            return {...state, errorApp: action.errorApp}
        case "app/set-is-loading":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

// {...state, {...action.payload}}}
// actions
export const setAppInitialized = (isAppInitialized: boolean) => ({
    type: "app/set-app-initialized",
    isAppInitialized
} as const)

export const setIsLoggedIn = (isLoggedIn: boolean) => ({
    type: "app/set-is-logged-in",
    isLoggedIn
} as const)

export const setAppError = (errorApp: string) => ({
    type: "app/set-app-error",
    errorApp
} as const)
export const setIsLoading = (isLoading: boolean) => ({
    type: "app/set-is-loading",
    isLoading
} as const)

//types
type AppActionType =
    ReturnType<typeof setAppInitialized>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setIsLoading>