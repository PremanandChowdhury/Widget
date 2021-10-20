import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('Programming')
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  const handleChange = (e) => {
    return setTerm(e.target.value)
  }

  // useEffect(() => {
  //   /**
  //    * Using Asynchronous Code in UseEffect with async and await
  //    * This is recommended by the React Developers
  //    * Way 1: With Function Expression
  //    */
  //   const search = async () => {
  //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term,
  //       },
  //     })
  //     setResults(data.query.search)
  //   }

  //   /**
  //    * Way 2: With IFFE
  //    */
  //    (async () => await axios.get(URL))()

  //   /**
  //    * Way 3: With promises
  //    */
  //    axios
  //     .get(URL)
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.log(err))

  //   const timeoutId = setTimeout(() => {
  //     if (term) search()
  //     }, 500)
  //   }, [term])

  /**
   * Use UseEffect to throttle the API Requests
   */
  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term,
  //       },
  //     })
  //     setResults(data.query.search)
  //   }

  //   if (term && !results.length) {
  //     search()
  //   } else {
  //     const timerId = setTimeout(() => {
  //       if (term) search()
  //     }, 1000)
  //     return () => {
  //       console.log(timerId)
  //       clearTimeout(timerId)
  //     }
  //   }
  // }, [term, results.length])

  /**
   * Optimizing the double API request to one by passing only one value to the dependency array
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      })
      setResults(data.query.search)
    }
    search()
  }, [debouncedTerm])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'>
            Go to page
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          {/* Rendering a string to HTML using dangerouslySetInnerHTML in react */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

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
      <div className='ui celled list'>{renderedResults}</div>
    </>
  )
}

export default Search
