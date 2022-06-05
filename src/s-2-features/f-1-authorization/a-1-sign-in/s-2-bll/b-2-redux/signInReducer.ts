import {ISignInState, signInInitialState} from "./signInInitialState";
import {ISignInActions, SIGN_IN} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions): ISignInState => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignIn: action.isSignIn}
        default:
            return state;
    }
};
