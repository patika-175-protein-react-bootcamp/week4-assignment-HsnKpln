import React from 'react'
import { Link } from 'react-router-dom'
import Start from '../constants/img/Start'
import { useGame } from '../contexts/GameContext'

function Home() {
    const {totalPoint,totalQuestion,totalCorrectAnswer,createNumber} = useGame();
  return (
      <div className='main'>
      <div className='mainContainer'>
          <div className='title'>Mathematics Game</div>
          <div className='subline'></div>
          <div className='info'>Total Point: {totalPoint} </div>
          <div className='info'>Total Question: {totalQuestion} </div>
          <div className='info'>Correct Answer: {totalCorrectAnswer} </div>
          <div className='startContainer'>
              {/* <div className='start' onClick={()=> <Link to='/game'/>}>Start</div> */}
              <Start/>
              <Link to='/game'className='start' onClick={createNumber}>Start</Link>
          </div>
      </div>
      </div>
  )
}

export default Home