export type UserRole = 'Super Admin' | 'Sales Manager' | 'Consultant' | 'Coordinator'

export type UserStatus = 'Registered' | 'Invited' | 'Deleted'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  role: UserRole,
  status: UserStatus
}