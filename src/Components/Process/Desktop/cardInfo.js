import phone from './image/phone1.png'
import pm from './image/pm2.png'
import marketolog from './image/marketolog3.png'
import ui from './image/ui4.png'
import dev from './image/dev5.png'
import content from './image/content6.png'
import test from './image/test7.png'
import relize from './image/relize8.png'

export const cardInfo = [
    {
        id: 1,
        title: `Менеджер`,
        image: `${phone}`,
        message: `Сформирует пакет услуг под ваш запрос, 
        предложит выгодные решения и окажет 
        сопровождение полного цикла`,
        stage: `01 Этап`
    },
    {
        id: 2,
        title: `Project-менеджер`,
        image: `${pm}`,
        message: `Сформирует команду для реализации проекта, а также проконтролирует оперативность и качество работы.
        `,
        stage: `02 Этап`
    },
    {
        id: 3,
        title: `Маркетолог`,
        image: `${marketolog}`,
        message: `Проведет анализ конкурентов, изучит аналитику, составит ТЗ  для копирайтеров.`,
        stage: `03 Этап`
    },
    {
        id: 4,
        title: `Дизайнер`,
        image: `${ui}`,
        message: `Креативно подойдет к разработке интерфейсов, логотипов, фирменного стиля.`,
        stage: `04 Этап`
    },
    {
        id: 5,
        title: `Разработчик`,
        image: `${dev}`,
        message: `Напишет код, благодаря которому веб-приложение будет работать.`,
        stage: `05 Этап`
    },
    {
        id: 6,
        title: `Content - менеджер`,
        image: `${content}`,
        message: `Наполнит продукт актуальной информацией – напишет или отредактирует текста, подберет фотографии и картинки.`,
        stage: `06 Этап`
    },
    {
        id: 7,
        title: `Тестировщик`,
        image: `${test}`,
        message: `Протестирует продукт на наличие ошибок. `,
        stage: `07 Этап`
    },
    {
        id: 8,
        title: `Релиз`,
        image: `${relize}`,
        message: `Оптимизация и запуск готового проекта.`,
        stage: `08 Этап`
    },
]