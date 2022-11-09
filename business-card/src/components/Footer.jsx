import {FaGithubSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <div className='social-div'>
                <a className='socials' href='https://github.com/malachi3keys' target='_blank' rel='noopener noreferrer'><FaGithubSquare /></a>
            </div>
            <div className='social-div'>
                <a className='socials' href='https://www.linkedin.com/in/malachi-hibbler-8a7053123' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
            </div>
            <div className='social-div'>
                <a className='socials' href='' target='_blank' rel='noopener noreferrer'><FaTwitterSquare /></a>
            </div>
        </footer> 
    )
}