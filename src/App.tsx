import React from 'react'

import Header from './components/Header'
import Translator from './components/Translator'

function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Header/>
        <Translator/>
      </div>
    </>
  )
}

export default App
