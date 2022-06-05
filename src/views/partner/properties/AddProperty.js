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
import CancelationPolicy from './CancelationPolicy'

const AddProperty = () => {
  return (
    <>
      <BreadCrumbs breadCrumbParent='Partner' breadCrumbActive='Add Property' />
      <Card>
        <CardBody>
          <div className='mb-3'>
            <h4 className='mb-2 mt-1'>Property Details</h4>
            <Row>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='basicInput'>
                  Property Name
                </Label>
                <Input
                  type='email'
                  id='basicInput'
                  placeholder='Enter property name'
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Property Address
                </Label>
                <Input
                  type='email'
                  id='InputHelp'
                  placeholder='Enter property address'
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Map
                </Label>
                <Input
                  type='email'
                  id='InputHelp'
                  placeholder='Enter property map link'
                />
              </Col>
              <Col>
                <Label className='form-label' for='helperText'>
                  Property Description
                </Label>
                <Input
                  type='textarea'
                  name='text'
                  id='exampleText'
                  rows='3'
                  placeholder='Add some description'
                />
              </Col>
            </Row>
          </div>
          <div className='mb-3'>
            <h4>Property Facilities</h4>
            <div className='demo-inline-spacing'>
              <div className='form-check form-check-inline'>
                <Input type='checkbox' defaultChecked id='basic-cb-checked' />
                <Label for='basic-cb-checked' className='form-check-label'>
                  Geyser in Bathrooms
                </Label>
              </div>
              <div className='form-check form-check-inline'>
                <Input type='checkbox' id='basic-cb-unchecked' />
                <Label for='basic-cb-unchecked' className='form-check-label'>
                  Parking Facility
                </Label>
              </div>
              <div className='form-check form-check-inline'>
                <Input type='checkbox' defaultChecked />
                <Label className='form-check-label'>Bonfire Facility</Label>
              </div>
              <div className='form-check form-check-inline'>
                <Input type='checkbox' />
                <Label className='form-check-label'>TV in Rooms</Label>
              </div>
              <div className='form-check form-check-inline'>
                <Input type='checkbox' />
                <Label className='form-check-label'>Paid Pick / Drop</Label>
              </div>
              <div className='form-check form-check-inline'>
                <Input type='checkbox' />
                <Label className='form-check-label'>Barbeque Facility</Label>
              </div>
            </div>
          </div>
          <div className='mb-2'>
            <h4 className='mb-1'>Property Restriction</h4>
            <Row>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='basicInput'>
                  No Music After
                </Label>
                <Input type='email' id='basicInput' />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Last time for Dinner
                </Label>
                <Input type='email' id='InputHelp' />
              </Col>
            </Row>
          </div>
          <div className='mb-2'>
            <h4 className='mb-1'>Host Details</h4>
            <Row>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='basicInput'>
                  Host Name
                </Label>
                <Input
                  type='email'
                  id='basicInput'
                  placeholder='Enter host name'
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='InputHelp'>
                  Host Mobile Number
                </Label>
                <Input
                  type='number'
                  id='InputHelp'
                  placeholder='Enter host mobile number'
                />
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <Label className='form-label' for='inputFile'>
                  Host Photo
                </Label>
                <Input type='file' id='inputFile' name='fileInput' />
              </Col>
            </Row>
          </div>
          <div>
            <CancelationPolicy />
          </div>
          <div className='d-flex flex-wrap gap-2 mb-1'>
            <Button.Ripple color='danger'>Submit</Button.Ripple>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default AddProperty
