


import Modal from '../Modal/Modal'
import './style.scss'

const BePartners = ({setPartners}) => {

    return(
        <>
        <div className="partners" id='partners'>
            <div className="partners-main">
                <h1>Давайте сотрудничать!</h1>
                <p>Мы сотрудничаем с амбициозными брендами и людьми.</p>
                {/* <div className="line"></div> */}
                <button className="partners__btn" onClick={() => setPartners(true)}>Начать</button>
            
            </div>
        </div>
        </>
    )


}


export default BePartners