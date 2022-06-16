
import Accordion from './Accordion';
import './style.scss'
import DevPhoto from './devphoto.png'



const Development = () => {
    
  
    return (
        <>
        <div className="develop" id='develop'>
            <div className="develop-main">
            <h1>Только лучшие услуги</h1>
                <div className='develop-column'>
                    <div className='develop-column_left'>
                        
                        
                        <Accordion />
                    </div>
                    <div className='develop-column_right'>
                        <img src={DevPhoto} alt='dev' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
  export default Development;