import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { ChaletsPage } from '../pages/ChaletsPage'

export const Routes = () => {
  return (
    
    <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/chalets" element={<ChaletsPage />} />
          
    </Routes>
  )
}


