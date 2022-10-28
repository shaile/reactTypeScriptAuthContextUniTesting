import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useAuthState } from '@/context'

export default function Loader() {
  const { loading } = useAuthState()
  console.log('loadingloadingloadingloading', loading)
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 200,
        height: 150,
        margin: 'auto',
      }}
    >
      {loading ? <CircularProgress /> : ''}
    </Box>
  )
}
