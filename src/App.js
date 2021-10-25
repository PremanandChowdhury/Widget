import React, { useState } from 'react'
// import Accordion from './components/Accordion'
// import Dropdown from './components/Dropdown'
// import Search from './components/Search'
import Translate from './components/Translate'
// eslint-disable-next-line no-unused-vars
import { items, options } from './mock/data'

export default function App() {
  // const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropDown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropDown(!showDropdown)}>
        Toggle ShowDropdown
      </button>

      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
    </div>
  )
}
