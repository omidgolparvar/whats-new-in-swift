import React from 'react'
import { Consumer } from '../Context/Context'

import AllVersions from '../Data/AllVersions'

function MainContent() {
  return (
    <Consumer>
      { (context) => {
        let from = context.versions.from
        let to = context.versions.to
        let contents = AllVersions.filter((item) => (item.version >= from) && (item.version <= to))
        return (
          <>
          <div className='uk-container'>
            {
              contents.length > 0 && contents
                .map((item) => <item.content key={item.version} /> )
                .reduce((prev, curr) => [prev, <hr key={'hr-' + prev.key + '-' + curr.key} />, curr])
            }
          </div>
          </>
        )
      }}
    </Consumer>
  )
}

export default MainContent