import React, {MouseEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {SignInAPI} from "../s-3-dal/SignInAPI";
import styled from "styled-components";
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../s-1-main/m-2-bll/store";
import {PROFILE_PATH} from "../../../../s-1-main/m-1-ui/Routing";
import {setProfile} from "../../../f-3-profile/p-2-bll/b-2-redux/profileReducer";

interface ISignInProps {

}

const SignIn: React.FC<ISignInProps> = ({}) => {
    const [email, setEmail] = useState("a@yandex.ru")
    const [password, setPassword] = useState("12345678")
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const isLoggedIn = useSelector<IAppStore, boolean>(state => state.app.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const buttonOnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        SignInAPI.login(email, password, rememberMe)
            .then((res) => {
                dispatch(setProfile({
                    email: res.data.email,
                    name: res.data.name,
                    avatar: res.data.avatar
                }))
                navigate(PROFILE_PATH)
            })
            .catch((error) => {
            })
    }
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/profile")
        }
    }, [])

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
