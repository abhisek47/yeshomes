import React, { useState } from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from 'reactstrap'

const CancelationPolicy = () => {
  const [open, setOpen] = useState('')

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <>
      <div className='mb-3'>
        <h4 className='mb-2'>Cancelation Policies</h4>
        <Accordion className='accordion-border' open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId='1'>Last 30 days</AccordionHeader>
            <AccordionBody accordionId='1'>
              <p>1. Zero Cancellation Fee</p>
              <p>2. 50% of Full Booking Value</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId='2'>
              45 Days – 30 Days before arrival
            </AccordionHeader>
            <AccordionBody accordionId='2'>
              <p>1. Zero Cancellation Fee</p>
              <p>2. 25% of Full Booking Value</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId='3'>
              Above 45 Days before arrival
            </AccordionHeader>
            <AccordionBody accordionId='3'>
              <p>1. Zero Cancellation Fee</p>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default CancelationPolicy
