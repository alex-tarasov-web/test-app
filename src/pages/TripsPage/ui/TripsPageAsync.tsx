import { lazy } from 'react'

export const TripsPageAsync = lazy(async () => await import('./TripsPage'))
