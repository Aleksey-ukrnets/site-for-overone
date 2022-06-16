

import './style.scss'

import personal from '../../assets/image/test.png'
import deadline from '../../assets/image/deadline.png'
import exp from '../../assets/image/exp.png'
import clients from '../../assets/image/happyclients.png'

const Services = () => {


    return(
      <>
        <div className='services'>
            <div className='services-main'>
                <h1>Об IT Digital Progress</h1>
                
                <div className='services-container'>
                    <div  className='services-flex services-flex-first '>
                        <div className='services-info'>
                            <div className='services-info-padding'>
                                <div className='services-info_logo '><img src={personal} /></div>
                                <div className='services-info-title'>Наши сотрудники</div>
                                <div className='services-info-message'>14 сотрудников с опытом работы в веб-разработке от 5 лет </div>
                            </div>
                        </div>
                        <div className='services-info'>
                            <div className='services-info-padding'>
                                <div className='services-info_logo'><img src={exp} /></div>
                                <div className='services-info-title'>Опыт</div>
                                <div className='services-info-message'>Более 170 проектов: корпоративные сайты, лендинги, интернет-магазин, сайты-визитки и др.</div>
                            </div>
                        </div>
                    </div>
                    <div  className='services-flex services-flex-second' >
                        <div className='services-info'>
                            <div className='services-info-padding'>
                                <div className='services-info_logo'><img src={deadline} /></div>
                                <div className='services-info-title'>Соблюдение сроков</div>
                                <div className='services-info-message'>Когда опыт, навыки и умение работать командой складываются воедино, то приходит понимание сроков выполнения работы. Поэтому мы знаем - что такое дедлайн и как ему соответствовать.</div>
                            </div>
                        </div>
                        <div className='services-info'>
                            <div className='services-info-padding'>
                                <div className='services-info_logo'><img src={clients} /></div>
                                <div className='services-info-title'>Довольные клиенты</div>
                                <div className='services-info-message'>57% наших клиентов пришли к нам по рекомендациям. Мы строим партнерские отношения на доверии и работаем командой.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
export default Services