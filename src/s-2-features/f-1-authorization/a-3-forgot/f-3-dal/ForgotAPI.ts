import {instance} from "../../../../base-url";

export interface IForgotData {

}

export const ForgotAPI = {
    forgot(email: string) {
        return instance.post("auth/forgot", {
            email: email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `
    <div style="background-color: lime; padding: 15px">
        password recovery link: 
        <a href='http://localhost:3001/#/set-new-password/$token$'>link</a>
    </div>
`
        })
    },
    setNewPass(password: string, resetPasswordToken: string) {
        return instance.post("auth/set-new-password", {password, resetPasswordToken})
    }
};
