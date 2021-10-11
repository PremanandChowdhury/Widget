import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')

  const URL =
    'en.wikipedia.org/w/api.php?cation=query&list=search&format=json&srsearch=SEARCHTERM'

  const handleChange = (e) => {
    return setTerm(e.target.value)
  }

  useEffect(() => {
    /**
     * Using Asynchronous Code in UseEffect with async and await
     * This is recommended by the React Developers
     * Way 1: With Function Expression
     */
    const search = async () => {
      await axios.get(URL)
    }

    /**
     * Way 2: With IFFE
     */
    ;(async () => await axios.get(URL))()

    /**
     * Way 3: With promises
     */
    axios
      .get(URL)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
  }, [term])

  return (
    <>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            className='input'
            type='text'
            value={term}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default Search
