import {FaGlobeAmericas} from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav>
            <FaGlobeAmericas className='world'/>
            <p className='title'> my travel journal.</p>
        </nav>
    )
}