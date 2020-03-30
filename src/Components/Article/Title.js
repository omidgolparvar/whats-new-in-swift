import React from 'react'

export default function(props) {
  const { version } = props
  const text = `تغییرات سوییفت نسخه ${version.toLocaleString('fa')}`
  return (
    <div className="swift-version-title uk-text-lead uk-margin-medium-bottom  uk-margin-medium-top">
      {text}
    </div>
  )
}