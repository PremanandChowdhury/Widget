import React from 'react'
// import Accordion from './components/Accordion'
import Search from './components/Search'

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a Javascript Library.',
//   },
//   {
//     title: 'What is the Advantage of React?',
//     content: 'Easy to use. React can be used with other Frameworks.',
//   },
//   {
//     title: 'What are React Hooks?',
//     content:
//       "Hooks introduced to help React's functional component to use States.",
//   },
// ]

export default function App() {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  )
}
