import React from 'react'
import { useContext } from 'react'
import languageContex from './LanguageContex'

const Greating = () => {
    const {language} = useContext(languageContex)
    const message = language === 'Spanish'? 'Hola' :'Hello'
   
  return (
    <div>
       <h2>{message}</h2>
    </div>
  )
}

export default Greating
