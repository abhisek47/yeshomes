import {  Home, CloudLightning, Compass, Coffee, User, CreditCard, Package, Share2, Zap, Map, PlusSquare, Layers } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'DASHBOARD',
    icon: <Home size={20} />,
    navLink: '/partner/dashboard'
  },
  {
    id: 'properties',
    title: 'PROPERTIES',
    icon: <PlusSquare size={20} />,
    navLink: '/partner/properties'
  },
  {
    id: 'rooms',
    title: 'ROOMS',
    icon: <Layers size={20} />,
    navLink: '/partner/rooms'
  },
  {
    id: 'onlineBooking',
    title: 'ONLINE BOOKINGS',
    icon: <CloudLightning size={20} />,
    navLink: '/partner/online-booking'
  },
  {
    id: 'offlineBooking',
    title: 'OFFLINE BOOKINGS',
    icon: <Map size={20} />,
    navLink: '/partner/offline-booking'
  },
  {
    id: 'transportBooking',
    title: 'TRANSPORT BOOKINGS',
    icon: <Compass size={20} />,
    navLink: '/partner/transport-booking'
  },
  {
    id: 'foodStatement',
    title: 'FOOD STATEMENT',
    icon: <Coffee size={20} />,
    navLink: '/partner/food-statement'
  },
  {
    id: 'accountStatement',
    title: 'ACCOUNT STATEMENT',
    icon: <User size={20} />,
    navLink: '/partner/account-statement'
  },
  {
    id: 'myWallet',
    title: 'MY WALLET ',
    icon: <CreditCard size={20} />,
    navLink: '/partner/my-wallet'
  },
  {
    id: 'inventory',
    title: 'INVENTORY',
    icon: <Package size={20} />,
    navLink: '/partner/inventory'
  },
  {
    id: 'promotion',
    title: 'PROMOTION',
    icon: <Zap size={20} />,
    navLink: '/partner/promotion'
  },
  {
    id: 'shareProfileLink',
    title: 'SHARE PROPERTY LINK',
    icon: <Share2 size={20} />,
    navLink: '/partner/share-profile-link'
  }
]
