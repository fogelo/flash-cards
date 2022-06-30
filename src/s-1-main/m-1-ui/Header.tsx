import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {
    SIGN_IN_PATH, REGISTER_PATH, FORGOT_PATH,
    PROFILE_PATH, ERROR404_PATH, RECOVER_PASSWORD_PATH, NEW_PASSWORD_PATH, SUPER_COMPONENTS_PATH, PACKS_PATH
} from "./Routing";
import styled from "styled-components";

const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>
            <NavLink to={REGISTER_PATH}>register</NavLink>
            <NavLink to={FORGOT_PATH}>forgot</NavLink>
            <NavLink to={PROFILE_PATH}>profile</NavLink>
            <NavLink to={ERROR404_PATH}>error404</NavLink>
            <NavLink to={RECOVER_PASSWORD_PATH}>recover password</NavLink>
            <NavLink to={NEW_PASSWORD_PATH}>new password</NavLink>
            <NavLink to={SUPER_COMPONENTS_PATH}>super components</NavLink>
            <NavLink to={PACKS_PATH}>packs</NavLink>
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`