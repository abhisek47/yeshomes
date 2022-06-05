import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs
        breadCrumbParent='Booking Agent'
        breadCrumbActive='Share Property Link'
      />
      <h1>Share Property Link</h1>
    </div>
  )
}

export default index
