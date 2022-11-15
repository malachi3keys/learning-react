import {FaMapMarkerAlt} from 'react-icons/fa'

export default function Entry(props) {
    var place = props.location.toUpperCase();

    return (
        <div className='card'>
            <img className='snapshot' src={props.imageUrl} />
            <div className='details'>
                <div className='location-div'>
                    <FaMapMarkerAlt className='marker' />
                    <p className='location'>{place}</p>
                    <a className='maps' href={props.googleMapsUrl} target='_blank' rel='noopener noreferrer'>
                        View on Google Maps
                    </a>
                </div>
                <h2 className='place'>{props.title}</h2>    
                <p className='dates'>{props.startDate} - {props.endDate} </p>
                <p className='journal'>{props.description}</p>
            </div>
        </div>
    )
}