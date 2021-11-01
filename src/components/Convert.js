import React, { useState, useEffect } from 'react'
import axios from 'axios'
const KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_KEY

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('')

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: KEY,
          },
        }
      )
      setTranslated(data.data.translations[0].translatedText)
    }
    translateText()
  }, [language, text, translated])

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  )
}

export default Convert
