import {instance} from "../../../../base-url";

export interface IForgotData {

}

export const ForgotAPI = {
    forgot(email: string) {
        return instance.post<IForgotData>("auth/forgot", {
            email: email, // кому восстанавливать пароль
            from: "test-front-admin <ai73a@yandex.by>",
            // можно указать разработчика фронта)
            message: `
    <div style="background-color: lime; padding: 15px">
    password recovery link: 
    <a href='http://localhost:3001/#/set-new-password/$token$'>
link</a>
    </div>
` // хтмп-письмо, вместо $token$ бэк вставит токен
        })
    }
};
