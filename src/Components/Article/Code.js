import React from 'react'
import Highlight from 'react-highlight.js'

export default function(props) {
  const {
    code,
    language = 'swift'
  } = props
  return (
    <Highlight language={language}>
      {code.trim()}
    </Highlight>
  )
}

