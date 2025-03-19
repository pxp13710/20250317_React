import React, { useCallback, useState } from 'react'
// npm i reactstrap
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Alert } from 'reactstrap'

function A05ReactStrip() {
  const [open, setOpen] = useState('1');
  const toggle = useCallback((id) => {
    if (open === id) setOpen();
    else setOpen(id);
  }, [open]);

  return (
    <div>
      <h3>A05ReactStrip</h3>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Alert color="danger">
        Good Morning
      </Alert>
    </div>
  )
}

export default A05ReactStrip
