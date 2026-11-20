import React, { useState } from 'react'
import LanguageContex from './LanguageContex'
import Greating from './Greating'
const App = () => {
  const [language,setLanguage] = useState('English')
  const toggleLanguage = ()=>{
    setLanguage((prev)=>(prev==='English'? 'Spanish':'English'))
  }
  return (
    <LanguageContex.Provider value={{language,setLanguage}}>
      <Greating/>
      <div>
         <button onClick={toggleLanguage}>{language==='English'?'Switch to Spanish':'Switch to ENglish'}</button>
      
      </div>
      
    </LanguageContex.Provider>
  )
}

export default App
