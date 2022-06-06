export const profileInitialState = {
    email: "",
    name: "",
    avatar: "",
};

export type ProfileInitStateType = typeof profileInitialState

export const profileReducer = (state: ProfileInitStateType = profileInitialState, action: ProfileActionType) => {
    switch (action.type) {
        case "profile/set-profile":
            return {...state, ...action.payload}
        default:
            return state;

    }
};

export const setProfile = (payload: PayloadType) => ({
    type: "profile/set-profile",
    payload
} as const);


//types
type PayloadType = {
    email: string;
    name: string;
    avatar?: string;
}
type ProfileActionType = ReturnType<typeof setProfile>