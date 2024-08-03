import { Input, Form, Button, ShowContent } from "./Components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export function EducationInformation() {
  return (
    <>
      <Form className='education' title='Education' icon={faGraduationCap}>
        <Input className='college' label='College'/>
        <Input className='degree' label='Degree' />
        <div className="date">
          <Input className='startDate' label='Start date' />
          <Input className='endDate' label='End date' />
        </div>
        <Input className='educationLocation' label='Location' />
        <Button text='+ Education' className='add-education'/>
      </Form>
    </>
  )
}

export function EducationComponent() {
  return (
    <>
      <ShowContent className='show-education' contentComponent={EducationInformation} 
      label='Education'/>
    </>
  )
}
