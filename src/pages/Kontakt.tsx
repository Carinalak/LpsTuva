import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Person } from "../models/Person";
import { Form } from "../components/styled/Form";
import { BackgroundOriginal, WhiteFontSmallerBox, WrapperTransparent } from "../components/styled/Wrappers";
import { Button, ButtonWrapper } from "../components/styled/Buttons";
import { useNavigate } from "react-router-dom";
import { PawSpinner } from '../components/PawSpinner';
import { H1WhiteSecond } from '../components/styled/Fonts';
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
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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

  // --------------------- Koden nedan gör så att sidan hamnar högst upp när den öppnas ---------------------- // 
  setTimeout(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, 0);

  // ---------------------------------------- SLUT PÅ SCROLLKOD ---------------------------------------------- //

  return (
    <BackgroundOriginal>
      {loading && <PawSpinner />}  {/* Visa spinnern när loading är true */}
      
      <WrapperTransparent>
        <H1WhiteSecond>Skriv till Tuva!</H1WhiteSecond>
        <WhiteFontSmallerBox>Skriv till mig om vad du vill! Är det något mer du vill se på den här sidan? Skicka gärna förslag till mig här.</WhiteFontSmallerBox>
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
              placeholder="Email - valfritt"
              {...register("email", {
                
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
    </BackgroundOriginal>
  );
};