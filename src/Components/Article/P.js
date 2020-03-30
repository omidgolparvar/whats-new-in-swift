import React from 'react'

export default function(props) {
  const { 
    className = '',
    children 
  } = props
  return (
    <p className={className}>
      {children}
    </p>
  )
}

