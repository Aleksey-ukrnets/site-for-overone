import './style.scss'

import imgFirst from '../../assets/image/image1.png'

import imgSecond from '../../assets/image/image2.png'

import imgThird from '../../assets/image/image3.png'

import imgFourth from '../../assets/image/image4.png'

import imgFifth from '../../assets/image/image5.png'

import imgSixth from '../../assets/image/image6.png'

import imgSeventh from '../../assets/image/image7.png'

import imgEight from '../../assets/image/image8.png'

const Cooperation = () => {


    return(
      <>
        <div className='cooperation'>
          <div className='cooperation-main'>
              <div className='cooperation-company'>
               <div className='cooperation-company_photo'> <img src={imgFirst} /></div>
               <div className='cooperation-company_photo'> <img src={imgSecond} /></div>
               <div className='cooperation-company_photo'>  <img src={imgThird} /></div>
               <div className='cooperation-company_photo'> <img src={imgFourth} /></div>
               <div className='cooperation-company_photo'>  <img src={imgFifth} /></div>
               <div className='cooperation-company_photo'> <img src={imgSixth} /></div>
               <div className='cooperation-company_photo'> <img src={imgSeventh} /></div>
               <div className='cooperation-company_photo'> <img src={imgEight} /></div>
              </div>
          </div>
        </div>
      </>
    )
}
export default Cooperation


