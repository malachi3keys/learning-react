import logo from '../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img className='airlogo' src={logo} alt='airbnb logo'/>
        </nav>
    )
}