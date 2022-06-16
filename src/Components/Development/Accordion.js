

import React, { useEffect, useRef, useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

import './accordion.scss'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  background: #fff;
  margin-top: 32px;
`;

const Container = styled.div`

  box-shadow: none;
`;

const Wrap = styled.div`
  color: #fff;
  height: 88px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  width: 100%;
  cursor: pointer;
  // border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom:none;
  border-radius: 8px 8px 0 0;
  
  h2 {
    padding: 24px 30px 24px 32px;
    font-size: 24px;
    width:100%;
    color: #00114B;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 8px 8px;
  background: #FFFFFF;
  transition: 0.5s;
  
  border-bottom: 1px solid rgba(0,0,0,0.1);
  border-left: 1px solid rgba(0,0,0,0.1);
  border-right: 1px solid rgba(0,0,0,0.1);
  p {
    font-family: Avenir Next Cyr;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;   
    padding: 0 50px  20px 24px;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  

  const wrapRef = useRef()




  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#0812F8', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
              
                <Wrap key={index} style={clicked === index ? {background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.1)',borderLeft: '1px solid rgba(0,0,0,0.1)',borderRight: '1px solid rgba(0,0,0,0.1)'} : {background: 'rgba(82,134,255,0.05)'}}   
                 ref={wrapRef} className='wrap'  onClick={
                  () => {toggle(index)
                   
                  } 
                 

                }
                   >
                  <h2>{item.question}</h2>
                  <span >{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown key={index + 100} >
                    <p style={{whiteSpace: 'pre-line'}}>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;