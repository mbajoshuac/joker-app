import { useState } from 'react'
import Navbar from './component/layout/Navbar'
import Joke from './component/Joke'

function App() {

 

  return (
    <div className="App">
      <Navbar />
        <Joke />     
    </div>
  )
}

export default App
