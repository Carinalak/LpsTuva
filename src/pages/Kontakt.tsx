import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Person } from "../models/Person";
import { Form } from "../components/styled/Form";
import { WrapperTransparent } from "../components/styled/Wrappers";
import { Button, ButtonWrapper } from "../components/styled/Buttons";
import { H1WhiteSecond } from "../components/styled/Title";
import { useNavigate } from "react-router-dom";
import { PawSpinner } from '../components/PawSpinner';

export const Kontakt = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Person>();
  const [loading, setLoading] = useState(false);  // State för att hantera spinnern
  const navigate = useNavigate();

  const onSubmit = async (data: Person) => {
    setLoading(true);  // Visa spinnern

    try {
      // Skicka POST-request till backend
      const response = await axios.post("http://localhost:5000/api/contact", data);
      console.log("Form data sent successfully:", response.data);

      reset();
      setTimeout(() => {
        setLoading(false); // Dölj spinnern
        navigate("/tack");
      }, 2000);  // Fördröjning på 2 sekunder

    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);  // Dölj spinnern även vid fel
    }
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
        <H1WhiteSecond>Skriv till mig!</H1WhiteSecond>
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
      </WrapperTransparent>
    </>
  );
};
