import React, { useState } from 'react'
// import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
// import Search from './components/Search'
// eslint-disable-next-line no-unused-vars
import { items, options } from './mock/data'

export default function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  )
}
