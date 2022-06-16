
import { cardInfo } from './cardInfo'
import './style.scss'


const ProcessDesktop = () => {
 

    return(
      <>
         <div className='process__desktop'>
            <div className='process__desktop_main'>
              <h1>Процесс разработки</h1>
                <div className='process__desktop-info'>
                 
                 {cardInfo.map((item,index) => {
                   return(
                     
                    <div className='process__desktop-block' key={item.id}> 
                      <div className='process__desktop-stage'>
                        <h2>{item.stage}</h2> 
                      </div>
                      <div className='card'>
                        <div className='card-wrapper' key={item.id}>
                            <div className='card-main'>
                                <div className='card-columns'>
                                    <div className='card-img'>
                                      <img src={item.image} alt='logo-icons'/>
                                      <div className='card-circle'></div>
                                      </div>
                                    <div className='card-info'>
                                        <h2>{item.title}</h2>
                                        <p>{item.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div> 
                    </div> 
                   )
                 })}
                </div>
            </div>
        </div> 
      
       
      </>
    )
}
export default ProcessDesktop