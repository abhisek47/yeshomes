import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Partner'
        breadCrumbActive='Share Property Link'
      />
      <h3>Share Property Link</h3>
    </div>
  )
}

export default index
