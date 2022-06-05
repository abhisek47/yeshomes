import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import BookingList from './BookingList'

const index = () => {
  return (
    <div>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Transport Booking' />
      <BookingList />
    </div>
  )
}

export default index
