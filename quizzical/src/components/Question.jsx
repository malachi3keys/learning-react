export default function Question(props) {
    return (
        <div>
            <h2>question{props.question}</h2>
            <div className='answer-div'>
                <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>answer1 {props.answers[0]}</button>
                <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>answer2 {props.answers[1]}</button>
                <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>answer3 {props.answers[2]}</button>
                <button className={`answer-btn ${props.isSelected ? 'selected' : ''} ${props.isCorrect ? 'correct' : 'incorrect'}`}>answer4 {props.answers[3]}</button>
            </div>
        </div>
    )
}