export interface IRegisterState {
    success: boolean
    error: string
    loading: boolean
}

export const registerInitialState: IRegisterState = {
    success: false,
    loading: false,
    error: ""
};


export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case "REGISTER/LOADING":
            return {...state, loading: action.isLoading}
        case "REGISTER/SUCCESS":
            return {...state, success: action.isSuccess}
        case "REGISTER/ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
};

export const setErrorRegister = (error: string) => ({type:  "REGISTER/ERROR", error} as const);
export const setSuccessRegister = (isSuccess: boolean) => ({type: "REGISTER/SUCCESS", isSuccess} as const)
export const setLoadingRegister = (isLoading: boolean) => ({type: "REGISTER/LOADING", isLoading} as const)

// types
export type IRegisterActions =
    ReturnType<typeof setErrorRegister>
    | ReturnType<typeof setSuccessRegister>
    | ReturnType<typeof setLoadingRegister>