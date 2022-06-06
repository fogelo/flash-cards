import React, {MouseEvent, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {PROFILE_PATH, RECOVER_PASSWORD_PATH, REGISTER_PATH, SIGN_IN_PATH} from "../../../../s-1-main/m-1-ui/Routing";
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import styled from "styled-components";
import {SignInAPI} from "../../a-1-sign-in/s-3-dal/SignInAPI";
import {setIsLoggedIn} from "../../../../s-1-main/m-2-bll/appReducer";
import {setProfile} from "../../../f-3-profile/p-2-bll/b-2-redux/profileReducer";
import {ForgotAPI} from "../f-3-dal/ForgotAPI";
import {useDispatch} from "react-redux";
import {setRecoveryEmail} from "../f-2-bll/b-2-redux/forgotReducer";

interface IForgotProps {

}

const Forgot: React.FC<IForgotProps> = (
    {}
) => {
    const [email, setEmail] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const buttonOnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        ForgotAPI.forgot(email)
            .then(res => {
                dispatch(setRecoveryEmail(email))
                navigate(RECOVER_PASSWORD_PATH)
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
                <Button type={"submit"}
                        onClick={buttonOnClickHandler}
                        variant="contained"
                >
                    send instructions
                </Button>
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
    gap: 20px;

    input {
      padding: 10px;
    }
  }
`

export default Forgot;
