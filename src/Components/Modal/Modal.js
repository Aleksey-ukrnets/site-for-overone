import React from "react"
import '../main/style.scss'
import './modal.scss'
import cross from '../../assets/image/cross.png'
const Modal = ({active, setActive, children}) => {
 

    return(
      <>
        <div className={active ? 'modal active': 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-main active': 'modal-main'} onClick={(e) => e.stopPropagation()}>
                
                {children}
                <div className="modal-close"><img src={cross} onClick={ () => { setActive(false) }} /></div>
            </div>
        </div>
      </>
    )
}
export default Modal