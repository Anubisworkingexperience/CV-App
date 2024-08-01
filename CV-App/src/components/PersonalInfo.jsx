import { Input } from "./Misc"
import '../styles/info.css'

export function Info() {
  return (
    <form className="info">
      <h1>Personal information</h1>
      <Input className='fullName' label='Full name'/>
      <Input className='email' label='Email'/>
      <Input className='phone' label='Phone number'/>
      <Input className='location' label='Location'/>
    </form>
  )
}