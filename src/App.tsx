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
import { getCurrentUser } from './filebaseConfig'
import { useDispatch } from 'react-redux'
import { setUserState } from './redux/actions'
import { Example } from './pages/Example'
import Search from './pages/Search'
import { Repos } from './pages/Repos'

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
            <IonRouterOutlet>
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
                <Route exact path="/example">
                    <Example />
                </Route>
                <Route exact path="/repos">
                    <Repos />
                </Route>
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
    }, [])

    return <IonApp>{loading ? <IonSpinner /> : <RoutingSystem />}</IonApp>
}

export default App
