import React, {MouseEvent, useEffect, useState} from "react";
import {RegisterAPI} from "../r-3-dal/RegisterAPI";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../s-1-main/m-2-bll/store";
import {useNavigate} from "react-router-dom";
import {SIGN_IN_PATH} from "../../../../s-1-main/m-1-ui/Routing";
import {SignInStyled} from "../../a-1-sign-in/s-1-ui/SignIn";
import {Button, TextField} from "@mui/material";
import {
    IRegisterState,
    setErrorRegister,
    setLoadingRegister,
    setSuccessRegister
} from "../r-2-bll/b-2-redux/registerReducer";

interface IRegisterProps {

}

const Register: React.FC<IRegisterProps> = ({}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const {loading, success, error} = useSelector<IAppStore, IRegisterState>(state => state.register)
    const navigate = useNavigate()

    const buttonOnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(setLoadingRegister(true))
        RegisterAPI.register(email, password)
            .then((res) => {
                dispatch(setSuccessRegister(true))
                dispatch(setLoadingRegister(false))
                navigate(SIGN_IN_PATH)
            })
            .catch((error) => {
                dispatch(setLoadingRegister(false))
                dispatch(setErrorRegister(error.response.data.error))
            })
    }

    return (
        <SignInStyled>
            <form name={"register"}>
                <TextField type="text"
                           name={"email"}
                           placeholder={"enter your email"}
                           variant="standard"
                           onChange={(e) => setEmail(e.currentTarget.value)}/>
                <TextField type="text"
                           name={"password"}
                           placeholder={"enter your password"}
                           variant="standard"
                           onChange={(e) => setPassword(e.currentTarget.value)}/>
                <Button type={"submit"}
                        onClick={buttonOnClickHandler}
                        variant={"contained"}
                >
                    sign up
                </Button>
                {
                    loading ? <div>loading...</div> : error ? <div>{error}</div> : ""
                }
            </form>
        </SignInStyled>
    );
};


export default Register;
