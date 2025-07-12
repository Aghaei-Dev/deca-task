import Cookies from 'js-cookie'
import { User } from '@/types/user'

export const setUserCookie = (user: User) => {
  Cookies.set('user', JSON.stringify(user), {
    expires: 1,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  })
}

export const getUserCookie = (): User | null => {
  const user = Cookies.get('user')
  return user ? JSON.parse(user) : null
}

export const removeUserCookie = () => {
  Cookies.remove('user')
}
