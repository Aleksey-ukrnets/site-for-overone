import React,{useState} from 'react';
import './app.scss'
import BurgerMenu from './Components/burgerMenu/BurgerMenu';
import Clients from './Components/clients/clients';
import Development from './Components/Development/Development';
import HeaderMain from './Components/header/headerMain';
import Cooperation from './Components/Cooperation/Cooperation';
import Banner from './Components/main/Banner';
import Modal from './Components/Modal/Modal';

import Projects from './Components/projects/projects';
import Services from './Components/services/services';
import Command from './Components/Command/command';
import FooterBase from './Components/footer/Footer';
import BePartners from './Components/footer/bePartners';
import ModalBanner from './Components/Modal/ModalBanner';
import ModalPartners from './Components/Modal/ModalPartners';
import AboutCompany from './Components/footer/about';
import ModalComplite from './Components/Modal/ModalComplite';
import { Helmet } from 'react-helmet';
import Process from './Components/Process/Mobile/process';
import ProcessDesktop from './Components/Process/Desktop/processDesktop'
import Recall from './Components/clients/recall/recall';



const App = () => {
    const [activeModal, SetModalActive] = useState(false)
    const [activeModal2, SetModalActive2] = useState(false)
    const [activeModal3, SetModalActive3] = useState(false)

    const [activeMenu, setActiveMenu] = useState(false)
    if (activeModal  ||  activeModal2 || activeModal3) {
      document.querySelector('body').style.position = 'fixed'
    } else {
      document.querySelector('body').style.position = 'static'
    }
  return (
    <>
      <HeaderMain  menu={activeMenu} setMenu={setActiveMenu} />
      <Helmet>
        <title>Твоя IT поддержка</title>
        <meta name='description' content='Лучшие услуги по разработке любого функционала разной сложности!' />
      </Helmet>
      <Banner  setActiveModal={SetModalActive} setPartners={SetModalActive2} />
      <Services />
      <Process />
      <ProcessDesktop />
      <Development />
      {/* <Projects /> */} 
      {/* <Clients /> */}
      <Recall />
      <Modal active={activeModal} setActive={SetModalActive}><ModalBanner active={activeModal} setComplite={SetModalActive3} setActiveModal={SetModalActive} /></Modal>
      <ModalPartners activeComplite={activeModal3} setComplite={SetModalActive3} setPartners={SetModalActive2} activePartners={activeModal2} />
      <Modal active={activeModal3} setActive={SetModalActive3}><ModalComplite/></Modal>
      <BurgerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}  />
      <Cooperation />
      <Command />
      {/* <FooterBase /> */}
      <BePartners setPartners={SetModalActive2} />
      <AboutCompany />
    </>
  );
}

export default App;