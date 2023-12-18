import { IUser } from '@/interfaces/users'
import { BaseDeepMap, atom, deepMap } from 'nanostores'

interface authAtom extends BaseDeepMap{
    isAuth: boolean
    user: IUser
}

export const $auth = deepMap<authAtom>({
    isAuth: false,
    user: {} as IUser
}) 

export function setIsAuth(value: boolean) {
    $auth.setKey('isAuth', value)
}

export function setUser(user: IUser) {
    $auth.setKey('user', user)
}