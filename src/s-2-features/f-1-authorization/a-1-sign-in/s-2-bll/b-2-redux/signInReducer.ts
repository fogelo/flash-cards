export const signInInitialState = {
    isSignIn: false,
    signInError: false
};

export const signInReducer = (state: SignInStateType = signInInitialState, action: SignInActionType): SignInStateType => {
    switch (action.type) {
        case "sign-in/set-sign-in":
            return {...state, isSignIn: action.isSignIn}
        default:
            return state;
    }
};


//actions
export const setSignIn = (isSignIn: boolean) => ({
    type: "sign-in/set-sign-in",
    isSignIn
} as const);



// types
type SignInActionType = ReturnType<typeof setSignIn>

type SignInStateType = typeof signInInitialState