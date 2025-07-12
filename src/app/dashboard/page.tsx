'use client'

import { useStorage } from '../../hooks/useStorage'

interface User {
  name: { first: string; last: string }
  email: string
}

export default function DashboardPage() {
  const [user] = useStorage<User>('localStorage', 'user', {} as User)

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Dashboard</h1>
      {user.name && (
        <p>
          Welcome to your dashboard, {user.name.first} {user.name.last}!
        </p>
      )}
    </div>
  )
}
