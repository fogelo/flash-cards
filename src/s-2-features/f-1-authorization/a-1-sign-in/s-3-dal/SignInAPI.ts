import {instance} from "../../../../base-url";

export interface ISignInData {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}


export const SignInAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ISignInData>("auth/login", {email, password, rememberMe})
    }
};
