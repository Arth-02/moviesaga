import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import  './header.css';

const Header = () => {

  const [style , setStyle] = useState(false);

  const handelStyle = () => {
    if(style === true){
      setStyle(false);
    }
    else{
      setStyle(true);
    }
  }


  return (
    <header>
      <div className='header'>
        <div className='logo'>
          <h3><Link to={'..'}>MovieSaga</Link></h3>
        </div>
        <div className='navtabs'>
          <span><Link to={'..'}>Movies</Link></span>
          <span><Link to={'..'}>Tv Shows</Link></span>
          <span><Link to={'..'}>Catagories</Link></span>
          <span><Link to={'..'}>Trending</Link></span>
        </div>
        <div className='right-navbar'>
          <div className='search-panel'>
            <div className='search-icon' style={style ? {color : 'black'} : {}}>
              <IconButton color='inherit' label='hidden' onClick={handelStyle}> <SearchIcon/> </IconButton>
            </div>
            <div className='searchbox'>
              <input type='text' className='search-input' style={style ? {opacity: 1 , width: 200} : {}} placeholder='Search.... ' name='Search'/>
            </div>
          </div>
          <div className='user-panel'>
            <div className='liked-movies'> <IconButton color='inherit'> <FavoriteBorderIcon/> </IconButton> </div>
            <div className='liked-movies'> <IconButton color='inherit'> <AccountCircleIcon/> </IconButton> </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header