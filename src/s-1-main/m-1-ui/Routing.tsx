import React from "react";
import {Route, Routes} from "react-router-dom";
import Error404Page from "../../s-2-features/f-4-error404/p-1-ui/Error404Page";
import SuperComponentsPage from "../../s-2-features/f-7-super-components/SuperComponentsPage";
import SignIn from "../../s-2-features/f-1-authorization/a-1-sign-in/s-1-ui/SignIn";
import Register from "../../s-2-features/f-1-authorization/a-2-register/r-1-ui/Register";
import Profile from "../../s-2-features/f-3-profile/p-1-ui/Profile";
import Forgot from "../../s-2-features/f-1-authorization/a-3-forgot/f-1-ui/Forgot";
import RecoverPassword from "../../s-2-features/f-5-recover-password/p-1-ui/RecoverPassword";
import NewPassword from "../../s-2-features/f-6-new-password/p-1-ui/NewPassword";
import Packs from "../../s-2-features/f-8-packs/p-1-ui/Packs";

// all project paths
export const SIGN_IN_PATH = "/sign-in";

export const REGISTER_PATH = "/register";
export const FORGOT_PATH = "/forgot";
export const PROFILE_PATH = "/profile";
export const ERROR404_PATH = "/error404";
export const RECOVER_PASSWORD_PATH = "/recover-password";
export const NEW_PASSWORD_PATH = "/set-new-password/:token";
export const SUPER_COMPONENTS_PATH = "/super-components";
export const PACKS_PATH = "/packs";
//remove this comment
const Routing: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Profile/>}/>
                <Route path={SIGN_IN_PATH} element={<SignIn/>}/>
                <Route path={REGISTER_PATH} element={<Register/>}/>
                <Route path={FORGOT_PATH} element={<Forgot/>}/>
                <Route path={RECOVER_PASSWORD_PATH} element={<RecoverPassword/>}/>
                <Route path={PROFILE_PATH} element={<Profile/>}/>
                <Route path={ERROR404_PATH} element={<Error404Page/>}/>
                <Route path={NEW_PASSWORD_PATH} element={<NewPassword/>}/>
                <Route path={SUPER_COMPONENTS_PATH} element={<SuperComponentsPage/>}/>
                <Route path={PACKS_PATH} element={<Packs/>}/>
            </Routes>
        </>
    );
};

export default Routing;
