import React, {MouseEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {SignInAPI} from "../s-3-dal/SignInAPI";
import styled from "styled-components";
import {Alert, Button, Checkbox, FormControlLabel, LinearProgress, Snackbar, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../s-1-main/m-2-bll/store";
import {FORGOT_PATH, PROFILE_PATH, REGISTER_PATH} from "../../../../s-1-main/m-1-ui/Routing";
import {setProfile} from "../../../f-3-profile/p-2-bll/b-2-redux/profileReducer";
import {setIsLoading, setIsLoggedIn} from "../../../../s-1-main/m-2-bll/appReducer";

interface ISignInProps {

}

const SignIn: React.FC<ISignInProps> = ({}) => {
    const [email, setEmail] = useState("fogelo@yandex.ru")
    const [password, setPassword] = useState("12345678")
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [error, setError] = useState(false)

    const isLoggedIn = useSelector<IAppStore, boolean>(state => state.app.isLoggedIn)
    const isLoading = useSelector<IAppStore, boolean>(state => state.app.isLoading)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const buttonOnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(setIsLoading(true))
        SignInAPI.login(email, password, rememberMe)
            .then((res) => {
                dispatch(setIsLoggedIn(true))
                dispatch(setProfile({
                    email: res.data.email,
                    name: res.data.name,
                    avatar: res.data.avatar
                }))
                dispatch(setIsLoading(false))
            })
            .catch((error) => {
                setError(true)
                dispatch(setIsLoading(false))
            })
    }
    useEffect(() => {
        if (isLoggedIn) {
            navigate(PROFILE_PATH)
        }
    }, [isLoggedIn])

    return (
        <>
            {
                isLoading
                    ? <LinearProgress color="secondary"/>
                    : ""
            }
            <SignInStyled>
                <h3>Sign In</h3>
                <form name={"login"}>
                    <TextField type="text"
                               name={"email"}
                               label={"email"}
                               value={email}
                               variant="standard"
                               onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <TextField type="text"
                               name={"password"}
                               label={"password"}
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
                </form>
                <Button type={"submit"}
                        onClick={() => navigate(REGISTER_PATH)}
                        variant="contained"
                        color={"success"}
                        fullWidth
                >
                    sign up
                </Button>
                <Button onClick={() => navigate(FORGOT_PATH)}>
                    Forget Password
                </Button>
            </SignInStyled>
            <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
                <Alert severity="error" sx={{width: "100%"}}>
                    Not correct password or email /ᐠ-ꞈ-ᐟ\\"
                </Alert>
            </Snackbar>
        </>

    );
};

export const SignInStyled = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    min-height: 400px;
    gap: 20px;

    input {
      padding: 10px;
    }
  }
`


export default SignIn;
