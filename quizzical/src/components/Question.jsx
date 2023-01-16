import { useState } from 'react'

export default function Question(props) {    
    const multChoice = props.answers
    const [selected, setSelected] = useState(() => {
        const titles = [];
        for (let i = 0; i < multChoice.length; i++){
            var choiceTitle = multChoice[i]
            titles.push({[choiceTitle]: false})
        }

        return titles
    })

    function selectAnswer(a) {
        setSelected(prevSelected => ({...prevSelected, [a]: !prevSelected[a]}))
    }

    
    const choices = multChoice.map((a) => {
        var test

        if (props.check){
            if (a == props.correct){
                test = 'correct'
            } else {
                test = 'incorrect'
            }
        } 
        
        return (
            //make radio choice instead of separate buttons so user can only choose one??
            <button 
                key={a}
                className={`answer-btn ${selected[a] ? 'selected' : ''} ${test}`}
                onClick={() => selectAnswer(a)}
            >
                {a}
            </button>
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