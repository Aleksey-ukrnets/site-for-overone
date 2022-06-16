import './style.scss'
import { infoFirst } from './recallInfoFirst'
import { infoSecond } from './recallInfoSecond'
const Recall = () => {

    return(
        <>
        <div className="recall">
            <div className="recall-main">
                <div className="recall-columns">
                    <div className="recall-left">
                        <h3>Наши клиенты <br /> 
доверяют нам</h3>
                        <p>Мы дорожим КАЖДЫМ клиентом
и делаем так, чтобы клиент дорожил нами.
</p>
                    </div>
                    <div className="recall-right">
                        <div className="recall-right_first">
                            {infoFirst.map( item => {
                                return(
                                    <>
                                        <div className='recall-card' key={item.id}>
                                            <div className='recall-card-main'>
                                                <p>{item.header}</p>
                                                <div className='recall-card-about'>
                                                    <div className='recall-card_photo'>
                                                    <img src={item.photo} />
                                                    </div>
                                                    <div className='recall-card_human'>
                                                        <h6>{item.name}</h6>
                                                        <span>{item.position}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="recall-right_second">
                        {infoSecond.map( (item,index) => {
                                return(
                                    <>
                                        <div className='recall-card' key={item.id + index}>
                                            <div className='recall-card-main'>
                                                <p>{item.header}</p>
                                                <div className='recall-card-about'>
                                                    <div className='recall-card_photo'>
                                                        <img src={item.photo} />
                                                    </div>
                                                    <div className='recall-card_human'>
                                                        
                                                        <h6>{item.name}</h6>
                                                        <span>{item.position}</span>    
                                                      
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Recall