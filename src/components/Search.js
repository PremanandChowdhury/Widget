import React, { useState, useEffect } from 'react'

const Search = () => {
  const [term, setTerm] = useState('')

  const handleChange = (e) => {
    return setTerm(e.target.value)
  }

  useEffect(() => {
    console.log('USE-EFFECT CALLED!')
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
