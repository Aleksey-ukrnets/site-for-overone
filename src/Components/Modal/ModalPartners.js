import clip from '..//..//assets/image/clip.png'
import { useRef, useState,useEffect } from 'react'
import * as emailjs from "emailjs-com";
import './modalpartners.scss'
import { modalText } from './modalTextPartners'
import cross from '../../assets/image/cross.png'
import Loader from '../../assets/loader/loader';


const ModalPartners = ({activePartners,activeComplite,setPartners,setComplite}) => {
    const inpRef = useRef()
    const [activeColor, setColor] = useState(false)
    const [number, setNumber] = useState()
    const [name, setName] = useState()
    const [numberDirty, setNumberDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError,setNameError] = useState('Поле не может быть пустым')
    const [numberError, setNumberError] = useState('Номер не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if(numberError || nameError) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [numberError,nameError])


    const numberHandler = (e) => {
        setNumber(e.target.value)
        if(e.target.value){
            setNumberError('')
        }else {
            setNumberError('Номер не может быть пустым')
        }
    } 


    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value){
            setNameError('')
        }else {
            setNameError('Поле не может быть пустым')
        }
    }   

    const  BlurHandler = (e) => {
        switch (e.target.name){
            case 'name':
                setNameDirty(true)
                break
            case 'number':
                setNumberDirty(true)
                break    
        }
    }
   

    const HandleToggle = index => {
        if (activeColor === index) {
            //if clicked question is already active, then close it
            return setColor(null);
            
          }
      
          setColor(index);
          
       
    }
    
    function sendEmailPartners(e){
        e.preventDefault();

    emailjs.sendForm('email', 'template_bdjl71d', e.target, 'user_uzw0Rj8LpWGFjeBZpXRJQ')
     
      .then((result) => {
        
        setPartners(false)
        setLoading(false)
        setComplite(true)
          console.log(result.text);
      }, 
      
      (error) => {
        setLoading(false)
        console.log(error.text);
      });
      e.target.reset()
      
    }

    return(
        <>
        {isLoading && <Loader />}
        <div className={activePartners ? 'modalPart active': 'modalPart'} onClick={() => setPartners(false)}>
            <div className={activePartners ? 'modalPart-main active': 'modalPart-main'} onClick={(e) => e.stopPropagation()}>

            <div className='modalpartners' >
               
                <h1>Что делаем?</h1>
                <h4>Выберите категорию:</h4>
                <form className='category' onSubmit={sendEmailPartners} >
                        <div className='category_list'>
                            {modalText.map((item,index) => {
                                return(
                                    <>
                                    <input ref={inpRef} className='category__type' 
                                    style={activeColor === index ? {background: '#0812F8',color: 'white'} : {background: '#EDEDED', color: '#1E212B'} }
                                     key={index + 1000} 
                                     value={item.text}
                                     readOnly
                                     name={activeColor === index ? 'subject' : ''}
                                     onClick={() => {HandleToggle(index) 
                                     console.log(inpRef) }}/>
                                    
                                    </>
                                )
                            })}
                        </div>
                    <div className='category__text'>
                        <div className='category__text-first'>
                            <div className='category__text-first_one'>
                        {(nameDirty && nameError) && <div style={{color: 'red', marginLeft: '32px',marginBottom: '15px'}}>{nameError}</div>}
                            <input onChange={e => nameHandler(e)}  onBlur={e => BlurHandler(e)} type='text' className='' placeholder='Ваше имя' name='name' />
                            </div>
                            <div className='category__text-first_sec'>
                            {(numberDirty && numberError) && <div style={{color: 'red',marginLeft: '32px',marginBottom: '15px'}}>{numberError}</div>}
                            <input onChange={e => numberHandler(e)}  onBlur={e => BlurHandler(e)} type='number' className='' placeholder='Ваш номер' name='number' />
                            </div>
                        </div>
                        <div style={{display : 'flex'}}  className='category__text-second' >
                            <input type='text' className='' placeholder='Детали проекта (опционально)' name='message' />
                            
                        </div>
                            
                            
                            <button disabled={!formValid} onClick={ ()=> { setLoading(true)}} >Отправить</button>
                    </div>    
                </form>    
            </div>
                
                <div className="modal-close"><img src={cross} onClick={ () => { setPartners(false)
                    
                }} /></div>
            </div>
        </div>
        
        </>
    )
}

export default ModalPartners