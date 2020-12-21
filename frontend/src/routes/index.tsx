import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function routes(){
  return(
    <>
    <BrowserRouter>
    <Route path="/" component={Home} />
    </BrowserRouter>
    </>
  )
}