import React from "react"
import '../css/app.scss'
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Switch, Route, RouteProps, Redirect } from 'react-router-dom'
import { AppProvider, AppContext } from './context'
import { Menu } from './components/Menu'
import { 
    HomePage,
    NotFoundPage,
} from './pages'

type Props = {}

const App: React.FC<Props> = () => {
    return (
        <AppProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Menu
                        brand="Symfony+React" />
                    <Switch>
                        <Route path="/" exact={true}>
                            <HomePage/>
                        </Route>
                        <Route path="*">
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </HelmetProvider>
        </AppProvider>
    )
}

const LogoutRoute: React.FC<RouteProps> = () => {
    const { dispatch } = React.useContext(AppContext)
    React.useEffect(() => {
        dispatch({ type: 'logout' })
    }, [])

    return <></>
}

const PrivateRoute: React.FC<RouteProps> = ({ children, ...props }) => {
    const { state } = React.useContext(AppContext)
    return (
        <Route
            {...props}
            render={({ location }) =>
                state.isAuthenticated ? (
                children
            ) : (
                <Redirect
                    to={{
                    pathname: '/login',
                    state: { from: location }
                    }}
                />
            )
        }
        />
    )
}

export default App