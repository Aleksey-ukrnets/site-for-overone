
import {statistic} from './statistic'
import './style.scss'
const Stat = () => {


    return(
      <>
      <div className='statistics'>
          <div className='statistics-main'>
           {statistic.map( (item, index) => {
               return(
                   <div className='statistics-info' key={index}>
                       <div className='statistics-number'><p>{item.number}</p></div>
                       <div className='statistics-text'>{item.title}</div>
                   </div>
               )
           } )}
          </div>
      </div>
      </>
    )
}
export default Stat