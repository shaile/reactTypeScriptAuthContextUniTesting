import { FC, ReactElement, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { CardThumb } from '@/components'
import { useAuthState } from '@/context'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const User: FC = (): ReactElement => {
  const [row, setRow] = useState<any>()
  const user = useAuthState()

  console.log('userdetails', user.usersDetails)
  useEffect(() => {
    console.log('userdetails USE EFFECT', user.usersDetails)
    setRow(user)
  }, [row])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardThumb />
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                Name: {user.usersDetails.firstName} {user.usersDetails.lastName}
              </Grid>
              <Grid item xs={7}>
                Email: {user.usersDetails.email}
              </Grid>
              <Grid item xs={4}>
                Phone: {user.usersDetails.phone}
              </Grid>
              <Grid item xs={8}>
                Country: {user.usersDetails.country}
              </Grid>
              <Grid item xs={8}>
                City: {user.usersDetails.city}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Item>User Details</Item>
        </Grid>

        <Grid item xs={12}>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/lEJbjhrTyJ8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  )
}

export default User
