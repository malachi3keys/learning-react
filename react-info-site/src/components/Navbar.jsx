import reactlogo from '../assets/react-icon-small.png'

export default function Navbar(props) {
    return(
        <nav className={props.lightMode ? 'light' : ''}>
            <img src={reactlogo} className='icon'  alt='React logo' />
            <h3 className='nav-title'>ReactFacts</h3> 
            <div className="toggler">
                <p className="toggler--dark">Dark</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleLightMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--light">Light</p>
            </div>
        </nav>
    )
}