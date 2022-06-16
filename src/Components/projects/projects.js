import './style.scss';
import { FiArrowRight} from 'react-icons/fi';
import purple from '../../assets/image/purpleTheme.png';
import blue from '../../assets/image/blueTheme.png';
import redFirst from '../../assets/image/redTheme1.png';
import redSecond from '../../assets/image/redTheme2.png';
import redThird from '../../assets/image/redTheme3.png';

const Projects = () => {


    return(
      <>
      <section className="projects">
        <div className="projects-main">
            <h1>Мы гордимся этими проектами</h1>
            <div className="projects-assets">
                <div className="projects-line"></div>
                <div className="projects-another">Другие проекты<FiArrowRight  /></div>
            </div>
            <div className='projects-columns'>
                <div className='projects-columns-left'>
                    <div className='projects-purple_theme'><img src={purple} /></div>
                </div>
                <div className='projects-columns-right'>
                    <div className='projects-blue_theme'> <img src={blue} /></div>
                    <div className='projects-red_theme'> 
                    <img src={redFirst} />
                    {/* <img src={redSecond} />
                    <img src={redThird} /> */}
                    </div>
                    <div className='projects-blue_theme'> <img src={blue} /></div>
                    <div className='projects-red_theme'> 
                    <img src={redFirst} />
                    {/* <img src={redSecond} />
                    <img src={redThird} /> */}
                    </div>
                    <div className='projects-blue_theme'> <img src={blue} /></div>
                    <div className='projects-red_theme'> 
                    <img src={redFirst} />
                    {/* <img src={redSecond} />
                    <img src={redThird} /> */}
                    </div>
                </div>      
            </div>
        </div>
      </section>
      </>
    )
}
export default Projects