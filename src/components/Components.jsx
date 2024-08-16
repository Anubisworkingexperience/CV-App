import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faScrewdriverWrench, faChevronUp, faChevronDown, faTrashCan, faHashtag, faDownload } from '@fortawesome/free-solid-svg-icons'
import '../styles/misc.css'
import { useState, useRef } from 'react'
import { PersonalInformation} from './PersonalInfo'
import { PreviewComponent, PreviewInfo, ContactInfo } from './Preview'
import { EducationComponent } from './Education'
import { ExperienceComponent } from './Experience'
import { jsPDF } from "jspdf";

export function Input({className, label, onChange, name, value}) {
  return (
    <div className={className}>
      <strong><label key={className} htmlFor={className}>{label}</label></strong>
      <input type="text" id={className} onChange={onChange} name={name} value={value}/>
    </div>
  )
}

export function Logo() {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faScrewdriverWrench}/>
      <div>CV Builder</div>
    </div>
  )
}

export function Form({className, children, title, icon, showFormIcon}) {
  return (
    <>
    <form className={className}>
    <div className="formTitle">
      {icon !== undefined && <FontAwesomeIcon icon={icon}/>}
        <h1>{title}</h1>
      {showFormIcon !== undefined && <FontAwesomeIcon icon={showFormIcon}/>}
    </div>
      {children}
    </form>
    </>
  )
}

export function Button({text, className}) {
  return (
    <>
    <button className={className}>{text}</button>
    </>
  )
}

function ClearButton({onClick}) {
  return (
    <>
    <button className='clearButton' onClick={onClick}>
      <FontAwesomeIcon icon={faTrashCan} className='clearIcon'/>Clear</button>
    </>
  )
}

function ExampleContentButton({onClick}) {
  return (
    <>
    <button className='exampleButton' onClick={onClick}>
    <FontAwesomeIcon icon={faHashtag} className='exampleIcon'/>Example
    </button>
    </>
  )
}

function DownloadPdfButton({pdfRef}) {

  //   const handleDownload = () => {
  //     const previewElement = pdfRef.current;
  //     const doc = new jsPDF('landscape');
  //     doc.html(previewElement, {
  //       callback: function (doc) {
  //         doc.save('cv.pdf');
  //       },
  //       html2canvas: {scale: 0.4}
  //     });
  // }
  const handleDownload = () => {
    const previewElement = pdfRef.current;
    const opt = {
      margin: 0,
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.95 },
      // html2canvas: {height: 2000},
      jsPDF: {format: 'letter', compress: true},
    }
    html2pdf().set(opt).from(previewElement).save();
  }

  return (
    <div>
    <button className='downloadButton' onClick={handleDownload}>
    <FontAwesomeIcon icon={faDownload} className='downloadIcon'/>Download
    </button >
    </div>
  )
}

export function ShowContent({className, contentComponent: ContentComponent, label}) {
  const [show, setShow] = useState(false);

  function handleShowContent() {
    setShow(prevShow => !prevShow);
  }

  return (
    <div className={`${className}-container`}>
      <div className={className} onClick={handleShowContent} >
        <FontAwesomeIcon icon={show ? faChevronDown : faChevronUp} className={`${className}-icon`} />
        <h1>{show ? `Hide ${label}` : `Show ${label}`}</h1>
      </div>
      {show && ContentComponent}
    </div>
  )
}

export function FormInputsContent() {

  const [show, setShow] = useState(true);
  const pdfRef = useRef(null);
  const [separators, setSeparators] = useState({
    hyphen: '-',
    comma: ','
  });
  const [educationCounter, setEducationCounter] = useState(1);

  const [person, setPerson] = useState({
    fullName: 'John Doe',
    jobTitle: 'Mechanical engineer',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus purus, convallis id est vel, vehicula efficitur ligula. Vivamus id ullamcorper felis. Cras lorem elit, commodo et hendrerit ut, tincidunt id augue. Integer placerat magna ac purus suscipit, sed tincidunt diam tempor. Sed finibus dolor id sagittis tincidunt. In at est in magna bibendum imperdiet in non nulla. Nunc maximus metus vel urna aliquet, nec consequat orci commodo. Sed vestibulum ac nisl vel dignissim.',
    email: 'example@gmail.com',
    phone: '+12345678907',
    location: 'New York, USA',
    github: 'github.com',
    linkedIn: 'linkedin.com',
    whatsApp: 'whatsapp.com',
    telegram: 'telegram.org',
    website: 'website.com',
    college: 'Harvard University',
    degree: 'Mechanical engineering',
    startDateCollege: '2015',
    endDateCollege: '2019',
    collegeLocation: 'Massachusetts, USA',
    company: 'Tesla',
    position: 'Mechanical engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget velit faucibus metus scelerisque posuere ac id enim. Proin eu felis convallis eros interdum maximus. Proin ultrices lacinia elit, ac dapibus arcu semper ac. Maecenas tincidunt mauris dolor. Maecenas eu pulvinar metus. Suspendisse potenti. Vivamus commodo leo ac laoreet lobortis. Etiam nec porta odio. Vivamus fermentum mauris urna, et convallis turpis dictum quis.',
    startDateWork: '2019',
    endDateWork: '2024',
    workLocation: 'Texas, USA'
  });

  function resetPreviewContent() {
    setSeparators({
      hyphen: '',
      comma: ''
    })
    setShow(false);
    setPerson({
    fullName: '',
    jobTitle: '',
    summary: '',
    email: '',
    phone: '',
    location: '',
    github: '',
    linkedIn: '',
    whatsApp: '',
    telegram: '',
    website: '',
    college: '',
    degree: '',
    startDateCollege: '',
    endDateCollege: '',
    collegeLocation: '',
    company: '',
    position: '',
    description: '',
    startDateWork: '',
    endDateWork: '',
    workLocation: ''
    })
  }

  function examplePreviewContent() {
    setSeparators({
      hyphen: '-',
      comma: ','
    })
    setShow(true);
    setPerson({
    fullName: 'John Doe',
    jobTitle: 'Mechanical engineer',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus purus, convallis id est vel, vehicula efficitur ligula. Vivamus id ullamcorper felis. Cras lorem elit, commodo et hendrerit ut, tincidunt id augue. Integer placerat magna ac purus suscipit, sed tincidunt diam tempor. Sed finibus dolor id sagittis tincidunt. In at est in magna bibendum imperdiet in non nulla. Nunc maximus metus vel urna aliquet, nec consequat orci commodo. Sed vestibulum ac nisl vel dignissim.',
    email: 'example@gmail.com',
    phone: '+12345678907',
    location: 'New York, USA',
    github: 'github.com',
    linkedIn: 'linkedin.com',
    whatsApp: 'whatsapp.com',
    telegram: 'telegram.org',
    website: 'website.com',
    college: 'Harvard University',
    degree: 'Mechanical engineering',
    startDateCollege: '2015',
    endDateCollege: '2019',
    collegeLocation: 'Massachusetts, USA',
    company: 'Tesla',
    position: 'Mechanical engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget velit faucibus metus scelerisque posuere ac id enim. Proin eu felis convallis eros interdum maximus. Proin ultrices lacinia elit, ac dapibus arcu semper ac. Maecenas tincidunt mauris dolor. Maecenas eu pulvinar metus. Suspendisse potenti. Vivamus commodo leo ac laoreet lobortis. Etiam nec porta odio. Vivamus fermentum mauris urna, et convallis turpis dictum quis.',
    startDateWork: '2019',
    endDateWork: '2024',
    workLocation: 'Texas, USA'
    })
  }

  return (
    <div className='app'>
      <section className="edit-side">
        <div className="action-buttons">
          <ClearButton onClick={resetPreviewContent} />
          <ExampleContentButton onClick={examplePreviewContent}/>
          <DownloadPdfButton pdfRef={pdfRef}/>
        </div>
        <PersonalInformation person={person} setPerson={setPerson} />
        <EducationComponent person={person} setPerson={setPerson} educationCounter={educationCounter}
        setEducationCounter={setEducationCounter}/>
        <ExperienceComponent person={person} setPerson={setPerson}/>
      </section>
      <PreviewComponent person={person} show={show} separators={separators}
      educationCounter={educationCounter} pdfRef={pdfRef}/>
    </div>
  )
}
