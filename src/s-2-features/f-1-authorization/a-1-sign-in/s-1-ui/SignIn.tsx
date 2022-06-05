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
                console.log(res.data)


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
                           variant="standard"
                           onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <TextField type="text"
                           name={"password"}
                           placeholder={"enter your password"}
                           value={password}
                           variant="standard"
                           onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <FormControlLabel control={
                    <Checkbox name={"rememberMe"}
                              checked={rememberMe}
                              onChange={(e) => {
                                  setRememberMe(e.currentTarget.checked)
                              }}/>}
                                  label="remember me"
                                  sx={{width: "200px"}}

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

export const SignInStyled = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 10px;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 413px;
    height: 600px;
    gap: 40px;

    input {
      padding: 10px;
    }
  }
`


export default SignIn;
