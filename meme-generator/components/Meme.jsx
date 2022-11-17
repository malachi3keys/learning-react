import memesData from '../src/memesData'
import { useState } from 'react'

export default function Meme() {
    const [randomMeme, setRandomMeme] = useState();

    function newMeme() {
        const topmemes = memesData.data.memes;
        var num = Math.floor(Math.random() * topmemes.length);
        setRandomMeme(topmemes[num]);
    }

    
    return (
        <main>
            <div className='caption'>
                <input className='textbox' placeholder='Top text' type='text' />
                <input className='textbox' placeholder='Bottom text' type='text' />
                <button className='get-image' onClick={newMeme}>Get a new meme image 🖼️</button>
            </div>
            
            <div className='meme'>
                <p className='top-caption'>hi</p>
                <p className='bottom-caption'>hello</p>
                {randomMeme && <img src={randomMeme.url} className='meme-image' width={randomMeme.width} height={randomMeme.height}/>}
            </div>
        </main>    
    )
}
