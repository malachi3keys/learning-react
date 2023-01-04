import { useEffect, useState } from 'react'
import Instructions from './components/Instructions'
import Die from './components/Die'
import './App.css'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(() => allNewDice())
  const [tenzies, setTenzies] = useState(false)

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
    setDice(oldDice => oldDice.map((die) => {
        return die.id === id
          ? {...die, isHeld: !hold}
          : die
      })
    )
  }

  useEffect(() => {
    //check if all held dice match
    const dieCheck = dice[0].value;
    const allHeld = dice.every(die => die.isHeld)
    var dieCount = 0;

    if (allHeld){ 
      for (let i=0; i < dice.length; i++){
        if(dice[i].value === dieCheck){
          dieCount = dieCount + 1;
          if(dieCount == dice.length){
            setTenzies(true)
          }
        }
      }
    }
    
  }, [dice])

  function newGame(){
    //reset all dice
    setTenzies(false)
    setDice(allNewDice())
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
      {tenzies && <Confetti numberOfPieces={500} recycle={false}/>}
      <Instructions />
      <div className='dice-box'>
        {rolls} 
      </div>
      {tenzies 
      ? <button 
        className='roll'
        onClick={newGame}>
        New Game </button>
      : <button 
        className='roll'
        onClick={rollDice}>
        Roll</button>}
    </main>
  )
}
