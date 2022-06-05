import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import {  Edit, Trash } from 'react-feather'
import { Link } from 'react-router-dom'
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  CardBody,
  Button
} from 'reactstrap'

const bookingList = [
  {
    id: '001',
    hotelName: 'Bidyang',
    hostName: 'Kunal Sharma',
    date: '14/04/2022 09:00 AM'
  },
  {
    id: '002',
    hotelName: 'Chibbo',
    hostName: 'Rakesh Roy',
    date: '14/04/2022 08:53 PM'
  },
  {
    id: '003',
    hotelName: 'Murti',
    hostName: 'Abhijit Bose',
    date: '19/03/2022 05:14 AM'
  },
  {
    id: '004',
    hotelName: 'Lava',
    hostName: 'Dilip Kumar',
    date: '05/03/2022 09:14 AM'
  },
  {
    id: '005',
    hotelName: 'Kaffergaon',
    hostName: 'Kevin Decuza',
    date: '25/03/2022 10:14 AM'
  },
  {
    id: '006',
    hotelName: 'Kolakham',
    hostName: 'Avay Paul',
    date: '19/03/2022 05:14 AM'
  },
  {
    id: '007',
    hotelName: 'Kalimpong',
    hostName: 'Paulzor Bahadur',
    date: '19/02/2022 01:00 PM'
  }
]

const index = () => {
  return (
    <>
      <BreadCrumbs
        breadCrumbParent='Partner'
        breadCrumbActive='Properties'
      />
      <Card className='m-0 shadow-none rounded-0'>
        <CardBody>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>Property List</h3>
            <Link to='/partner/add-property'>
              <Button.Ripple color='danger'>Add Property</Button.Ripple>
            </Link>
          </div>
        </CardBody>
      </Card>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hotel Name</th>
            <th>Host Name</th>
            <th>Added</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.hotelName}</td>
              <td>{item.hostName}</td>
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
    </>
  )
}

export default index
