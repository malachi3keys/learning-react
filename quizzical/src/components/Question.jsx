import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Question(props) {    
    const multChoice = props.answers
    const qName = props.id
    const [selected, setSelected] = useState({
        [qName]: ''
    })


    function answerChange(event) {
        const {name, value, type, checked} = event.target
        setSelected(prevAnswer => {
            return {
                ...prevAnswer,
                [name]: type === "checkbox" ? checked : value
            }
        })      
    }
    
    const choices = multChoice.map((a) => {
        if (props.check){
            if (a == props.correct){
                var test = 'correct'
            } else {
                var test = 'incorrect'
            }
        } 

        return (
            <div key={nanoid()}>
                <label className='radio-label'>
                    <input 
                        type='radio'
                        name={qName}
                        value={a}
                        checked={selected[qName] === a}
                        onChange={answerChange}
                        className='radio-btn'
                    />
                    <div className={`answer-btn ${selected[qName] == a ? 'selected' : ''} ${test}`}>
                        {a}
                    </div>
                </label>
            </div>
        )
      })


    return (
        <div className='question'>
            <h2 className='question-title'>{props.question}</h2>
            <div className='answer-div'>{choices}</div>
            <hr className='borderline'></hr>    
        </div>
    )
}