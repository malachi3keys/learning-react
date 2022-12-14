import { useState } from 'react'
import Instructions from './components/Instructions'
import Die from './components/Die'
import './App.css'

export default function App() {
  const [dice, setDice] = useState(() => allNewDice())

  function allNewDice() {
    const roll = [];
    const diceNum = 10;
    for (let i=0; i < diceNum; i++){
      var num = Math.floor((Math.random() * 6) + 1);
      roll.push({
        value: num,
        isHeld: false,
        id: i
      })
    }

    return roll
  }  

  function rollDice() {
    const newRoll = allNewDice();
    
    setDice(oldDice => oldDice.map((die) => {
      return die.isHeld
        ? die
        : {...die, value: newRoll[die.id].value}
    }))
  }

  function holdNum(id, hold) { 
      // need to check if held numbers match each other
      // win game when all held dice are same number

    setDice(oldDice => oldDice.map((die) => {
        return die.id === id
          ? {...die, isHeld: !hold}
          : die
      })
    )
  }


  const rolls = dice.map((die) => {
    return (
      <Die 
        key={die.id}
        id={die.id}
        value={die.value}
        isHeld={die.isHeld}
        handleHold={holdNum}
      />
    )
  })


  return (
    <main className='App'>
      <Instructions />
      <div className='dice-box'>
        {rolls} 
      </div>
      <button 
        className='roll'
        onClick={rollDice}>
        Roll</button>
    </main>
  )
}
