import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Booking Agent'
        breadCrumbActive='My Wallet'
      />
      <h1>My Wallet</h1>
    </div>
  )
}

export default index
