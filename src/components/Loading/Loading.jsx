import loading from '../img/loading-gif.gif'
import './loading.scss'

export default function Loading(){
    return (
        <div className='loading'>
            
            <img className='img' src={loading} alt='no found' />
            
        </div>
    )
}