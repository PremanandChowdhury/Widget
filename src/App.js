import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'
import Translate from './components/Translate'
import { items, options } from './mock/data'
import Route from './components/Route'

export default function App() {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropDown] = useState(true)

  return (
    <div style={{ margin: '0 10px' }}>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <button onClick={() => setShowDropDown(!showDropdown)}>
          Toggle ShowDropdown
        </button>
        {showDropdown ? (
          <Dropdown
            label='Select the color'
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
}
