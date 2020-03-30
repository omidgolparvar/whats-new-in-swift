import React, { useContext } from 'react';
import AllVersions from '../Data/AllVersions.js'
import VersionsContext from '../Context/Context'

let allVersionsWithPersianTitle = AllVersions.map(item => {
  return {...item, persianTitle: `نسخه ${item.version.toLocaleString('fa')}`}
})

function VersionSelector(props) {
  const { version, versions, handler } = props

  const title = version === 0
    ? 'انتخاب' 
    : `نسخه ${version.toLocaleString('fa')}`
  
  const versionsItems = versions.map(item => 
    <li key={item.version}>
      <a href='#' onClick={() => handler(item.version)}>{item.persianTitle}</a>
    </li>
  )
  return (
    <>
    <button className={`uk-button ${props.classNames}`} type="button">{title}</button>
    <div uk-dropdown="mode: click">
      <ul className="uk-nav uk-dropdown-nav">
        {versionsItems}
      </ul>
    </div>
    </>
  )
}

function VersionChanger() {
  const context = useContext(VersionsContext)
  const { versions, methods } = context
  return (
    <>
    <div className="uk-container">
      <div className="uk-button-group uk-width-1-1 uk-child-width-1-2">
        <div className="uk-text-center">نسخه مبدا</div>
        <div className="uk-text-center">نسخه مقصد</div>
      </div>
      <div className="uk-button-group uk-width-1-1 uk-child-width-1-2">
        <VersionSelector 
          classNames = 'uk-button-primary'
          version = { versions.from}
          versions = { allVersionsWithPersianTitle } 
          handler = { (item) => methods.setSourceVersion(item) }
        />
        <VersionSelector 
          classNames = 'uk-button-secondary'
          version = { versions.to }
          versions = { allVersionsWithPersianTitle } 
          handler = { (item) => methods.setDestinationVersion(item) }
        />
      </div>
    </div>
    </>
  )
}

export default VersionChanger