import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Booking Agent'
        breadCrumbActive='Room Bookings'
      />
      <h1>Room Bookings</h1>
    </div>
  )
}

export default index
