'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
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
    setHasAccount((prev) => !prev)
  }
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setPayload((prev) => ({ ...prev, [name]: value }))
    console.log(payload)
    setError((prev) => ({
      ...prev,
      [name]:
        name === 'username'
          ? userNameValidator(value)
            ? ''
            : 'نام کاربری فقط می‌تواند شامل اعداد، حروف انگلیسی و _ باشد.'
          : name === 'email'
            ? emailValidator(value)
              ? ''
              : 'ایمیل باید صحیح باشد.'
            : name === 'password'
              ? passwordValidator(value)
                ? ''
                : 'رمز عبور باید ۶ تا ۱۰ کاراکتر و شامل اعداد و حروف انگلیسی باشد.'
              : name === 'phone'
                ? phoneNumberValidator(value)
                  ? ''
                  : 'شماره تلفن معتبر نیست. فقط اعداد انگلیسی بدون پیش‌شماره!'
                : prev[name],
    }))
  }

  const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.checked }))
  }

  const loginHandler = async (e: FormEvent) => {
    if (error.password || error.phone || error.email || payload.password.length === 0) {
      toast.error('لطفا تمام فیلد ها را پر کنید !')
      return
    }
  }

  const signUpHandler = async (e: FormEvent) => {
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
                signUpHandler(e)
              }}
            >
              <Input
                type="text"
                handleChange={inputHandler}
                value={payload.username}
                name="username"
                icon={<UserIcon />}
                required
                labelText="نام کاربری"
                placeholder="فقط شامل حروف و اعداد انگلیسی"
                errorText={error.username}
              />
              <Input
                handleChange={inputHandler}
                value={payload.email}
                name="email"
                labelText="ایمیل"
                type="email"
                required
                placeholder="ایمیل"
                errorText={error.email}
              />
              <Input
                handleChange={inputHandler}
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
                handleChange={inputHandler}
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
              <Button type="submit" disabled={isLoading}>
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
            {error.general && <p className={styles.error}>{error.general}</p>}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                loginHandler(e)
              }}
            >
              <Input
                type="text"
                handleChange={inputHandler}
                value={payload.username}
                name="username"
                required
                labelText="نام کاربری"
                icon={<UserIcon />}
                placeholder="فقط شامل حروف و اعداد انگلیسی"
                errorText={error.username}
              />
              <Input
                handleChange={inputHandler}
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
                handleChange={inputHandler}
                value={payload.phone}
                required
                name="phone"
                labelText="شماره تلفن"
                placeholder="09123456789"
                type="text"
                icon={<PhoneIcon />}
                errorText={error.phone}
              />
              <Button type="submit" disabled={isLoading}>
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
