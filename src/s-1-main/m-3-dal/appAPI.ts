import {instance} from "../../base-url"

interface IMeResponseData {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export const appAPI = {
    me() {
        return instance.post<IMeResponseData>("auth/me")
    }
};
