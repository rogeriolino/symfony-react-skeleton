import React from 'react'
import { User } from './models'

export type AppState = {
    loading: boolean
    isAuthenticated: boolean
    user?: User|null
    token?: string|null
}

const initialState: AppState = {
    loading: false,
    isAuthenticated: false
}

export type Action =
    | { type: 'loading', loading: boolean }
    | { type: 'login', user: User, token: string }
    | { type: 'refresh', user: User, token: string }
    | { type: 'logout' }


const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
      case 'login':
        return {
          ...state,
          isAuthenticated: true,
          user: action.user,
          token: action.token
        }
      default:
        return state;
    }
};
  
export type ContextType = {
    state: AppState
    dispatch: React.Dispatch<Action>
}

export const AppContext = React.createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

export const AppProvider: React.FC<{}> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const Context = React.createContext<ContextType>({state, dispatch})

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {state.loading && (<>
                <span>Proposital loading</span>
            </>)}
            {!state.loading && children}
        </AppContext.Provider>
    )
}
