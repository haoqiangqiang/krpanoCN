import { createContext, useContext, useReducer } from 'react'
import initState from '../states'
import { AppDispatch, reducer } from '../reducer';

export const AppContext = createContext<{ state: typeof initState; dispatch: AppDispatch }>({
    state: initState,
    dispatch: () => { },
})

const WithProviders = (Component: React.ComponentType) => (props: any) => {
    const [providers, dispatch] = useReducer(reducer, initState)

    return (
        <AppContext.Provider
            value={{
                state: providers,
                dispatch,
            }}
        >
            <Component {...props} />
        </AppContext.Provider>
    )
}

export const useAppState = () => useContext(AppContext).state
export const useDispatch = () => useContext(AppContext).dispatch

export default WithProviders