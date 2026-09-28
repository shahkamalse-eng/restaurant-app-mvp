import React,{createContext,useContext,useState} from 'react';
const AuthContext=createContext(null);
export function AuthProvider({children}){const[user,setUser]=useState(null);const login=u=>setUser(u);const logout=()=>setUser(null);return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>}
export function useAuth(){const c=useContext(AuthContext);if(!c)throw new Error('useAuth must be used inside AuthProvider');return c}
