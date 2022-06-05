import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Booking Agent'
        breadCrumbActive='Offers and Coupons'
      />
      <h1>Offers and Coupons</h1>
    </div>
  )
}

export default index
