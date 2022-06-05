import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import { Edit, Trash } from 'react-feather'
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
    roomName: 'Double Bed',
    roomCategory: 'Standard Room',
    roomPrice: '1500'
  },
  {
    id: '002',
    roomName: 'Single Bed',
    roomCategory: 'Delux Room',
    roomPrice: '1899'
  },
  {
    id: '003',
    roomName: 'Big Room',
    roomCategory: 'Apartment',
    roomPrice: '1399'
  }
]

const index = () => {
  return (
    <>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Rooms' />
      <Card className='m-0 shadow-none rounded-0'>
        <CardBody>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>Room List</h3>
            <Link to='/partner/add-room'>
              <Button.Ripple color='danger'>Add Room</Button.Ripple>
            </Link>
          </div>
        </CardBody>
      </Card>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Room Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.roomName}</td>
              <td>{item.roomCategory}</td>
              <td>{item.roomPrice}</td>
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
