export default function Question(props) {    
    if (props.anum == 4){
        var mult = true
    } else {
        var mult = false
    }

    console.log(props.question)

    return (
        <div>
            <div  className='question'>
                <h2 className='question-title'>{props.question}</h2>
                {mult &&
                    <div className='answer-div'>
                        <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>{props.answers[0]}</button>
                        <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>{props.answers[1]}</button>
                        <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>{props.answers[2]}</button>
                        <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>{props.answers[3]}</button>
                    </div>
                } 
                {mult || 
                    <div className='answer-div'>
                        <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>{props.answers[0]}</button>
                        <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>{props.answers[1]}</button>
                    </div>
                } 
            </div>
            <hr className='borderline'></hr>    
        </div>
        
       
    )
}