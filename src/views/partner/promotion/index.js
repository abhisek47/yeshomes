import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'

const index = () => {
  return (
    <div>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Promotion' />
      <h3>Promotion</h3>
    </div>
  )
}

export default index
