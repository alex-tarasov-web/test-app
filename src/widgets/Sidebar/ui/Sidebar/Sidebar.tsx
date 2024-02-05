import React, {type FC, ReactNode, useState} from 'react'
import {
  Box,
  Drawer, IconButton,
  Stack,
} from "@mui/material";
import {
  RouteRounded as RouteRoundedIcon,
  SettingsRounded as SettingsRoundedIcon,
  BusinessCenterRounded as BusinessCenterRoundedIcon,
  GroupsRounded as GroupsRoundedIcon,
  DataSaverOffRounded as DataSaverOffRoundedIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
} from '@mui/icons-material';
import {NAVBAR_HEIGHT} from "../../../../constants/siteStyleSettins";
import {useLocation} from "react-router-dom";
import {SideBarRoutes} from "./constatns";

const COLLAPSED_DRAWER_WIDTH = 80


export const Sidebar = () => {
  const location = useLocation()

  const [open, setOpen] = useState(false)

  const onMouseEnter = () => setOpen(true)
  const onMouseLeave = () => setOpen(false)


  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: COLLAPSED_DRAWER_WIDTH,
        position: 'relative',
        height: 1,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box'
      }}
    >
      <Box
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={{
          width: open ? 240 : COLLAPSED_DRAWER_WIDTH,
          transition: 'width 0.2s',
          // TODO: Take it from palette
          bgcolor: '#A5A6F6',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>

        <Stack
          alignItems='center'
          sx={{mb: 4, height: '100%'}}
        >
          <Box sx={{height: NAVBAR_HEIGHT}}/>

          <Stack
            alignItems='center'
            spacing={2}
            sx={{height: 1}}
          >
            {SideBarRoutes.map((sidebarRoute) => {
              const isActive = sidebarRoute.pathname === location.pathname
              return (
                <IconButton
                  size='large'
                  sx={{
                    backgroundColor: isActive ? 'white' : 'grey',
                    borderRadius: 2.5
                  }}
                  key={sidebarRoute.pathname}
                >
                  <sidebarRoute.icon
                    sx={{color: isActive ? '#A5A6F6' : 'red'}}
                  />
                </IconButton>
              )
            })}
          </Stack>

          <IconButton color="inherit" size='large'>
            <SettingsRoundedIcon fontSize='large'/>
          </IconButton>
        </Stack>
      </Box>
    </Drawer>
  );
}
