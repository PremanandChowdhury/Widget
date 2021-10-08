import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onHandleClick = (index) => {
    return <h1>{setActiveIndex(index + 1)}</h1>
  }

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className='title active' onClick={() => onHandleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return (
    <div className='ui styled accordion'>
      {renderedItems}
      {activeIndex}
    </div>
  )
}

export default Accordion
