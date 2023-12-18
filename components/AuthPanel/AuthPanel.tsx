'use client'

import { login, logout } from "@/api/auth";
import { IUser } from "@/interfaces/users";
import { $auth, setIsAuth, setUser } from "@/store/auth";
import { Button } from "@mui/material";
import { useStore } from "@nanostores/react";

export default function AuthPanel() {

    const handleLogin = () => {
        login('test', 'test').then(res => {
            if (res.status === 'success') {
                setUser(res.user)
                setIsAuth(true)
            }
        })
    }

    const handleLogout = () => {
        logout().then(res => {
            setUser({} as IUser)
            setIsAuth(false)   
        })
    }

    const isAuth = useStore($auth).isAuth
    const user = useStore($auth).user
    return(
        <div style={{ position: 'absolute', top: "5px", right: '20px'}}>
            {isAuth ? (
                <div>
                    <p>Hello, {user?.name}</p>
                    <Button variant="contained" onClick={handleLogout} fullWidth sx={{ mt: 1}}>Выйти</Button>
                </div>
            ) : (
                <Button variant="contained" onClick={handleLogin}>Авторизация</Button>
            )}
        </div>
    )
}