import './about.scss'
import location from '..//../assets/image/locationlogo.png'
import phone from '..//../assets/image/phone.png'
import logo from '../../assets/image/digital-logo.svg'
import overone from '../../assets/image/logo-overone.svg'
import inst from '../../assets/image/instagramm.png'
import linked from '../../assets/image/linked.png'
import facebook from '../../assets/image/faceboook.png'
import vkontacte from '../../assets/image/vk.png'
const AboutCompany = () => {

    return(
        <>
        <div className='about' id='about'>
            <div className="about-main">                
                <div className='about-columns'>
                    <div className='about_left'>
                        <img src={overone}/>
                        <img src={logo}/>
                    </div>
                    <div className='about_right'>
                        <div className="about_line"></div>
                        <div className='about_location'>
                            <img  src={location} />
                            <p>г. Минск, ул. Сурганова 43, офис 802</p>
                        </div>
                        <div className='about_number'>
                            <img  src={phone} />
                            <a href='tel:+375 (29) 123 45 67' rel='nofollow' >+375 (29) 123 45 67</a>
                        </div>
                        <div className='about_social'>
                            <p>Мы в соцсетях</p>
                           <a href='https://www.facebook.com/itdigitalprogress' target='_blank'> <img src={facebook} alt='facebook' /></a>
                           <a href='https://www.instagram.com/itprogress.by/' target='_blank'> <img src={inst} alt='inst'/></a>
                           <a href='https://vk.com/itdigitalprogres' target='_blank'> <img src={vkontacte} style={{width:"24px"}} alt='inst'/></a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        </>
    )

}

export default AboutCompany