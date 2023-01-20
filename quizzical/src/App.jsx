import { useState, useEffect } from 'react'
import  Intro from './components/Intro'
import  Question from './components/Question'
import './App.css'

export default function App() {
  const [showQ, setShowQ] = useState(false)
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  const [checkAnswers, setCheckAnswers] = useState(false)
  var errorMsg = ''

  function startQuiz() {
    setShowQ(true)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
  },[showQ])


  const quiz = questions.map((q, index) => {
    var randomAnswers = [q.correct_answer]
    randomAnswers.push(...q.incorrect_answers) //add incorrect answers to array

    //randomize answers
    for (var i = randomAnswers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = randomAnswers[i];
      randomAnswers[i] = randomAnswers[j];
      randomAnswers[j] = temp;
    }

    return (
      <Question 
        key={index}
        id={index}
        question={q.question}
        answers={randomAnswers}
        correct={q.correct_answer}
        check={checkAnswers}
      />
    )
  })


  function updateAnswers(event) {
    event.preventDefault()
    const {name, value} = event.target
    // console.log(`${name}: ${value}`)
    setUserAnswers(prevAnswer => {
        return {
            ...prevAnswer,
            [name]: value
        }
    })
  }

  function gradeQuiz(event) {
    console.log(event)
    event.preventDefault()
    const userLength = Object.keys(userAnswers).length
    const qLength = Object.keys(questions).length

    if(userLength == qLength){
      console.log('yup')
      setCheckAnswers(true)
      errorMsg = ''
    } else{
      errorMsg = 'Please answer all questions'
      console.log(`${errorMsg}`)
    }    
  }

  return (
    <main className='App'>
      <div className={`${showQ ? 'hidden' : ''}`}>
        <Intro 
          startQuiz={startQuiz}
        />
      </div>
      <div className={`${showQ ? '' : 'hidden'}`}>
        <form onSubmit={gradeQuiz}>
          <div onChange={(e) => updateAnswers(e)}>
            {quiz}  
          </div>
          <button className='check-answers'>
            Check answers
          </button>
        </form>
        <div>{errorMsg}</div>
      </div>      
    </main>
  )
}
