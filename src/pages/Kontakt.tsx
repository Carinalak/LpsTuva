import { ChangeEvent, useState } from "react"
import { Person } from "../models/Person"

export const Kontakt = () => {

const [person, setPerson] = useState<Person>({
  name: "",
  email: "",
  message: "",
})

const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
  setPerson({...person, name: e.target.value})
}
const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
  setPerson({...person, email: e.target.value})
}
const handleMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
  setPerson({...person, message: e.target.value})
}


  return ( <>
  <h1>Skriv ett meddelande till mig!</h1>

  <form>
    <input type="text" name="name" value={person.name} onChange={handleNameChange} required />
    <input type="email" name="email" value={person.email} onChange={handleEmailChange} required />
    <textarea type="textarea" name="message" placeholder="Message" rows={10} cols={10} value={person.message} onChange={handleMessageChange} required />
    
    <button type="button">Rensa</button>
    <button type="submit">Skicka</button>
  </form>

  <p> {JSON.stringify(person)} </p>
  
  
  
  
  </>)

}