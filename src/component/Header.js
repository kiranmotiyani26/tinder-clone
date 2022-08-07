import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {IconButton} from '@mui/material';
import './Header.css';
function Header() {
  return (
    <div className='tinder-header' align='center'>
        <IconButton>
        <PersonIcon className='header-icon' fontSize='large'/>
        </IconButton>
        
        <img src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' alt='Tinder'/>
        
        <IconButton>

        <QuestionAnswerIcon className='questionAnswer' fontSize='large'/>

        </IconButton>
    </div>
    

  )
}
export default Header