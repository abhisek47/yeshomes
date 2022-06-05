import {  Home, CloudLightning, Compass,  CreditCard, Package, Share2, Percent, Pocket } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'DASHBOARD',
    icon: <Home size={20} />,
    navLink: '/booking-agent/dashboard'
  },
  {
    id: 'roomBookings',
    title: 'ROOM BOOKINGS',
    icon: <CloudLightning size={20} />,
    navLink: '/booking-agent/room-bookings'
  },
  {
    id: 'transportBookings',
    title: 'TRANSPORT BOOKINGS',
    icon: <Compass size={20} />,
    navLink: '/booking-agent/transport-bookings'
  },
  {
    id: 'packageBookings',
    title: 'PACKAGE BOOKINGS',
    icon: <Package size={20} />,
    navLink: '/booking-agent/package-bookings'
  },
  {
    id: 'crditNotes',
    title: 'CRDIT NOTES',
    icon: <CreditCard size={20} />,
    navLink: '/booking-agent/credit-notes'
  },
  {
    id: 'myWallet',
    title: 'MY WALLET ',
    icon: <Pocket size={20} />,
    navLink: '/booking-agent/my-wallet'
  },
  {
    id: 'offersAndCoupons',
    title: 'OFFERS & COUPONS',
    icon: <Percent size={20} />,
    navLink: '/booking-agent/offers-and-coupons'
  },
  {
    id: 'shareProfileLink',
    title: 'SHARE PROPERTY LINK',
    icon: <Share2 size={20} />,
    navLink: '/booking-agent/share-property-link'
  }
]
