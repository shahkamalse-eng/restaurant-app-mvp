import React,{createContext,useContext,useState} from 'react';import {lightColors,darkColors} from '../theme/colors';
const ThemeContext=createContext(null);
export function ThemeProvider({children}){const[isDark,setIsDark]=useState(false);const toggleTheme=()=>setIsDark(v=>!v);return <ThemeContext.Provider value={{isDark,toggleTheme,colors:isDark?darkColors:lightColors}}>{children}</ThemeContext.Provider>}
export function useTheme(){const c=useContext(ThemeContext);if(!c)throw new Error('useTheme must be used inside ThemeProvider');return c}
