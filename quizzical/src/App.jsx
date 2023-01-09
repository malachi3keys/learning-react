import { useState, useEffect } from 'react'
import  Intro from './components/Intro'
import  Quiz from './components/Quiz'
import  Question from './components/Question'
import './App.css'

export default function App() {
  const [showQ, setShowQ] = useState(false)
  const [questions, setQuestions] = useState([])
  var test


  function startQuiz() {
    setShowQ(true)
    // console.log(questions)
  }

  //pull 5 questions from api and map to set props for each one with horizontal rule under each one
  // also need a check answers button
  //<button className='check-answers'>Check answers</button> 

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
        .then((res) => res.json())
        .then((data) => setQuestions(data.results))

    test = newQuestions()
  },[showQ])


function newQuestions() {
  var id = 0
  const quiz = questions.map((q) => {
    id = id + 1;
    var randomAnswers = [q.correct_answer]
    randomAnswers.push(...q.incorrect_answers) //add incorrect answers to array

    //number of possible answers for multiple choice or true/false question
    var length = q.type == 'multiple' ? 4 : 2 
    //randomize answers
    for (var i = randomAnswers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = randomAnswers[i];
      randomAnswers[i] = randomAnswers[j];
      randomAnswers[j] = temp;
    }
    // console.log(randomAnswers)

    return (
      <Question 
        key={id}
        question ={q.question}
        answers = {randomAnswers}
        correct = {q.correct_answer}
        // id={q.id}
        // value={q.value}
        // isHeld={q.isHeld}
        // handleHold={holdNum}
      />
    )
  })

  return quiz
}  


  return (
    <main className='App'>
      {showQ 
      ?{test}
      :<Intro 
        startQuiz = {startQuiz}
      />
      }
    </main>
  )
}
