import React from 'react'

export default function(props) {
  const { children } = props
  return (
    <article className="uk-article">
      {children}
    </article>
  )
}