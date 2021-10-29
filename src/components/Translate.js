import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { dropDownOptions } from '../mock/data'
import Convert from './Convert'

const Translate = () => {
  const [language, setLanguage] = useState(dropDownOptions[0])
  const [text, setText] = useState('')

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Word to translate </label>
          <input
            type='text'
            value={text}
            placeholder='Enter Something'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={dropDownOptions}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text} />
    </div>
  )
}

export default Translate
