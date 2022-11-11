import photoGrid from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='cluster'>
                <img className='photo-grid' src={photoGrid} alt='photos in a grid'/>
            </div>
            <div className='description'>
                <h1 className='big-title'>Online Experiences</h1>
                <div className='subtext'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
            </div>
        </div>
    )
}