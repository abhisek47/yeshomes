import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Booking Agent'
        breadCrumbActive='Credit Notes'
      />
      <h1>Credit Notes</h1>
    </div>
  )
}

export default index
