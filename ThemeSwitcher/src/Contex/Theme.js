import {useContext,createContext} from 'react'

export const ThemContext = createContext({
    themeMode :"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemProvider = ThemContext.Provider

export default function useTheme() {
    return useContext (ThemContext)
}