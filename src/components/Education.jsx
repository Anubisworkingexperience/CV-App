import { Input, Form, Button, ShowContent } from "./Components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { ContactInfo, PreviewComponent } from "./Preview"

export function EducationInformation({person, setPerson}) {

  function handleInputChange(e) {
    const {name, value} = e.target;
    setPerson({
      ...person,
      [name]: value
    });
  }

  return (
    <>
      <Form className='education' title='Education' icon={faGraduationCap}>
        <Input className='college' label='College' name='college' onChange={handleInputChange}/>
        <Input className='degree' label='Degree' name='degree' onChange={handleInputChange}/>
        <div className="date">
          <Input className='startDate' label='Start date' name='startDateCollege' onChange={handleInputChange} />
          <Input className='endDate' label='End date' name='endDateCollege' onChange={handleInputChange} />
        </div>
        <Input className='educationLocation' label='Location' name='collegeLocation' onChange={handleInputChange}/>
      </Form>
    </>
  )
}

export function EducationComponent({person, setPerson, educationCounter, setEducationCounter}) {

  const [educationStates, setEducationStates] = useState(Array(educationCounter).fill({}));

  function handleAddButtonClick() {
    setEducationCounter(educationCounter + 1);
    // setEducationStates([...educationStates, {}]);
  }

  return (
    <>
      <ShowContent className='show-education' contentComponent={
      <>
      {Array.from({length: educationCounter}).map( (_, index) => (
       <EducationInformation key={index} person={educationStates[index]}
        setPerson={setEducationStates}/>))}
      <div className="add-container"
       onClick={handleAddButtonClick}> 
        <Button text='+ Education' className='add-education'/></div></>}
      label='Education'/>
    </>
  );
}
