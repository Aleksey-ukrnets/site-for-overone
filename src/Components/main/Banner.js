
import banner from '../../assets/image/banner.png'





import back from '../../assets/image/Background.png'
import './style.scss'
import Stat from '../stat/stat';
import Modal from '../Modal/Modal';
const Banner = ({setActiveModal,setPartners}) => {


    return(
      <>
      <div className="banner" id="banner">
        <div className="banner-main">
          <div className='banner-column'> 
            <article className="banner-message">
              <h1 className="banner-message-title">Мы пишем историю  </h1>
              <div className="banner-message-description">Разработка web-сайтов и сопровождение -<br />
              важный шаг в Вашем бизнесе.<br /> 
              Мы позаботимся об имидже вашей компании. 
              </div>
              <div className="banner-message-action">
                <button className="button button-size-standart button-theme-blue" onClick={() => setActiveModal(true)}>Получить консультацию</button>
                <button className="button button-size-standart button-theme-white" onClick={() => setPartners(true)}>Чем мы можем помочь</button>
              </div>
            </article>
            <div className='banner-column-right'>
            <img src={banner} alt='banner' />
            </div>
          </div>
      {/* <Stat /> */}
        </div>
      </div>
 
      </>
    )
}
export default Banner