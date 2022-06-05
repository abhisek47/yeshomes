import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Booking Agent'
        breadCrumbActive='Transport Bookings'
      />
      <h1>Transport Bookings</h1>
    </div>
  )
}

export default index
