import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { dropDownOptions } from '../mock/data'

const Translate = () => {
  const [language, setLanguage] = useState(dropDownOptions[0])
  return (
    <div>
      <Dropdown
        label='Select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={dropDownOptions}
      />
    </div>
  )
}

export default Translate
