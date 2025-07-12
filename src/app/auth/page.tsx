'use client'
import { useState, ChangeEvent } from 'react'
import FlipCard from '@/components/FlipCard'
import Loader from '@/components/Loader'
import Button from '@/components/Button'
import Input from '@/components/Input'
import CheckBox from '@/components/CheckBox'
import styles from './page.module.scss'
import { useToggle } from '@/hooks/useToggle'
import {
  emailValidator,
  passwordValidator,
  phoneNumberValidator,
  userNameValidator,
} from '../../utils/validators'
import { toast } from '@/components/Toaster'
import { EyeIcon, EyeSlashIcon, PhoneIcon, UserIcon } from '@/components/icons'
import { useRouter } from 'next/navigation'
import { fetchRandomUser } from '@/lib/api'
import { setUserCookie } from '@/lib/auth'

interface Payload {
  username: string
  email: string
  password: string
  phone: string
  policy: boolean
}

interface ErrorState {
  username: string
  email: string
  password: string
  phone: string
  general?: string
}

export default function Auth() {
  const router = useRouter()

  const [hasAccount, setHasAccount] = useToggle(true)
  const [toggle, setToggle] = useToggle(false)
  const [isLoading, setIsLoading] = useState(false)
  const [payload, setPayload] = useState<Payload>({
    username: '',
    email: '',
    password: '',
    phone: '',
    policy: false,
  })
  const [error, setError] = useState<ErrorState>({
    username: '',
    email: '',
    password: '',
    phone: '',
  })
  const toggleHasAccount = () => {
    setPayload({ username: '', email: '', password: '', phone: '', policy: false })
    setError({ username: '', email: '', password: '', phone: '' })
    setHasAccount()
  }
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    payload[name] = value

    setPayload({ ...payload })

    if (name === 'username') {
      if (userNameValidator(value)) {
        error[name] = ''
      } else {
        error[name] = ' نام کاربری فقط میتواند شامل اعداد و حروف انگلیسی و _ باشد و تکراری نباشد .'
      }
    }

    if (name === 'email') {
      if (emailValidator(value)) {
        error[name] = ''
      } else {
        error[name] = ' ایمیل باید صحیح باشد .'
      }
    }

    if (name === 'password') {
      if (passwordValidator(value)) {
        error[name] = ''
      } else {
        error[name] =
          'رمز عبور باید دارای حداقل ۶ کاراکتر و حداکثر ۱۰ کاراکتر باشد و فقط میتواند شامل اعداد و حروف انگلیسی باشد. '
      }
    }

    if (name === 'phone') {
      if (phoneNumberValidator(value)) {
        error[name] = ''
      } else {
        error[name] =
          'شماره تلفن همراه معتبر نیست. لطفا فقط اعداد انگلیسی وارد کنید و بدون پیش شماره!'
      }
    }

    setError({ ...error })
  }

  const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.checked }))
  }

  const loginHandler = async () => {
    console.log(error)
    console.log(payload)

    if (error.password || error.phone || error.email || payload.password.length === 0) {
      toast.error('لطفا تمام فیلد ها را پر کنید !')
      return
    }
    setIsLoading(true)

    try {
      const user = await fetchRandomUser()
      setUserCookie(user)
      router.push('/dashboard')
    } catch (err) {
      toast.error('مجددا تلاش کنید')
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const signUpHandler = async () => {
    if (
      error.password ||
      error.email ||
      error.username ||
      error.phone ||
      payload.password.length === 0
    ) {
      toast.error('لطفا تمام فیلد ها را پر کنید !')
      return
    }
    if (!payload.policy) {
      toast.error('لطفا قوانین را تایید کنید !')
      return
    }
    toast.success('قرار نیست ثبت نام کنه/لاگین کن')
  }

  return (
    <section className={styles.wrapper}>
      <FlipCard
        condition={hasAccount}
        frontSide={
          <div className={styles.center}>
            <i className={styles.two}>+</i>
            <i className={styles.one}>+</i>
            <h1>ثبت نام در دکاموند</h1>
            {error.general && <p className={styles.error}>{error.general}</p>}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                signUpHandler()
              }}
            >
              <Input
                type="text"
                handleChange={(e) => inputHandler(e)}
                value={payload.username}
                name="username"
                icon={<UserIcon />}
                required
                labelText="نام کاربری"
                placeholder="فقط شامل حروف و اعداد انگلیسی"
                errorText={error.username}
              />
              <Input
                handleChange={(e) => inputHandler(e)}
                value={payload.email}
                name="email"
                labelText="ایمیل"
                type="email"
                required
                placeholder="ایمیل"
                errorText={error.email}
              />
              <Input
                handleChange={(e) => inputHandler(e)}
                value={payload.password}
                required
                name="password"
                labelText="کلمه عبور"
                placeholder="حداقل ۶ کاراکتر"
                onClick={setToggle}
                icon={toggle ? <EyeIcon /> : <EyeSlashIcon />}
                type={toggle ? 'text' : 'password'}
                errorText={error.password}
              />
              <Input
                handleChange={(e) => inputHandler(e)}
                value={payload.phone}
                required
                icon={<PhoneIcon />}
                name="phone"
                labelText="شماره تلفن"
                placeholder="09123456789"
                type="text"
                errorText={error.phone}
              />
              <div className={styles.policy}>
                <CheckBox value={payload.policy} handleChange={checkBoxHandler} name="policy" />
                <span>قوانین و شرایط را قبول می‌کنم.</span>
              </div>
              <Button
                fontWeight="800"
                fontSize="1rem"
                type="submit"
                // disabled={isLoading}
              >
                {isLoading ? (
                  <Loader color="var(--text-white)" border="var(--primary-500)" />
                ) : (
                  'ثبت نام'
                )}
              </Button>
            </form>
            <div className={styles.bottom}>
              اکانت دارید؟ <span onClick={toggleHasAccount}>وارد شوید</span>
            </div>
          </div>
        }
        backSide={
          <div className={styles.center}>
            <i className={styles.two}>+</i>
            <i className={styles.one}>+</i>
            <h1>ورود به دکاموند</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                loginHandler()
              }}
            >
              <Input
                type="text"
                handleChange={(e) => inputHandler(e)}
                value={payload.username}
                name="username"
                required
                labelText="نام کاربری"
                icon={<UserIcon />}
                placeholder="فقط شامل حروف و اعداد انگلیسی"
                errorText={error.username}
              />
              <Input
                handleChange={(e) => inputHandler(e)}
                value={payload.password}
                required
                name="password"
                labelText="کلمه عبور"
                placeholder="حداقل ۶ کاراکتر"
                onClick={setToggle}
                icon={toggle ? <EyeIcon /> : <EyeSlashIcon />}
                type={toggle ? 'text' : 'password'}
                errorText={error.password}
              />
              <Input
                handleChange={(e) => inputHandler(e)}
                value={payload.phone}
                required
                name="phone"
                labelText="شماره تلفن"
                placeholder="09123456789"
                type="text"
                icon={<PhoneIcon />}
                errorText={error.phone}
              />
              <Button
                fontWeight="800"
                fontSize="1rem"
                type="submit"
                // disabled={isLoading}
              >
                {isLoading ? (
                  <Loader color="var(--text-white)" border="var(--primary-500)" />
                ) : (
                  'ورود'
                )}
              </Button>
            </form>
            <div className={styles.bottom}>
              تا کنون ثبت‌نام نکرده‌اید؟ <span onClick={toggleHasAccount}>ثبت نام</span>
            </div>
          </div>
        }
      />
    </section>
  )
}
