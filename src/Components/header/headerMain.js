import './index.scss';

import logo from '../../assets/image/logo-overone.svg'
import burger from '../../assets/image/burger.png'
import overone from '../../assets/image/logo.svg'
import BurgerMenu from '../burgerMenu/BurgerMenu';
import up from '../../assets/image/btnup.png'
const HeaderMain = ( {menu, setMenu}) => {


    return(
      <>
      <header id='header' className='header' onClick={() => setMenu(true)}>          
            <div className='header-row'>
                <div className='header-logo'>
                  <img src={overone} alt='logo' />
                  <img src={logo} className='overone' alt='overone' />
                  </div>
                <div className='header-menu'><img src={burger}  alt='burger-menu' /></div>
               
            </div> 
      </header>
      <hr />
      <div className='btn-up'>  
      <a href='#header' ><img src={up} /></a>
      
      </div>
      </>
    )
}
export default HeaderMain