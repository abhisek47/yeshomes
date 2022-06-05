import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Booking Agent'
        breadCrumbActive='Package Booking'
      />
      <h1>Package Booking</h1>
    </div>
  )
}

export default index
