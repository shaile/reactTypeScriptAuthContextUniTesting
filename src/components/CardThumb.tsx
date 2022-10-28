import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export function CardThumb() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component='img' height='140' image='/havan.jpeg' alt='green iguana' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
