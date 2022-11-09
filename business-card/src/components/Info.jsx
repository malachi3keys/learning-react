import userimg from '../assets/malachi_pfp.jpeg'
import {FaEnvelope} from 'react-icons/fa'

export default function Info() {
    return (
        <div>
            <img src={userimg} className='profile-pic' alt='picture of Malachi'/>
            <div className='info-words'>
                <h1 className='name'>Malachi Hibbler</h1>
                <p className='title'>Frontend Developer</p>
                <div>
                    <a className='site' href='https://malachi3keys.github.io/' target='_blank' rel='noopener noreferrer'>
                        malachi3keys.github.io
                    </a>
                </div>
                    <a href='mailto:malachi.hibbler@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <button className='btn-email' type='button'><FaEnvelope /> <p className='email-text'>Email</p></button>
                    </a>  
                
            </div>
        </div> 
    )
}
