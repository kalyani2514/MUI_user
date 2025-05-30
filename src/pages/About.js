import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15, textAlign: "center", p: 2, "& h4":
        {
          fontWeight: 'bold',
          my: 2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: '1.5rem'
          }
        }

      }}>
        <Typography variant="h4">
          Welcome To My Resturant
        </Typography>
        <p>A restaurant is a business that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
        </p>
        <p>
          Restaurant guides review restaurants, often ranking them or providing information to guide consumers (type of food, handicap accessibility, facilities, etc.). One of the most famous contemporary guides is the Michelin series of guides which accord from 1 to 3 stars to restaurants they perceive to be of high culinary merit. Restaurants with stars in the Michelin guide are formal, expensive establishments; in general the more stars awarded, the higher the prices.
        </p>
      </Box>
    </Layout>
  )
}

export default About
