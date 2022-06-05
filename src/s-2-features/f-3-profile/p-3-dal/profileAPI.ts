import {instance} from "../../../base-url";

export const profileAPI = {
    updateProfile() {
        // return instance.put()
    },
    logout() {
        return instance.delete("auth/me")
    }
};
