import {useTranslation} from 'react-i18next'
import {Box, Button, Checkbox, FormControlLabel, Stack, Typography, useTheme} from "@mui/material";
import {NAVBAR_HEIGHT} from "../../../constants/siteStyleSettins";
import {useState} from "react";
import {UsersTable} from "../../../widgets/UsersTable";
import mockUsers from "../../../widgets/UsersTable/ui/mock-users";

const UsersPage = () => {
  const {palette} = useTheme()
  const {t} = useTranslation()
  const [showDeleted, setShowDeleted] = useState(false)
  const [page, setPage] = useState(1)
  const toggleShowDeleted = () => {
    setShowDeleted(!showDeleted)
  }

  const users = showDeleted ? mockUsers : mockUsers.filter((user) => user.status !== 'Deleted')

  return (
    <Box sx={{py: 3, px: 6, display: 'flex', flexDirection: 'column', height: '100vh', width: '100%'}}>
      <Box sx={{display: 'flex', height: NAVBAR_HEIGHT}}>
        <Typography sx={{textTransform: 'uppercase', color: palette.text.secondary}}>
          {t('Dashboard')} /&nbsp;
        </Typography>

        <Typography sx={{textTransform: 'uppercase'}}>{t('Users')}</Typography>
      </Box>

      {/* Page Header */}
      <Stack
        direction="row"
        alignItems='center'
      >
        <Stack
          direction="row"
          alignItems='center'
          sx={{flexGrow: 1}}
        >
          <Typography
            variant='h4'
            sx={{mr: 4}}
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
            gap: 2,
            ':hover > p': {
              color: '#5D5FEF'
            }
          }}
        >
          <Typography sx={{mb: 0.4, fontSize: 30, fontWeight: 500}}>+</Typography>
          <Typography sx={{fontWeight: 600}}>{t('Add User')}</Typography>
        </Button>
      </Stack>


      <Box sx={{flexGrow: 1, my: 5}}>
        <UsersTable users={users} page={page} setPage={setPage} totalPages={29}/>
      </Box>

    </Box>
  )
}

export default UsersPage
