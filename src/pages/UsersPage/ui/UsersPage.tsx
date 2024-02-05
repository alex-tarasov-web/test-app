import { useTranslation } from 'react-i18next'
import {Box, Button, Checkbox, FormControlLabel, Stack, Typography, useTheme, checkboxClasses} from "@mui/material";
import {CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon} from '@mui/icons-material'
import {NAVBAR_HEIGHT} from "../../../constants/siteStyleSettins";
import {useState} from "react";
import {UsersTable} from "../../../widgets/UsersTable";

const UsersPage = () => {
  const { palette } = useTheme()
  const { t } = useTranslation()
  const [showDeleted, setShowDeleted] = useState(false)

  const toggleShowDeleted = () => {
    setShowDeleted(!showDeleted)
  }


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', height: NAVBAR_HEIGHT}}>
        <Typography sx={{ textTransform: 'uppercase', color: palette.text.secondary }}>
          {t('Dashboard')} /&nbsp;
        </Typography>

        <Typography sx={{ textTransform: 'uppercase'}}>{t('Users')}</Typography>
      </Box>

      {/* Page Header */}
      <Stack
        direction="row"
        alignItems='center'
      >
        <Stack
          direction="row"
          alignItems='center'
          sx={{ flexGrow: 1}}
        >
          <Typography
            variant='h4'
            sx={{ mr: 4 }}
          >
            {t('Users')}
          </Typography>

          {/* TODO: take color from palette */}
          <FormControlLabel
            control={
            <Checkbox
              checked={showDeleted}
              onChange={toggleShowDeleted}
              sx={{
                '&.Mui-checked': {
                  color: '#5D5FEF'
                }
              }}
            />
          }
          label="DELETED"
          />
        </Stack>

        {/* TODO: take color from palette */}
        <Button
          sx={{
            px: 2,
            backgroundColor: '#5D5FEF',
            borderRadius: 2.5,
            color: '#fff',
            alignItems: 'center',
            gap: 2
        }}
        >
          <Typography sx={{ fontSize: 30, fontWeight: 500}}>+</Typography>
          <Typography sx={{ fontWeight: 600 }}>Add User</Typography>
        </Button>
      </Stack>


      <Box sx={{ flexGrow: 1, my: 5 }}>
        <UsersTable />
      </Box>

    </Box>
  )
}

export default UsersPage
