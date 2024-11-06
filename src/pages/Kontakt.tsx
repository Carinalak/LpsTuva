import { ChangeEvent, useState } from "react"
import { Person } from "../models/Person"
import { Form } from "../components/styled/Form"
import { WrapperTransparent } from "../components/styled/Wrappers"
import { Button, ButtonWrapper } from "../components/styled/Buttons"
import { H2White } from "../components/styled/Title"

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
    <WrapperTransparent>
      <H2White>Skriv ett meddelande till mig!</H2White>
      <Form>
        <input 
          className="contactInput" 
          type="text" 
          name="name" 
          placeholder="Namn"
          value={person.name} 
          onChange={handleNameChange} 
          required 
        />
          
        <input 
          className="contactInput" 
          type="email" 
          name="email" 
          placeholder="Email"
          value={person.email} 
          onChange={handleEmailChange} 
          required 
        />

        <textarea 
          className="contactTextArea"
          name="message"
          placeholder="Meddelande"
          value={person.message}
          onChange={handleMessageChange}
          required
        />
        <ButtonWrapper>
          <Button type="button">Rensa</Button>
          <Button type="submit">Skicka</Button>
        </ButtonWrapper>
      </Form>

      {/* <p> {JSON.stringify(person)} </p> */}
    </WrapperTransparent>
    
    
  
  </>)

}