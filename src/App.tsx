import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Setting/Setting';
import {Users} from './components/Users/Users';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Friends} from "./components/Friends/Friends";
import {ProfileActionType, ProfilePageType} from "./Redux/profile-reducer";
import {DialogsActionType, DialogsPageType} from "./Redux/dialogs-reducer";
import {SidebarType} from "./Redux/sidebar-reducer";

type AppPropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Array<SidebarType>
    dispatch: (action: ProfileActionType | DialogsActionType) => void
}

const App = (props: AppPropsType) => {
    return <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar sidebar={props.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile profilePage={props.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path='/messages' render={() => <Dialogs dialogsPage={props.dialogsPage}
                                                               dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    </BrowserRouter>
};

export default App;
