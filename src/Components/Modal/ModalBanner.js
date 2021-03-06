import React, { useEffect, useRef, useState } from 'react';
// import emailjs from '@emailjs-com';
import * as emailjs from "emailjs-com";
import '../main/style.scss'
import './modal.scss'
import modal from '../../assets/image/modal.png'
import Loader from '../../assets/loader/loader';

// const useValidation = (value, validations) =>{
    
    
//     const [isEmpty,setEmpty] = useState(true)
//     const [minLenghtError, setMinLenghtError] = useState(false)
//     useEffect(
//         ()=> {
            
//             for(const validation in validations){
//                 switch(validation){
//                     case 'minLenght':
//                         value.lenght < validations[validation] ? setMinLenghtError(true): setMinLenghtError(false)
//                         break;
//                     case 'isEmpty':
//                         value ? setEmpty(false) : setEmpty(true) 
//                         break;   
//                 }
//             }
//             if(isEmpty || minLenghtError ) {
//                 setFormValid(false)
//             } else {
//                 setFormValid(true)
//             }
//         }, [value,isEmpty,minLenghtError]
       
//     )
//     return{
//         isEmpty,
//         minLenghtError
//         }
// }


// useEffect( () => {

//     if(isEmpty || minLenghtError ) {
//         setFormValid(false)
//     } else {
//         setFormValid(true)
//     }

// },[isEmpty,minLenghtError])



// const useInput = (initialValue,validations) => {
//     const [value, setValue] = useState(initialValue)
//     const [isDirty, setDirty] = useState(false)
//     const valid = useValidation(value, validations)
//     const onChange = (e) => {
//         setValue(e.target.value)
//     }

//     const onBlur = (e) => {
//         setDirty(true)
//     }
//     return {
//         value,
//         onChange,
//         onBlur,
//         isDirty,
//         ...valid
//     }
// }
const ModalBanner = ({active, setComplite,setActiveModal})=> {
    // const number = useInput('',{isEmpty: true, minLenght: 5})
    // const name = useInput('', {isEmpty: true})
    const [number, setNumber] = useState()
    const [name, setName] = useState()
    const [numberDirty, setNumberDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError,setNameError] = useState('???????? ???? ?????????? ???????? ????????????')
    const [numberError, setNumberError] = useState('?????????? ???? ?????????? ???????? ????????????')
    const [formValid, setFormValid] = useState(false)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        if(numberError || nameError) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [numberError,nameError])




    const form = useRef();
    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('email', 'template_bdjl71d', e.target, 'user_uzw0Rj8LpWGFjeBZpXRJQ')
      .then((result) => {
           
          setActiveModal(false)
          setLoading(false)
          setComplite(true)
          console.log(result.text);
      }, (error) => {
        setLoading(false)
        setActiveModal(false)
          console.log(error.text);
      });
      e.target.reset()
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
    const numberHandler = (e) => {
        setNumber(e.target.value)
        if(e.target.value){
            setNumberError('')
        }else {
            setNumberError('?????????? ???? ?????????? ???????? ????????????')
        }
    } 
    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value){
            setNameError('')
        }else {
            setNameError('???????? ???? ?????????? ???????? ????????????')
        }
    }     


    return(
        <>
        {isLoading && <Loader/>}
          <div className="modal-columns">
                        <div className="modal-columns-left"> <img src={modal}  /></div>
                        <div className="modal-columns-right">
                            <h1>???????? ???????????????</h1>
                            <div className="modal-title" > 
                            ?????????????????? ?????? ???????????????????????? ?????? ??????????????,
                            ?? ?????? ???????????????? ???????????????? ?? ???????? 
                            </div>
                            <form ref={form} className="modal-form" onSubmit={sendEmail}  > 
                               {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                               
                               
                                <input  onChange={e => nameHandler(e)}  onBlur={e => BlurHandler(e)} type='text' placeholder="???????? ??????"  name='name'/>
                                
                                {/* {number.isDirty && number.minLenghtError && <div style={{color: 'red'}}>???????????????????????? ??????????</div>}  
                                {number.isDirty && number.isEmpty && <div style={{color: 'red'}}>???????? ???? ?????????? ???????? ????????????</div>}  */}
                                {(numberDirty && numberError) && <div style={{color: 'red'}}>{numberError}</div>}
                                <input onChange={e => numberHandler(e)}  onBlur={e => BlurHandler(e)}  type='number' placeholder="?????? ??????????" name="number" />

                                <input type='text' placeholder="??????????????????????" name="message" />
                                <button disabled={!formValid}  
                                className="button button-theme-blue button-size-standart" 
                                onClick={ ()=> { setLoading(true)}}> ???????????????? ????????????????????????</button>
                               
                            </form>
                        </div>
                    </div> 
                    </>
    )
}

export default ModalBanner