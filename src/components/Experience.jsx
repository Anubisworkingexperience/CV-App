import { Input, Form, Button, ShowContent } from "./Components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export function ExperienceInformation({person, setPerson}) {

  function handleInputChange(e) {
    const {name, value} = e.target;
    setPerson({
      ...person,
      [name]: value
    });
  }

  return (
    <>
      <Form className='experience' title='Experience' icon={faBriefcase}>
        <Input className='company' label='Company name' name='company' onChange={handleInputChange}/>
        <Input className='position' label='Position' name='position' onChange={handleInputChange}/>
        <div className="work-description">
        <strong><label key='work-description' htmlFor='work-desc'>Description</label></strong>
        <textarea id="work-desc" name="description" rows={5} cols={40} onChange={handleInputChange}></textarea>
      </div>
        <div className="date">
          <Input className='startDate' label='Start date' name='startDateWork' onChange={handleInputChange}/>
          <Input className='endDate' label='End date' name='endDateWork' onChange={handleInputChange}/>
        </div>
        <Input className='workLocation' label='Location' name='workLocation' onChange={handleInputChange}/>
        <Button text='+ Experience' className='add-experience'/>
      </Form>
    </>
  )
}

export function ExperienceComponent({person, setPerson}) {
  return (
    <>
      <ShowContent className='show-experience' contentComponent={<ExperienceInformation 
      person={person} setPerson={setPerson}/>} 
      label='Experience'/>
    </>
  )
}