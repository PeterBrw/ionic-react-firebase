import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Login from './pages/Login'
import Register from './pages/Register'
import React, { useEffect, useState } from 'react'
import { getCurrentUser } from './firebaseConfig'
import { useDispatch } from 'react-redux'
import { setUserState } from './redux/actions'
import Search from './pages/Search'
import { Repos } from './pages/Repos'
import SearchOrganization from './pages/SearchOrganization'
import Settings from './pages/Settings'
import SideMenu from './components/SideMenu/SideMenu'

setupIonicReact()

const RoutingSystem: React.FC = () => {
    const [isAuthed, setIsAuthed] = useState<boolean>(false)

    useEffect(() => {
        if (sessionStorage.getItem('isLogged') === 'true') {
            setIsAuthed(true)
        }
    }, [])

    return (
        <IonReactRouter>
            <SideMenu />
            <IonRouterOutlet id="main">
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route
                    exact
                    path="/search"
                    render={(props) => {
                        // @ts-ignore
                        return isAuthed ? <Search {...props} /> : <Login />
                    }}
                />
                <Route
                    exact
                    path="/repos"
                    render={(props) => {
                        // @ts-ignore
                        return isAuthed ? <Repos {...props} /> : <Login />
                    }}
                />
                <Route
                    exact
                    path="/search-organization"
                    render={(props) => {
                        // @ts-ignore
                        return isAuthed ? <SearchOrganization {...props} /> : <Login />
                    }}
                />
                <Route
                    exact
                    path="/settings"
                    render={(props) => {
                        // @ts-ignore
                        return isAuthed ? <Settings {...props} /> : <Login />
                    }}
                />
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useDispatch()

    useEffect(() => {
        getCurrentUser().then((user: any) => {
            if (user) {
                dispatch(setUserState(user.email))
                // window.history.replaceState({}, '', '/dashboard')
            } else {
                // window.history.replaceState({}, '', '/home')
            }
            setLoading(false)
        })
        if (!localStorage.getItem('repos')) {
            localStorage.setItem('repos', JSON.stringify(100))
        }
    }, [])

    return <IonApp>{loading ? <IonSpinner /> : <RoutingSystem />}</IonApp>
}

export default App
