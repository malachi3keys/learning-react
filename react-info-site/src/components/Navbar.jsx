import reactlogo from '../assets/react-icon-small.png'

export default function Navbar() {
    return(
        <nav>
            <img src={reactlogo} className='icon'  alt='React logo' />
            <h3 className='nav-title'>ReactFacts</h3> 
            <h4 className='project'>React Course - Project 1</h4>
        </nav>
    )
}