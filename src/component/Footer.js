import React from 'react';
import './Footer.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';


import {IconButton} from '@mui/material';

function Footer() {
  return (
    <div className ='bottom-Buttons'>
<IconButton className='replay' >
    <ReplayIcon font-size='large'/>
</IconButton>
<IconButton className='close' >
    <CloseIcon font-size='large'/>
</IconButton>
<IconButton className='star'>
    <StarRateIcon font-size='large'/>
</IconButton>
<IconButton className='favorite'>
    <FavoriteIcon font-size='large'/>
</IconButton>
<IconButton className='flash'>
    <FlashOnIcon font-size='large'/>
</IconButton>
    </div>
  )
}
export default Footer