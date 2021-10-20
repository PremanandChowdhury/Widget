import React from 'react'
// import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
// import Search from './components/Search'
// eslint-disable-next-line no-unused-vars
import { items, options } from './mock/data'

export default function App() {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  )
}
