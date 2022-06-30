import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import {IAppStore} from "./s-1-main/m-2-bll/store";
import Main from "./s-1-main/m-1-ui/Main";
import {appAPI} from "./s-1-main/m-3-dal/appAPI";
import {setAppError, setAppInitialized, setIsLoggedIn} from "./s-1-main/m-2-bll/appReducer";
import {setProfile} from "./s-2-features/f-3-profile/p-2-bll/b-2-redux/profileReducer";
import {LinearProgress} from "@mui/material";

const App: React.FC = () => {
    const isAppInitialized = useSelector<IAppStore, boolean>(state => state.app.isAppInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        appAPI.me()
            .then((res) => {
                dispatch(setIsLoggedIn(true))
                dispatch(setProfile({
                    email: res.data.email,
                    name: res.data.name,
                    avatar: res.data.avatar
                }))
                dispatch(setAppInitialized(true))
            })
            .catch(error => {
                dispatch(setAppError(error.response.data.error))
                dispatch(setAppInitialized(true))
            })
    }, [])
    return (
        <div className="App">
            {!isAppInitialized
                ? <LinearProgress color="secondary"/>
                : <Main/>
            }
        </div>
    );
};

export default App;
