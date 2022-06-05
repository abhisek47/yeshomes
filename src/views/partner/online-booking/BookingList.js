import React from 'react'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Link } from 'react-router-dom'
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

const bookingList = [
  {
    id: '001',
    services: 'Bidyang',
    booking: '14/04/2022 09:00 AM',
    total: '1300',
    status: 'Incomplete',
    color: 'light-primary',
    date: '14/04/2022 09:00 AM'
  },
  {
    id: '002',
    services: 'Chibbo',
    booking: '14/04/2022 09:00 AM',
    total: '2300',
    status: 'Complete',
    color: 'light-success',
    date: '14/04/2022 08:53 PM'
  },
  {
    id: '003',
    services: 'Murti',
    booking: '19/04/2022 09:00 AM',
    total: '2100',
    status: 'Pending',
    color: 'light-secondary',
    date: '19/03/2022 05:14 AM'
  },
  {
    id: '004',
    services: 'Lava',
    booking: '21/03/2022 to 26/03/2022',
    total: '2100',
    status: 'Complete',
    color: 'light-success',
    date: '05/03/2022 09:14 AM'
  },
  {
    id: '005',
    services: 'Kaffergaon',
    booking: '24/04/2022 12:00 PM',
    total: '2100',
    status: 'Incomplete',
    color: 'light-primary',
    date: '25/03/2022 10:14 AM'
  },
  {
    id: '006',
    services: 'Kolakham',
    booking: '02/04/2022 11:00 AM',
    total: '2100',
    status: 'Pending',
    color: 'light-secondary',
    date: '19/03/2022 05:14 AM'
  },
  {
    id: '007',
    services: 'Kalimpong',
    booking: '20/02/2022',
    total: '2900',
    status: 'Complete',
    color: 'light-success',
    date: '19/02/2022 01:00 PM'
  }
]

const BookingList = () => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Booking</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.services}</td>
              <td>{item.booking}</td>
              <td>Rs. {item.total}</td>
              <td>
                <Badge pill color={`${item.color}`} className='me-1'>
                  {item.status}
                </Badge>
              </td>
              <td>{item.date}</td>
              <td>
                <div className='d-flex gap-1'>
                  <Link to={'/'}>
                    <Edit size={15} />
                  </Link>
                  <Link to={'/'}>
                    <Trash size={15} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default BookingList
