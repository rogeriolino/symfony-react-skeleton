import * as React from 'react'
import { Spinner } from 'reactstrap'

export type AppState = {
    // TODO define app state type
    loading: boolean
    isAuthenticated: boolean
    user?: User|null
}

const initialState: AppState = {
    loading: true,
    isAuthenticated: false
}

export const Context = React.createContext<AppState>(initialState)

export const AppContext: React.FC<{}> = ({ children }) => {
    const [ state, setState ] = React.useState<AppState>(initialState)

    React.useEffect(() => {
        (async () => {
            // TODO perform some preload
            setTimeout(() => setState({ ...state, loading: false }), 1000)
        })()
    }, [])

    return (
        <Context.Provider value={state}>
            {state.loading && (<>
                <Spinner />
                <span>Proposital loading</span>
            </>)}
            {!state.loading && children}
        </Context.Provider>
    )
}