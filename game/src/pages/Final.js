import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cross from '../constants/img/Cross'
import Start from '../constants/img/Start'
import Tick from '../constants/img/Tick'
import { useGame } from '../contexts/GameContext'

function Final() {
  /* context imported to this page */
  const {score,number1List,number2List,correctAnswer,restart,controlCorrectAnswer} = useGame()
  
  const [boardNumber1,setBoardNumber1] = useState(number1List)
  const [boardNumber2,setBoardNumber2] = useState(number2List)

  console.log("final",number1List,number2List)
  console.log("controlCorrectAnswer", controlCorrectAnswer)

  return (
    /*final block information */
    <div className='finalBody'>
      <div className='finalContainer'>
        <div className='final'>
          <div className='finalTitle'>Final</div>
          <div className='finalSubline'></div>
          <div className='finalPoint'>Point: {score}</div>
          <div className='finalQuestion'>Question: 10</div>
          <div className='correctAnswer'>Correct Answer: {correctAnswer}</div>
          <div className='restartContainer'>
            <Start width={300} height={139} />
            <Link to='/' className='restart' onClick={()=>restart()}>Restart</Link>
          </div>
        </div>
        {/* this section shows all question in a tour */}
        <div className='allQuestion'>
          <div className='questionTitle'>All Question</div>
          <div className='questionSubline'></div>
          <div className='questions'>{boardNumber1[0]} x {boardNumber2[0]} = {boardNumber1[0]*boardNumber2[0]}
           { controlCorrectAnswer == boardNumber1[0]*boardNumber2[0] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
           </div>
          <div className='questions'>{boardNumber1[1]} x {boardNumber2[1]} = {boardNumber1[1]*boardNumber2[1]}
          { controlCorrectAnswer == boardNumber1[1]*boardNumber2[1] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
           </div>
          <div className='questions'>{boardNumber1[2]} x {boardNumber2[2]} = {boardNumber1[2]*boardNumber2[2]}
          { controlCorrectAnswer == boardNumber1[2]*boardNumber2[2] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
          <div className='questions'>{boardNumber1[3]} x {boardNumber2[3]} = {boardNumber1[3]*boardNumber2[3]}
          { controlCorrectAnswer == boardNumber1[3]*boardNumber2[3] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
          <div className='questions'>{boardNumber1[4]} x {boardNumber2[4]} = {boardNumber1[4]*boardNumber2[4]}
          { controlCorrectAnswer == boardNumber1[4]*boardNumber2[4] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
          <div className='questions'>{boardNumber1[5]} x {boardNumber2[5]} = {boardNumber1[5]*boardNumber2[5]}
          { controlCorrectAnswer == boardNumber1[5]*boardNumber2[5] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
          <div className='questions'>{boardNumber1[6]} x {boardNumber2[6]} = {boardNumber1[6]*boardNumber2[6]}
          { controlCorrectAnswer == boardNumber1[6]*boardNumber2[6] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
          <div className='questions'>{boardNumber1[7]} x {boardNumber2[7]} = {boardNumber1[7]*boardNumber2[7]}
          { controlCorrectAnswer == boardNumber1[7]*boardNumber2[7] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
          <div className='questions'>{boardNumber1[8]} x {boardNumber2[8]} = {boardNumber1[8]*boardNumber2[8]}
          { controlCorrectAnswer == boardNumber1[8]*boardNumber2[8] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
          <div className='questions'>{boardNumber1[9]} x {boardNumber2[9]} = {boardNumber1[9]*boardNumber2[9]}
          { controlCorrectAnswer == boardNumber1[9]*boardNumber2[9] ? <Tick width={18} height={18} /> : <Cross width={18} height={18}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final