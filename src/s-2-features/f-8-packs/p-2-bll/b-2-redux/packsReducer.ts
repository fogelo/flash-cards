import {PackType} from "../../p-3-dal/packsAPI";

export const packsInitialState = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 2,
    pageCount: 10,
    token: "02166430-e665-11ec-91a4-a3805f29b099",
    tokenDeathTime: 1654619004275
};

export type PacksInitStateType = typeof packsInitialState

export const packsReducer = (state: PacksInitStateType = packsInitialState, action: PacksActionType) => {
    switch (action.type) {
        case "packs/set-packs":
                return {...state, ...action.payload}
        default:
            return state;
    }
};

//actions
export const setPacks = (payload: PayloadType) => ({
    type: "packs/set-packs",
    payload
} as const);


//types
type PayloadType = PackType
type PacksActionType = ReturnType<typeof setPacks>