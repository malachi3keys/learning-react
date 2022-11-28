import memesData from '../src/memesData'
import { useState } from 'react'

export default function Meme() {
    const [topMemes, setTopMemes] = useState(memesData.data.memes); 

    const [randomMeme, setRandomMeme] = useState({
        memeImg: topMemes[2],
        topText: '',
        bottomText: ''
    });

    function newMeme(event) {
        event.preventDefault()
        var num = Math.floor(Math.random() * topMemes.length);
        setRandomMeme(prevMeme => ({...prevMeme, memeImg: topMemes[num]}));
    }

    function changeText(event) {
        const {name, value} = event.target;
        setRandomMeme(prevText => ({...prevText, [name]: value}));
    }

    return (
        <main>
            <form className='caption'>
                <input 
                    name='topText' 
                    className='textbox' 
                    placeholder='Top text' 
                    type='text'
                    value={randomMeme.topText}
                    onChange={changeText}
                />
                <input 
                    name='bottomText' 
                    className='textbox' 
                    placeholder='Bottom text' 
                    type='text' 
                    value={randomMeme.bottomText}
                    onChange={changeText}
                />
                <button className='get-image' onClick={newMeme}>Get a new meme image 🖼️</button>
            </form>
            
            <div className='meme'>
                {randomMeme && <img src={randomMeme.memeImg.url} className='meme-image'/>}
                <p className='top-caption'>{randomMeme.topText}</p>
                <p className='bottom-caption'>{randomMeme.bottomText}</p>
            </div>
        </main>    
    )
}
