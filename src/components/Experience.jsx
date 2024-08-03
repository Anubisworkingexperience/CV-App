import { Input, Form, Button, ShowContent } from "./Components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export function ExperienceInformation() {
  return (
    <>
      <Form className='experience' title='Experience' icon={faBriefcase}>
        <Input className='company' label='Company name'/>
        <Input className='position' label='Position' />
        <div className="work-description">
        <strong><label key='work-description' htmlFor='work-desc'>Description</label></strong>
        <textarea id="work-desc" name="work-desc" rows={5} cols={40}></textarea>
      </div>
        <div className="date">
          <Input className='startDate' label='Start date' />
          <Input className='endDate' label='End date' />
        </div>
        <Input className='workLocation' label='Location' />
        <Button text='+ Experience' className='add-experience'/>
      </Form>
    </>
  )
}

export function ExperienceComponent() {
  return (
    <>
      <ShowContent className='show-experience' contentComponent={ExperienceInformation} 
      label='Experience'/>
    </>
  )
}