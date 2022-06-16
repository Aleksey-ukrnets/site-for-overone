
import { useState } from "react";
import "./style.scss";
import info from '../../../assets/image/tab1.png'
import design from '../../../assets/image/tab2.png'
import dev from '../../../assets/image/tab3.png'
import test from '../../../assets/image/tab4.png'

function Process() {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
        <div className="container-wrapper">
        <div className="container-title"><h1>Процесс разработки</h1></div>
        <div className="container-main">
            <div className="bloc-tabs">
                <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                >
                <p>1. Сбор информации</p>
                </div>
                <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                >
                <p>2. Дизайн</p>
                </div>
                <div
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
                >
                <p>3. Разработка</p>
                </div>
                <div
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
                >
                <p>4. Тестирование</p>
                </div>
                <div
                className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
                >
                <p>5. Релиз</p>
                </div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <div className="content-main">
                        <div className="content-columns">
                            <div className="content-columns_left">
                                <img src={info} alt="info-logo" />  
                            </div>
                            <div className="content-columns_right">
                                <h2>Сбор информации</h2>
                                <h4>Менеджер по продажам</h4>
                                <p>Сформирует пакет услуг под ваш запрос, предложит выгодные решения и окажет сопровождение полного цикла разработки.</p>
                                <h4>Project- менеджер</h4>
                                <p>Сформирует пакет услуг под ваш запрос, предложит выгодные решения и окажет сопровождение полного цикла разработки. </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <div className="content-main">
                        <div className="content-columns">
                            <div className="content-columns_left">
                                <img src={design} alt="info-logo" />  
                            </div>
                            <div className="content-columns_right">
                                <h2>Дизайн</h2>
                                <h4>Content - менеджер</h4>
                                <p>Наполнит ваш сайт актуальной информацией (текстовой и графической). Займётся написанием 
и редактированием новых текстов. Произведёт поиск качественных фотографий для размещения 
в статьях или других блоках сайта.
</p>
                                <h4>Дизайнер</h4>
                                <p>Займётся графическим и художественным оформлением вашего сайта: прорисовкой макетов дизайна, созданием красивого интерфейса, кнопок, меню и других элементов.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                <div className="content-main">
                        <div className="content-columns">
                            <div className="content-columns_left">
                                <img src={dev} alt="info-logo" />  
                            </div>
                            <div className="content-columns_right">
                                <h2>Разработка</h2>
                                <h4>Программист</h4>
                                <p>Осуществит проектирование  будущего сайта, 
займётся программированием интерактивных 
блоков и позаботится о том, чтобы сайт 
быстро загружался в браузере. </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"} >
                <div className="content-main">
                        <div className="content-columns">
                            <div className="content-columns_left">
                                <img src={test} alt="info-logo" />  
                            </div>
                            <div className="content-columns_right">
                                <h2>Тестирование</h2>
                                <h4>Тестировщик</h4>
                                <p>При помощи специальных программ и вручную 
специалист протестирует IT-продукт, исключит
ошибки в ПО, обеспечит качество продукта 
и его корректную работу.

</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                <div className="content-main">
                        <div className="content-columns">
                            <div className="content-columns_left">
                                <img src={dev} alt="info-logo" />  
                            </div>
                            <div className="content-columns_right">
                                <h2>Релиз</h2>
                                <h4>Тестирование</h4>
                                <p>Запускаем готовый проект в работу, устраняем мелкие
ошибки и оптимизируем. Релиз считается важным событием
как для внутренних команд, так и для целевой аудитории
.
</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </div>
    </div>
  );
}

export default Process;