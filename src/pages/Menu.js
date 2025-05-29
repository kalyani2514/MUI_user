import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'
import Layout from '../components/Layout/Layout'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map(menu => (
          <Card sx={{ maxwidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.image} alt={menu.name} />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant="body2"> {menu.description}  <br /><br />Rs.{menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

    </Layout>
  )
}

export default Menu
