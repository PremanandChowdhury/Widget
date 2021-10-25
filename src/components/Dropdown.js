import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null

    return (
      <div
        className='item'
        key={option.label}
        onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    )
  })

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return
      setOpen(false)
    }

    /**
     * Close dropdown when !options are clicked
     */
    document.body.addEventListener('click', onBodyClick, {
      capture: true,
    })

    /**
     * Cleanup: Does not add the listener when there is no Dropdown Component
     */
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      })
    }
  }, [])

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label ? label : 'Select option'}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''} `}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''} `}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
