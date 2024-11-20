import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from "@mui/icons-material/Apps"
import { Avatar } from '@mui/material';
import SearchPage from './SearchPage'


function Home() {
  return (
    <div className='home'>
        {/* <h1>Home Page</h1> */}
        <div className='homeKaheader'>
            <div className='headerKaLeft'>
                <Link to='about'>About</Link>
                <Link to='store'>Store</Link>
                
            </div>
            <div className='headerKaRight'>
                <Link to='gmail'>Gmail</Link>
                <Link to='images'>Images</Link>
                {/**Icons*/}
                <AppsIcon />
                {/**Avatar */}
                <Avatar />

            </div>
        </div>

        {/**This below is the body  */}

        <div className='home_body'>
            <img src="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            <div className='Input_Container'>
                {/** I will put the search container here */}
                <SearchPage />
            </div>
        </div>
    </div>
  )
}

export default Home;