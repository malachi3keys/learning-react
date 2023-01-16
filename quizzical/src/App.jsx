import { useState, useEffect } from 'react'
import  Intro from './components/Intro'
import  Question from './components/Question'
import { nanoid } from 'nanoid'
import './App.css'

export default function App() {
  const [showQ, setShowQ] = useState(false)
  const [questions, setQuestions] = useState([])
  const [checkAnswers, setCheckAnswers] = useState(false)

  function startQuiz() {
    setShowQ(true)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
  },[showQ])


  const quiz = questions.map((q) => {
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
        key={nanoid()}
        question ={q.question}
        answers = {randomAnswers}
        correct = {q.correct_answer}
        check= {checkAnswers}
      />
    )
  })

  function gradeQuiz() {
    setCheckAnswers(true)
  }


  return (
    <main className='App'>
      {showQ 
      ?<div>
        {quiz}
        <button 
          className='check-answers'
          onClick={gradeQuiz}>
            Check answers
        </button>
      </div>
      :<Intro 
        startQuiz = {startQuiz}
      />
      }
    </main>
  )
}
