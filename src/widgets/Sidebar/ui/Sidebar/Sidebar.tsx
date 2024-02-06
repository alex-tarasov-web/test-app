import React, {useState} from 'react'
import {
  Box,
  Drawer, IconButton,
  Stack, Typography,
} from "@mui/material";
import {
  SettingsRounded as SettingsRoundedIcon,
} from '@mui/icons-material';
import {NAVBAR_HEIGHT} from "../../../../constants/siteStyleSettins";
import {useLocation, useNavigate} from "react-router-dom";
import {SideBarRoutes} from "./constatns";
import {useTranslation} from "react-i18next";

const COLLAPSED_DRAWER_WIDTH = 80

export const Sidebar = () => {
  const {t} = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const onMouseEnter = () => setOpen(true)
  const onMouseLeave = () => setOpen(false)


  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: COLLAPSED_DRAWER_WIDTH,
        height: 1,
      }}
    >
      <Box
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={{
          overflow: 'hidden',
          width: open ? 240 : COLLAPSED_DRAWER_WIDTH,
          transition: 'width 0.2s',
          // TODO: Take it from palette
          bgcolor: '#A5A6F6',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>

        <Stack
          sx={{mb: 4, height: '100%'}}
        >
          <Box sx={{height: NAVBAR_HEIGHT}}/>

          <Stack
            spacing={2}
            sx={{
              mx: 2,
              height: 1
          }}
          >
            {SideBarRoutes.map((sidebarRoute) => {
              const isActive = sidebarRoute.pathname === location.pathname

              return (
                <Stack spacing={2} direction='row' alignItems='center'>
                  <IconButton
                    size='large'
                    sx={{
                      backgroundColor: isActive ? 'white' : '#A5A6F6',
                      borderRadius: 2.5,
                      ':hover > svg': {
                        color: 'black'
                      }
                    }}
                    onClick={(e) => {
                      navigate(sidebarRoute.pathname)
                    }}
                    key={sidebarRoute.pathname}
                  >
                    <sidebarRoute.icon
                      sx={{
                        color: isActive ? '#A5A6F6' : 'black',
                    }}
                    />
                  </IconButton>

                  {/* TODO: prepare translations for the sidebarRoute names */}
                  {open && <Typography>{sidebarRoute.name}</Typography>}
                </Stack>
              )
            })}
          </Stack>

          <Stack direction='row' alignItems='center' spacing={2} sx={{ mx: 1.5 }}>
            <IconButton size='large' sx={{ borderRadius: 2.5 }}>
              <SettingsRoundedIcon fontSize='large' sx={{ color: 'black' }}/>
            </IconButton>


            {open && <Typography>{t('Settings')}</Typography>}
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
}
