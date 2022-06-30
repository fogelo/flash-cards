import {instance} from "../../../base-url";

export const packsAPI = {
    getPacks(payload?: PayloadType) {
        return instance.get<PackType>(`/cards/pack`, {
                params: {
                    pageCount: 10,
                    ...payload
                }
            }
        )
    },
    addPack(name?: string) {
        return instance.post("/cards/pack", {
            cardsPack: {
                name: name, // если не отправить будет таким
                deckCover: "url or base64", // не обязателен
                private: false // если не отправить будет такой
            }
        })
    },
    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
    }
};


//types

export type PackType = {
    cardPacks: CardType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

type CardType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

type PayloadType = {
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: "0updated" | "1updated" | "0created" | "1created" | "0cardsCount" | "1cardsCount" | "0name" | "1name",
    page?: number,
    pageCount?: number
}