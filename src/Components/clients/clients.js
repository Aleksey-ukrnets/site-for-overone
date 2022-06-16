import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative"
import "./style.scss";
import SwiperCore, {EffectCreative, Navigation,Pagination} from 'swiper';
import "swiper/css/navigation"
import "swiper/css/pagination"
import heart from '../../assets/image/heart.png'

SwiperCore.use([EffectCreative,Navigation,Pagination]);

const Clients = () => {


        return(
          <>
          <div className="clients" id="clients">
            <div className="clients-main">
            Наши клиенты <img src={heart} />нас 
            <div className="clients-swiper_padding">
                
             <Swiper style={{'--swiper-navigation-color': '#0812F8','--swiper-navigation-size': '28px'}}  grabCursor={true} effect={'creative'} navigation={true} creativeEffect={{
    "prev": {
      "shadow": true,
      "translate": [
        0,
        0,
        -400
      ]
    },
    "next": {
      "translate": [
        "100%",
        0,
        0
      ]
    }
  }}     className="clients-swiper">
<SwiperSlide className="clients-swiper_slide">
      
            <div className="clients-swiper_slide-title">Выражаем огромную благодарность веб-студии Overone за разработку адаптивной верстки для сайта lamyra.<br/>
Поиск подрядчика стал для нас проблемой, т.к многие отказывались адаптировать наш сайт,<br/> 
сделанный несколько лет назад со сложной структурой.<br/>
У некоторых исполнителей не было гарантии на проделанную работу.<br/>
Работа по адаптации нашего сайта была проведена в кратчайшие сроки,<br/>
все правки и пожелания вносились оперативно и аккуратно.<br/>
<br/>
 Благодарим Вас за работу, желаем развития и процветания!<br/>
 <br/>
<div className="clients-swiper_slide-owner">Александра</div>
</div>
</SwiperSlide>
    <SwiperSlide className="clients-swiper_slide">
      
            <div className="clients-swiper_slide-title">Выражаем благодарность компании ООО"Overone" за проделанную работу по разработке нашего нового сайта.
Сотрудники компании очень четко определили концепцию сайта, уловили важные моменты в нем и реализовали все в наилучшем виде. 

Overone - компания, с которой приятно сотрудничать, т.к. ты всегда уверен в результате!
<div className="clients-swiper_slide-owner">Игорь</div>
</div>
    </SwiperSlide>
      {/* <SwiperSlide className="clients-swiper_slide">  
      <div className="clients-line"/>
            <div className="clients-swiper_slide-title">Выражаем огромную благодарность веб-студии Overone за разработку адаптивной верстки для сайта lamyra.<br/>
Поиск подрядчика стал для нас проблемой, т.к многие отказывались адаптировать наш сайт,<br/> 
сделанный несколько лет назад со сложной структурой.<br/>
У некоторых исполнителей не было гарантии на проделанную работу.<br/>
Работа по адаптации нашего сайта была проведена в кратчайшие сроки,<br/>
все правки и пожелания вносились оперативно и аккуратно.<br/>
<br/>
 Благодарим Вас за работу, желаем развития и процветания!<br/>
 <br/>
<div className="clients-swiper_slide-owner">Александра/ Сompany name/ CEO</div>
</div>
</SwiperSlide> */}
      </Swiper>
      </div>
            </div>
          </div>
           
          </>
        )
    }
    export default Clients