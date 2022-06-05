import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='My Wallet' />
      <h3>My Wallet</h3>
    </div>
  )
}

export default index
