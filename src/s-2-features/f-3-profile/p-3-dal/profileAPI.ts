import {instance} from "../../../base-url";

export const profileAPI = {
    updateProfile(name: string, avatar: string) {
        return instance.put("/auth/me", {name, avatar})
    },
    logout() {
        return instance.delete("auth/me")
    }
};
