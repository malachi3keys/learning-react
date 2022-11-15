import star from '../assets/star.png'

export default function Cards(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className='badge'>{badgeText}</div>}
            <img className='card-img' src={`../../images/${props.item.coverImg}`}/>
            <div className='star-div'>
                <img className='star' src={star} />
                <span className='rating'>{props.item.stats.rating}</span>
                <span className='stays'> ({props.item.stats.reviewCount}) • </span> 
                <span className='location'> {props.item.location}</span> 
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p><span className='price'>From ${props.item.price}</span> / person</p>   
        </div> 
    )
}