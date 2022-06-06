import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../s-1-main/m-2-bll/store";
import {ProfileInitStateType} from "../p-2-bll/b-2-redux/profileReducer";
import defaultAvatar from "../../../assets/img/default-user.png"
import {Avatar, TextField} from "@mui/material";
import {profileAPI} from "../p-3-dal/profileAPI";
import {setIsLoggedIn} from "../../../s-1-main/m-2-bll/appReducer";
import {useNavigate} from "react-router-dom";
import {SIGN_IN_PATH} from "../../../s-1-main/m-1-ui/Routing";

interface IProfileProps {

}

const Profile: React.FC<IProfileProps> = () => {
    const profile = useSelector<IAppStore, ProfileInitStateType>(state => state.profile)
    const isLoggedIn = useSelector<IAppStore, boolean>(state => state.app.isLoggedIn)
    const [editMode, setEditMode] = useState(false)

    const [avatar, setAvatar] = useState(profile.avatar)
    const [name, setName] = useState(profile.name)
    const [email, setEmail] = useState(profile.email)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        profileAPI.logout()
            .then(res => {
                dispatch(setIsLoggedIn(false))
                navigate(SIGN_IN_PATH)
            })
    }

    const editProfile = (name: string, avatar: string) => {
        profileAPI.updateProfile(name, avatar)
            .then(res => {
                console.log(res)
                setEditMode(!editMode)
            })
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate(SIGN_IN_PATH)
        }
    }, [])
    return (
        <ProfileStyled>
            <div className={"left-content-wrapper"}>
                <button onClick={logout}>logout</button>
                {editMode ?
                    <div className={"left-content"}>
                        <div>
                            <Avatar
                                alt="Remy Sharp"
                                src={avatar ? avatar : defaultAvatar}
                                sx={{width: 100, height: 100}}
                            />
                        </div>
                        <TextField type="text"
                                   value={name}
                                   onChange={e => setName(e.currentTarget.value)}
                                   variant={"standard"}
                                   label={"enter your name"}
                        />
                        <TextField type="text"
                                   value={avatar}
                                   onChange={e => setAvatar(e.currentTarget.value)}
                                   variant={"standard"}
                                   label={"enter avatar url"}
                        />
                        <div>
                            <button onClick={() => editProfile(name, avatar)}>save</button>
                            <button onClick={() => setEditMode(!editMode)}>cancel</button>
                        </div>
                    </div>
                    :
                    <div className={"left-content"}>
                        <div>
                            <Avatar
                                alt="Remy Sharp"
                                src={avatar ? avatar : defaultAvatar}
                                sx={{width: 100, height: 100}}
                            />
                        </div>
                        <div>name: {name}</div>
                        <div>e-mail: {email}</div>
                        <button onClick={() => setEditMode(!editMode)}>edit profile</button>
                    </div>
                }</div>
        </ProfileStyled>
    );
};

const ProfileStyled = styled.div`
  .left-content-wrapper {
    padding: 10px;
    background: #D9D9F1;
    width: 243px;

    .left-content {
      display: flex;
      gap: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

`

export default Profile;
