import React, {useEffect, useRef, useState} from 'react'
import woman from '../../assets/image/person2.png'
import man from '../../assets/image/person1.png'
import './style.scss'
import { commandData } from './commandData'

import linked from '../../assets/image/linkedin.png'
import twitter from '../../assets/image/twitter.png'
import github from '../../assets/image/github.png'


const Command = () => {
const [active, setActive] = useState(false)
let RefName = useRef(null)
const CommandToggle = index => {
    if (active === index) {
      //if clicked question is already active, then close it
      return setActive(false);
      
    }

    setActive(index);
    // console.log(active)
  };



    return(
        <>
        <div className='command'>
            <div className='command-main'>
                <h1>Команда профессионалов</h1>
                <div className='command-list'>
                  
                    {commandData.map((item, index) => {
                        return(
                            <>

                            <div className='command-wrapper'>
                                <div className='command-person' onClick={() => {CommandToggle(index)}} key={index + 100}>  
                                    <img src={item.photo} alt='photo' />
                                </div>
                                <div className='command-person_name' ref={RefName} style={active === index ? {display: 'none'} : {display: 'block'}}>
                                   {item.person}  
                                </div>
                            </div>    
                            {active === index ? (
                                <div style={{position:'relative'}}>
                                    <div className='command-profile'>
                                        <div className='command-profile-main'>
                                            <div className='command-line'></div>
                                            <div className='command-profile-name'>{item.person}</div>
                                            <div className='command-profile-position'>{item.position}</div>
                                            <div className='command-profile-about'>{item.about}</div>
                                            {/* <div className='command-profile-social'>
                                                <div className='command-profile-social_icon'> <img src={linked} /></div>
                                                <div className='command-profile-social_icon'><img src={twitter} /></div>
                                                <div className='command-profile-social_icon'><img src={github} /></div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>                                  
                            ): null}
                            </>
                        )
                        
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default Command