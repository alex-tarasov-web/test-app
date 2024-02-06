import {User} from "../../../app/types/user";

const mockUsers: User[] = [
  {
    id: 1,
    firstName: 'Frank',
    lastName: 'Lampard',
    email: 'FranklLampard@gmail.com',
    role: 'Super Admin',
    status: 'Registered'
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Terry',
    email: 'JohnTerry@gmail.com',
    role: 'Sales Manager',
    status: 'Invited'
  },
  {
    id: 3,
    firstName: 'Teo',
    lastName: 'Walcott',
    email: 'TeoWalcott@gmail.com',
    role: 'Consultant',
    status: 'Deleted'
  },
  {
    id: 4,
    firstName: 'Frank',
    lastName: 'Lampard',
    email: 'FranklLampard@gmail.com',
    role: 'Consultant',
    status: 'Registered'
  },
]

export default mockUsers