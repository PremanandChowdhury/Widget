import React from 'react'

const Link = ({ className, href, children }) => {
  const onClickHandler = (e) => {
    // Ctrl click link open to new Window
    if (e.metaKey || e.ctrlKey) {
      return
    }

    e.preventDefault()
    window.history.pushState({}, '', href)

    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <a onClick={onClickHandler} className={className} href={href}>
      {children}
    </a>
  )
}

export default Link
