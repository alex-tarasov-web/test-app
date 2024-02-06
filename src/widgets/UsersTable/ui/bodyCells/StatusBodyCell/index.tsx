import React from 'react'
import {Stack, Typography} from "@mui/material";
import {UserStatus} from "../../../../../app/types/user";
import {Done as DoneIcon} from '@mui/icons-material';

interface StatusBodyCellProps {
  status: UserStatus
}

export const StatusBodyCell = ({status}: StatusBodyCellProps) => {
  switch (status) {
    case "Registered":
      return (
        <Stack alignItems='center' direction='row' justifyContent='center' gap={2}>
          {/* TODO: get color from palette */}
          <DoneIcon sx={{color: '#A5A6F6'}}/>

          <Typography>{status}</Typography>
        </Stack>
      )
    case "Invited":
      return (
        <Typography>{status}</Typography>
      )
    case "Deleted":
      return (
        <Typography sx={{color: '#DB885A'}}>{status}</Typography>
      )
  }
}