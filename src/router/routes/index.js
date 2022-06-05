import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/partner/dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  },
  {
    path: '/partner/dashboard',
    component: lazy(() => import('../../views/partner/dashboard'))
  },
  {
    path: '/partner/properties',
    component: lazy(() => import('../../views/partner/properties'))
  },
  {
    path: '/partner/add-property',
    component: lazy(() => import('../../views/partner/properties/AddProperty'))
  },
  {
    path: '/partner/rooms',
    component: lazy(() => import('../../views/partner/rooms'))
  },
  {
    path: '/partner/add-room',
    component: lazy(() => import('../../views/partner/rooms/AddRoom'))
  },
  {
    path: '/partner/online-booking',
    component: lazy(() => import('../../views/partner/online-booking'))
  },
  {
    path: '/partner/offline-booking',
    component: lazy(() => import('../../views/partner/offline-booking'))
  },
  {
    path: '/partner/transport-booking',
    component: lazy(() => import('../../views/partner/transport-booking'))
  },
  {
    path: '/partner/food-statement',
    component: lazy(() => import('../../views/partner/food-statement'))
  },
  {
    path: '/partner/account-statement',
    component: lazy(() => import('../../views/partner/account-statement'))
  },
  {
    path: '/partner/my-wallet',
    component: lazy(() => import('../../views/partner/my-wallet'))
  },
  {
    path: '/partner/inventory',
    component: lazy(() => import('../../views/partner/inventory'))
  },
  {
    path: '/partner/promotion',
    component: lazy(() => import('../../views/partner/promotion'))
  },
  {
    path: '/partner/share-profile-link',
    component: lazy(() => import('../../views/partner/property-link'))
  },
  // -----------------------------------------------------------------
  // ---------------- Booking Agent ---------------------------------
  // ---------------------------------------------------------------
  {
    path: '/booking-agent/dashboard',
    component: lazy(() => import('../../views/agent/dashboard')),
    layout: 'AgentLayout'
  },
  {
    path: '/booking-agent/room-bookings',
    component: lazy(() => import('../../views/agent/room-bookings')),
    layout: 'AgentLayout'
  },
  {
    path: '/booking-agent/transport-bookings',
    component: lazy(() => import('../../views/agent/transport-bookings')),
    layout: 'AgentLayout'
  },
  {
    path: '/booking-agent/package-bookings',
    component: lazy(() => import('../../views/agent/package-bookings')),
    layout: 'AgentLayout'
  },
  {
    path: '/booking-agent/credit-notes',
    component: lazy(() => import('../../views/agent/credit-notes')),
    layout: 'AgentLayout'
  },
  {
    path: '/booking-agent/my-wallet',
    component: lazy(() => import('../../views/agent/my-wallet')),
    layout: 'AgentLayout'
  },
  {
    path: '/booking-agent/offers-and-coupons',
    component: lazy(() => import('../../views/agent/offers-and-coupons')),
    layout: 'AgentLayout'
  },
  {
    path: '/booking-agent/share-property-link',
    component: lazy(() => import('../../views/agent/property-link')),
    layout: 'AgentLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
