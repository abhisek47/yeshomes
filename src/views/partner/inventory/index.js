import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Inventory' />
      <h3>Inventory</h3>
    </div>
  )
}

export default index
