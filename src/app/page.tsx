'use client'

import { useStorage } from '../hooks/useStorage'

interface User {
  name: { first: string; last: string }
  email: string
}

export default function HomePage() {
  const [user] = useStorage<User>('localStorage', 'user', {} as User)

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      {user.name && (
        <p>
          Hello, {user.name.first} {user.name.last}!
        </p>
      )}
    </div>
  )
}
