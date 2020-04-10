import * as React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppContext } from './Context'
import { Menu } from './components/Menu'
import { 
    HomePage,
    IconsPage,
    NotFoundPage,
} from './pages'

type Props = {}

export const App: React.FC<Props> = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <Menu
                    brand="Symfony+React" />
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/icons" exact={true} component={IconsPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </AppContext>
    )
}