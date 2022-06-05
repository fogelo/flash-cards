import React, {useState} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {IAppStore} from "../../../s-1-main/m-2-bll/store";
import {ProfileInitStateType} from "../p-2-bll/b-2-redux/profileReducer";
import defaultAvatar from "../../../assets/img/default-user.png"
import {Avatar} from "@mui/material";

interface IProfileProps {

}

const Profile: React.FC<IProfileProps> = () => {
    const profile = useSelector<IAppStore, ProfileInitStateType>(state => state.profile)
    const [editMode, setEditMode] = useState(false)

    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <ProfileStyled>
            <div className={"left-content"}>
                {editMode ?
                    <div className={"left-content"}>
                        <div>
                            <Avatar
                                alt="Remy Sharp"
                                src={profile.avatar ? profile.avatar : defaultAvatar}
                                sx={{width: 100, height: 100}}
                            />
                        </div>
                        <input type="text" value={name} onChange={e => setName(e.currentTarget.value)}/>
                        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                        <div>
                            <button onClick={() => setEditMode(!editMode)}>save</button>
                            <button onClick={() => setEditMode(!editMode)}>cancel</button>
                        </div>
                    </div>
                    :
                    <div className={"left-content"}>
                        <div>
                            <Avatar
                                alt="Remy Sharp"
                                src={profile.avatar ? profile.avatar : defaultAvatar}
                                sx={{width: 100, height: 100}}
                            />
                        </div>
                        <div>name: {profile.name}</div>
                        <div>e-mail: {profile.email}</div>
                        <button onClick={() => setEditMode(!editMode)}>edit profile</button>
                    </div>
                }</div>


        </ProfileStyled>
    );
};

const ProfileStyled = styled.div`
  .left-content {
    width: 243px;
    height: 216px;
    background: #D9D9F1;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default Profile;
