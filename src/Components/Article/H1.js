import React from 'react'

export default function(props) {
  const { children } = props
  return (
    <h1 className='uk-h2'>
      {children}
    </h1>
  )
}

