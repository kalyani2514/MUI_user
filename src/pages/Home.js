import { Button } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from "react-router-dom";
import Banner from '../images/Banner.jpeg'
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <Button >
              ORDER NOW
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
