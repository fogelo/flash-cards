import React, {MouseEvent, useState} from "react";
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, REGISTER_PATH} from "../../../../s-1-main/m-1-ui/Routing";
import {
    setErrorRegister,
    setLoadingRegister,
    setSuccessRegister
} from "../../a-2-register/r-2-bll/b-2-redux/registerActions";
import {RegisterAPI} from "../../a-2-register/r-3-dal/RegisterAPI";
import {SignInAPI} from "../s-3-dal/SignInAPI";
import styled from "styled-components";
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";

interface ISignInProps {

}

const SignIn: React.FC<ISignInProps> = ({}) => {
    const [email, setEmail] = useState("a@yandex.ru")
    const [password, setPassword] = useState("12345678")
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const buttonOnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        SignInAPI.login(email, password, rememberMe)
            .then((res) => {
                console.log(res)

            })
            .catch((error) => {

            })
    }

    return (
        <SignInStyled>
            <form name={"login"}>
                <TextField type="text"
                           name={"email"}
                           placeholder={"enter your email"}
                           value={email}
                           onChange={(e) => setEmail(e.currentTarget.value)}/>
                <TextField type="text"
                           name={"password"}
                           placeholder={"enter your password"}
                           value={password}
                           onChange={(e) => setPassword(e.currentTarget.value)}/>
                <FormControlLabel control={
                    <Checkbox name={"rememberMe"}
                              checked={rememberMe}
                              onChange={(e) => {
                                  setRememberMe(e.currentTarget.checked)
                              }}/>}
                                  label="remember me"
                                  sx={{display: "block"}}

                />
                <Button type={"submit"}
                        onClick={buttonOnClickHandler}
                        variant="contained"
                >
                    sign in
                </Button>
                {/*{*/}
                {/*    loading ? <div>loading...</div> : error ? <div>{error}</div> : ""*/}
                {/*}*/}
            </form>
        </SignInStyled>
    );
};

const SignInStyled = styled.div`
  background-color: white;
  max-width: 500px;
  padding:  20px;
  form {
    display: flex;
    flex-direction: column;
  }
`


export default SignIn;
