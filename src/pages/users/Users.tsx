import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { bomb } from '@/components/Error'
import { useAuthDispatch } from '@/context'
import { getAllUsers, getUserById } from '@/context/Action'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function Users() {
  const navigate = useNavigate()
  const dispatch = useAuthDispatch()
  const [rows, setRows] = useState<any>([])

  async function fetchUsers() {
    const data = await getAllUsers(dispatch)
    setRows(data)
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])

  const handleClick = async (data: any) => {
    try {
      await getUserById(dispatch, data)
      navigate('/user', { replace: true })
    } catch (e) {
      console.log(e)
      bomb
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row: any) => (
              <StyledTableRow key={row?.id} onClick={() => handleClick(row)}>
                <StyledTableCell component='th' scope='row'>
                  {row?.firstName} {row?.lastName}
                </StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>{row.country}</StyledTableCell>
                <StyledTableCell>{row.city}</StyledTableCell>
                <StyledTableCell>Edit/Delete</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Users
