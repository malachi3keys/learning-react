import memesData from '../src/memesData'
import { useState } from 'react'

export default function Meme() {
    const [topMemes, setTopMemes] = useState(memesData.data.memes); 
    const [randomMeme, setRandomMeme] = useState({
        memeImg: topMemes[0],
        topText: '',
        bottomText: ''
    });

    function newMeme() {
        var num = Math.floor(Math.random() * topMemes.length);
        setRandomMeme(prevMeme => ({...prevMeme, memeImg: topMemes[num]}));
    }

    
    return (
        <main>
            <div className='caption'>
                <input className='textbox' placeholder='Top text' type='text' />
                <input className='textbox' placeholder='Bottom text' type='text' />
                <button className='get-image' onClick={newMeme}>Get a new meme image 🖼️</button>
            </div>
            
            <div className='meme'>
                <p className='top-caption'>{randomMeme.topText}</p>
                <p className='bottom-caption'>{randomMeme.bottomText}</p>
                {randomMeme && <img src={randomMeme.memeImg.url} className='meme-image'/>}
            </div>
        </main>    
    )
}
