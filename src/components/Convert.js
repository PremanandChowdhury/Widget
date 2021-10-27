import React, { useEffect, useState } from 'react'
import axios from 'axios'
const KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_KEY

const Convert = ({ language, text }) => {
  console.log('the key is : ', KEY)
  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {
      params: {
        q: text,
        target: language.value,
        key: KEY,
      },
    })
  }, [language, text])
  return <div />
}

export default Convert
