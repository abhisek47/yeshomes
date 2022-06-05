import React from 'react'
import BreadCrumbs from '@components/breadcrumbs'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Input,
  Row,
  Col,
  Button
} from 'reactstrap'
// ** Third Party Components
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'

const AddRoom = () => {
  const roomCategories = [
    { value: 'Standard Room', label: 'Standard Room' },
    { value: 'Delux Room', label: 'Delux Room' }
  ]
  const typeOfBed = [
    { value: '2 Single', label: '2 Single' },
    { value: '1 Double', label: '1 Double' },
    { value: '1 Double & 1 Single', label: '1 Double & 1 Single' },
    { value: '2 Double', label: '2 Double' },
    { value: '2 Double & 1 Single', label: '2 Double & 1 Single' },
    { value: '3 Double', label: '3 Double' }
  ]

  const maxAdultRoom = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
  ]

  const maxChildrenRoom = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
  ]

  return (
    <>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Add Room' />
      <Card>
        <CardBody>
          <div className='mb-2'>
            <h4 className='mb-2 mt-1'>Add New Room</h4>
            <Row>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='basicInput'>
                  Room Name
                </Label>
                <Input
                  type='text'
                  id='basicInput'
                  placeholder='Enter room name'
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Room Category
                </Label>
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={roomCategories[0]}
                  options={roomCategories}
                  isClearable={false}
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  No of Room
                </Label>
                <Input type='number' id='InputHelp' />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='basicInput'>
                  Type of Bed
                </Label>
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={typeOfBed[0]}
                  options={typeOfBed}
                  isClearable={false}
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Max Adult / Room
                </Label>
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={maxAdultRoom[0]}
                  options={maxAdultRoom}
                  isClearable={false}
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Max Children / Room
                </Label>
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={maxChildrenRoom[0]}
                  options={maxChildrenRoom}
                  isClearable={false}
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='basicInput'>
                  Price for 1 Adult
                </Label>
                <Input type='number' id='InputHelp' />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Price for 2 Adult
                </Label>
                <Input type='number' id='InputHelp' />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Price for Extra Adult
                </Label>
                <Input type='number' id='InputHelp' />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Price for 1 Child below 5 years
                </Label>
                <Input type='number' id='InputHelp' />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Price for 1 Child 5 years – 10 years
                </Label>
                <Input type='number' id='InputHelp' />
              </Col>
            </Row>
          </div>
          <div className='d-flex flex-wrap gap-2 mb-1'>
            <Button.Ripple color='danger'>Submit</Button.Ripple>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default AddRoom
