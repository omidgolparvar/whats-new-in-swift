import React from 'react';
import AllVersions from '../Data/AllVersions.js'
import { Consumer } from '../Context'

let allVersionsWithPersianTitle = AllVersions.map(item => {
  return {...item, persianTitle: `سوییفت نسخه ${item.version.toLocaleString('fa')}`}
})

function VersionSelector(props) {
  let version = props.version
  let title = (version === 0) ? 'انتخاب' : `سوییفت نسخه ${version.toLocaleString('fa')}`
  return (
    <>
    <button className={"uk-button " + props.classNames} type="button">{title}</button>
    <div uk-dropdown="mode: click">
      <ul className="uk-nav uk-dropdown-nav">
        {
          props.versions.map(item => 
            <li key={item.version}>
              <a href='#' onClick={ (e) => props.handler(item.version) }>{item.persianTitle}</a>
            </li>
          )
        }
      </ul>
    </div>
    </>
  )
}

function VersionChanger(props) {
  return (
    <Consumer>
      { (context) => 
        <div className="uk-container">
          <div className="uk-button-group uk-width-1-1 uk-child-width-1-2">
            <div className="uk-text-center">نسخه مبدا</div>
            <div className="uk-text-center">نسخه مقصد</div>
          </div>
          <div className="uk-button-group uk-width-1-1 uk-child-width-1-2">
            <VersionSelector 
              classNames = 'uk-button-primary'
              version = { context.usingSwiftVersions.from}
              versions = { allVersionsWithPersianTitle} 
              handler = {(item) => context.methods.setSourceVersion(item) }
            />
            <VersionSelector 
              classNames = 'uk-button-secondary'
              version = { context.usingSwiftVersions.to }
              versions = { allVersionsWithPersianTitle } 
              handler = { (item) => context.methods.setDestinationVersion(item) }
            />
          </div>
        </div>
      }
    </Consumer>
  )
}

export default VersionChanger