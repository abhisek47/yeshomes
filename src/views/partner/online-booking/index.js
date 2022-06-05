import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import BookingList from './BookingList'

const index = () => {
  return (
    <>
      <BreadCrumbs
        breadCrumbParent='Partner'
        breadCrumbActive='Online Booking'
      />
      <BookingList />
    </>
  )
}

export default index
