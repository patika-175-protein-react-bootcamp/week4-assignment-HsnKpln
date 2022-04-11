import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Final from '../pages/Final'
import Game from '../pages/Game'
import Home from '../pages/Home'

function Router() {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='/final' element={<Final/>}/>
      </Routes>
  )
}

export default Router