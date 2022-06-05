export const SIGN_IN_LOADING = "SIGN_IN/LOADING";
export const SIGN_IN_ERROR = "SIGN_IN/ERROR";
export const SIGN_IN_SUCCESS = "SIGN_IN/SUCCESS";

export const SIGN_IN = "SIGN_IN/SET-SIGN-IN";

interface ISignInSome {
    type: typeof SIGN_IN
    isSignIn: boolean
}

export type ISignInActions = ISignInSome;

export const setSignIn = (isSignIn: boolean): ISignInSome => ({
    type: SIGN_IN,
    isSignIn
});

