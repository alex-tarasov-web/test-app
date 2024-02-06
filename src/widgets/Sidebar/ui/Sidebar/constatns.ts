import {ReactNode} from "react";
import {
  RouteRounded as RouteRoundedIcon,
  BusinessCenterRounded as BusinessCenterRoundedIcon,
  GroupsRounded as GroupsRoundedIcon,
  DataSaverOffRounded as DataSaverOffRoundedIcon,
  AccountCircleRounded as AccountCircleRoundedIcon
} from "@mui/icons-material";

type Icon = typeof RouteRoundedIcon

interface Sidebar {
  pathname: string
  icon: Icon
  name: string
}

export const SideBarRoutes: Sidebar[] = [
  {
    pathname: '/dashboard/trips',
    icon: RouteRoundedIcon,
    name: 'Trips'
  },
  {
    pathname: '/dashboard/deals',
    icon: BusinessCenterRoundedIcon,
    name: 'Deals'
  },
  {
    pathname: '/dashboard/teams',
    icon: GroupsRoundedIcon,
    name: 'Teams'
  },
  {
    pathname: '/dashboard/analytics',
    icon: DataSaverOffRoundedIcon,
    name: 'Analytics',
  },
  {
    pathname: '/dashboard/users',
    icon: AccountCircleRoundedIcon,
    name: 'Users'
  },


]