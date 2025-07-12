export const emailValidator = (email: string): RegExpMatchArray | null => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const passwordValidator = (password: string): RegExpMatchArray | null => {
  return password.toLowerCase().match(/^[a-zA-Z0-9]{6,10}$/)
}

export const userNameValidator = (userName: string): RegExpMatchArray | null => {
  return userName.toLowerCase().match(/^[a-zA-Z0-9_]{1,10}$/)
}

export const justNumberValidator = (number: string): RegExpMatchArray | null => {
  return number.toLowerCase().match(/^[0-9]*$/)
}

export const phoneNumberValidator = (number: string): RegExpMatchArray | null => {
  return number.toLowerCase().match(/^(0)9(0[1-5]|[1 3 9]\d|2[0-2]|98)\d{7}$/)
}
