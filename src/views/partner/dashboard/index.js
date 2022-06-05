import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Dashboard' />
      <h1>Welcome to Yes Homes</h1>
    </div>
  )
}

export default index
