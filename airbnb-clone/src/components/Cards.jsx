import star from '../assets/star.png'
import katie from '../assets/katie-zaferes.png'

export default function Cards(props) {
    console.log(props.img)
    return (
        <div className='card-holder'>
            <div className="card">
                <img className='card-img' src={props.img}/>
                <div className='card-text'>
                    <div className='star-div'>
                        <img className='star' src={star} />
                        <span className='rating'>{props.rating}</span>
                        <span className='stays'> {props.reviewCount} • </span> 
                        <span className='country'> {props.country}</span> 
                    </div>
                    <p>{props.title}</p>
                    <p><span className='price'>From ${props.price}</span> / person</p>   
                </div>
                
            </div>
        </div>
    )
}