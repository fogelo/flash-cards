import {instance} from "../../../../base-url";

export interface ISignInData {

}

export const SignInAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post("auth/login", {email, password, rememberMe})
    }
};
