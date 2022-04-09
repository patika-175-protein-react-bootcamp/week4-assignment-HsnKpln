import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Answer from '../constants/img/Answer'
import Board from '../constants/img/Board'
import { useGame } from '../contexts/GameContext';

function Game() {

  const {number1List,number2List,hello,index,tour,score} = useGame()

  
   const [boardNumber1,setBoardNumber1] = useState(number1List)
   const [boardNumber2,setBoardNumber2] = useState(number2List)

  return (
      <>
      <div className='summarry'>
        <div></div>
        <div className='summaryContainer'>
           <div className='score'>Score: {score}</div>
           <div className='tour'>Tour: {tour}</div>
           <div className='question'>Question: {index+1}/10</div>
        </div>
        
      </div>
      <div className='gameArea'>
        <div className='board'>
          <div className='boardText'>
            {boardNumber1 && boardNumber1[index]} x {boardNumber2 && boardNumber2[index]}
          </div>
          <Board/>
        </div>
        <div className='firstAnswer'>
              <Answer/>
              <div className='firstText'>
                {
                  index <9 ? 
                  <div className='divFirstText' onClick={()=>hello(boardNumber1[index]*boardNumber2[index])}>
                    {boardNumber1[index]*boardNumber2[index]}
                    </div> :
                  <Link to='/final'onClick={()=>hello()}>{boardNumber1[index]*boardNumber2[index]}</Link>
                }
                </div>
            </div>
            <div className='secondAnswer'>
              <Answer/>
              <div className='secondText'>
                {
                  index <9 ? 
                <div className='divSecondText' onClick={()=>hello()}>{(boardNumber1[index]-1)*boardNumber2[index]}</div> :
                <Link to='/final'onClick={()=>hello()}>{(boardNumber1[index]-1)*boardNumber2[index]}</Link>
                }
                </div>
            </div>
            <div className='thirdAnswer'>
              <Answer/>
              <div className='thirdText'>
                {
                  index <9 ? 
                  <div className='divThirdText' onClick={()=>hello()}>{boardNumber1[index]*(boardNumber2[index]-1)}</div> :
                  <Link to='/final'onClick={()=>hello()}>{boardNumber1[index]*(boardNumber2[index]-1)}</Link>
                }
              </div>
            </div>
      </div>
      
      </>
    
  )
}

export default Game