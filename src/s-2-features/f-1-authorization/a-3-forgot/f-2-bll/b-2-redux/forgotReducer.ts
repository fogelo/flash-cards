export interface IForgotState { // blank

}

export const forgotInitialState: IForgotState = { // blank

};

export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT: { // blank
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};


export const FORGOT_LOADING = 'FORGOT/LOADING';
export const FORGOT_ERROR = 'FORGOT/ERROR';
export const FORGOT_SUCCESS = 'FORGOT/SUCCESS';

export const FORGOT = 'FORGOT/SOME';

interface IForgotSome { // blank
    type: typeof FORGOT;

}

export type IForgotActions = IForgotSome;

export const forgotSome = (): IForgotSome => ({ // blank
    type: FORGOT,

});

