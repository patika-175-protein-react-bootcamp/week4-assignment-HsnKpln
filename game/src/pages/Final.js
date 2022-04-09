import React from 'react'
import { Link } from 'react-router-dom'
import Start from '../constants/img/Start'

function Final() {
  return (
    <div className='finalBody'>
      <div className='finalContainer'>
        <div className='final'>
          <div className='finalTitle'>Final</div>
          <div className='finalSubline'></div>
          <div className='finalPoint'>Point: 129</div>
          <div className='finalQuestion'>Question: 10</div>
          <div className='correctAnswer'>Correct Answer: 8</div>
          <div className='restartContainer'>
            <Start width={300} height={139} />
            <Link to='/' className='restart'>Restart</Link>
          </div>
        </div>
        <div className='allQuestion'>
          <div className='questionTitle'>All Question</div>
          <div className='questionSubline'></div>
          <div className='questions'>7x6 =42 +</div>
          <div className='questions'>7x6 =42 +</div>
          <div className='questions'>7x6 =42 +</div>
          <div className='questions'>7x6 =44 x</div>
          <div className='questions'>7x6 =42 +</div>
          <div className='questions'>7x6 =42 +</div>
          <div className='questions'>7x6 =42 +</div>
          <div className='questions'>7x6 =48 x</div>
          <div className='questions'>7x6 =42 +</div>
          <div className='questions'>7x6 =42 +</div>
        </div>
      </div>
    </div>
  )
}

export default Final