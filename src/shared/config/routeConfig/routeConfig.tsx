import { type RouteProps } from 'react-router-dom'
import {UsersPage} from "../../../pages/UsersPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";

export enum AppRoutes {
  USERS = 'users',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.USERS]: '/',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.USERS]: {
    path: RoutePath.users,
    element: <UsersPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
