
import React, {useState} from "react"
import cross from '../../assets/image/cross.png'
import './style.scss'
import instagram from '../../assets/image/instagramm.png'
import tiktok from '../../assets/image/tiktok.png'
import facebook from '../../assets/image/faceboook.png'
import vkontacte from '../../assets/image/vk.png'
const BurgerMenu = ({activeMenu, setActiveMenu}) => {


    return(
      <>
       <div className={activeMenu ? 'menu active-menu': 'menu'}>
           <div className="menu-main" onClick={(e) => e.stopPropagation()}>
            <div className="menu-close"><img src={cross} onClick={ () => { setActiveMenu(false) }} /></div>
                <ul className="menu-nav">
                    <li><a href="#header" onClick={ () => { setActiveMenu(false) }}>Об IT Digital Progress</a></li>
                    <li><a href="#develop" onClick={ () => { setActiveMenu(false) }}>Услуги</a></li>
                    {/* <li><a href="">Портфолио</a></li> */}
                    <li><a  href="#partners" onClick={ () => { setActiveMenu(false) }}>Цены</a></li>
                    <li><a  href="#clients" onClick={ () => { setActiveMenu(false) }}>Отзывы</a></li>
                    <li><a  href="#about" onClick={ () => { setActiveMenu(false) }}>Контакты</a></li>
                </ul>
                <div className="menu-social">
                    <div className="menu-social-icon">
                        <div> <a style={{cursor: 'pointer'}} target='_blank' href="https://www.instagram.com/itprogress.by/"><img src={instagram} /></a></div>
                        
                             <div style={{
                            marginLeft: '17px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent:'center'
                            }}><a href='https://www.facebook.com/itdigitalprogress' target='_blank'> <img src={facebook} alt='facebook' /></a></div>
                           <div style={{
                            marginLeft: '17px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent:'center'
                            }}><a href='https://vk.com/itdigitalprogres' target='_blank'> <img src={vkontacte} style={{width:"24px"}} alt='inst'/></a></div>
                    </div>
                    <div className="menu-social-mail">dev@itoverone.by</div>
                </div>
           </div>
       </div>
      </>
    )
}
export default BurgerMenu