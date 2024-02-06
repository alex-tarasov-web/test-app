import React from "react";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, TextField,
  Typography
} from "@mui/material";
import {User} from "../../../app/types/user";
import {StatusBodyCell} from "./bodyCells/StatusBodyCell";

interface UsersTableProps {
  users: User[]
  page: number
  setPage: (page: number) => void
  totalPages: number
}

export const UsersTable = (props: UsersTableProps) => {
  const {users, page, setPage, totalPages} = props

  const onNextPageClick = () => {
    setPage(page + 1)
  }

  return (
    <Box sx={{height: 1, display: 'flex', flexDirection: 'column'}}>
      <TableContainer sx={{flexGrow: 1}}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                '& > th': {
                  border: 'none'
                }
              }}>
              <TableCell align='left'>FIRST NAME</TableCell>
              <TableCell align='left'>LAST NAME</TableCell>
              <TableCell align='left'>EMAIL</TableCell>
              <TableCell align="right">ROLE</TableCell>
              <TableCell align="center">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              const isUserDeleted = user.status === 'Deleted'

              return (
                <TableRow
                  key={user.id}
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    // TODO: Move this #F3F3F3 color into light.palette.background.default
                    borderBottom: 'solid 12px #F3F3F3',
                    '& > td': {
                      px: 2,
                      py: 1
                    },
                  }}
                >
                  <TableCell
                    align='left'
                    sx={{color: isUserDeleted ? 'text.disabled' : 'text.primary'}}
                  >
                    {user.firstName}
                  </TableCell>

                  <TableCell
                    align='left'
                    sx={{color: isUserDeleted ? 'text.disabled' : 'text.primary'}}
                  >
                    {user.lastName}
                  </TableCell>

                  <TableCell
                    align='left'
                    sx={{color: isUserDeleted ? 'text.disabled' : 'text.primary'}}
                  >
                    {user.email}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{color: isUserDeleted ? 'text.disabled' : 'text.primary'}}
                  >
                    {user.role}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{color: isUserDeleted ? 'text.disabled' : 'text.primary'}}
                  >
                    <StatusBodyCell
                      status={user.status}/>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack direction='row' justifyContent='flex-end' alignItems='center' gap={1.5}>
        {/* TODO: Add this color for <Button> in palette  */}
        <Typography>Page</Typography>

        <TextField
          value={page}
          onChange={(event) => setPage(Number(event.target.value))}
          sx={{
            width: 60,
          }}
          InputProps={{
            sx: {
              borderRadius: 2,
              height: 40,
            }
          }}
        />
        <Typography>of {totalPages}</Typography>

        <Button
          onClick={onNextPageClick}
          variant='contained'
          sx={{borderRadius: 2.5, bgcolor: '#5D5FEF'}}
        >
          Next page
        </Button>
      </Stack>
    </Box>
  )
}