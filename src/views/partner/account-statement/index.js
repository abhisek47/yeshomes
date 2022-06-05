import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Account Statement' />
      <h3>Account Statement</h3>
    </div>
  )
}

export default index
