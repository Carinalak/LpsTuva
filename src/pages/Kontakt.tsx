import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Person } from "../models/Person";
import { Form } from "../components/styled/Form";
import { WrapperTransparent } from "../components/styled/Wrappers";
import { Button, ButtonWrapper } from "../components/styled/Buttons";
import { useNavigate } from "react-router-dom";
import { PawSpinner } from '../components/PawSpinner';
import { H1WhiteSecond } from '../components/styled/Title';
import Nalle from '../assets/images/nalle.png';
import { SerieImage } from '../components/styled/Image';
import emailjs from 'emailjs-com';

export const Kontakt = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Person>();
  const [loading, setLoading] = useState(false);  // State för att hantera spinnern
  const navigate = useNavigate();

  const onSubmit = (data: Person) => {
    setLoading(true);  // Visa spinnern

    console.log("Form data:", data);

    // Använd EmailJS för att skicka formulärdata
    emailjs.send(
      'service_7rkooal', // SERVICE_ID
      'template_ntypwmj',  // TEMPLATE_ID
      data,  // Skickar data från formuläret
      'Fx0CyuhMUzMYIorTE'  /// PUBLIC_KEY
    )
    .then((response) => {
      console.log('E-post skickat:', response);
      reset();
      setLoading(false);
      navigate("/tack");  // Navigera till tack-sidan
    })
    .catch((error) => {
      console.error('E-postfel:', error);
      setLoading(false);
    });
  };

  setTimeout(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, 0);

  return (
    <>
      {loading && <PawSpinner />}  {/* Visa spinnern när loading är true */}
      
      <WrapperTransparent>
        <H1WhiteSecond>Skriv till Tuva!</H1WhiteSecond>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="contactInput"
              type="text"
              placeholder="Namn"
              {...register("name", { 
                required: "Namn är obligatoriskt",
                pattern: {
                  value: /^[A-Za-z\s]+$/, // Tillåter bara bokstäver och mellanslag
                  message: "Endast bokstäver och mellanslag är tillåtna"
                }
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div>
            <input
              className="contactInput"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email är obligatoriskt",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Enkel email validering
                  message: "Ogiltigt email-format"
                }
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              className="contactTextArea"
              placeholder="Meddelande"
              {...register("message", {
                required: "Meddelande är obligatoriskt",
                minLength: {
                  value: 5,
                  message: "Meddelandet måste vara minst 5 tecken"
                }
              })}
            />
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <ButtonWrapper>
            <Button type="button" onClick={() => reset()}>Rensa</Button>
            <Button type="submit">Skicka</Button>
          </ButtonWrapper>
        </Form>
        <SerieImage src={Nalle} alt="Nalle" loading="lazy"/>
      </WrapperTransparent>
    </>
  );
};