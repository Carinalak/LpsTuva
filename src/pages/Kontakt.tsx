import { useForm } from "react-hook-form";
import { Person } from "../models/Person";
import { Form } from "../components/styled/Form";
import { WrapperTransparent } from "../components/styled/Wrappers";
import { Button, ButtonWrapper } from "../components/styled/Buttons";
import { H2White } from "../components/styled/Title";

export const Kontakt = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Person>();

  // Hanterar formulärsändning
  const onSubmit = (data: Person) => {
    console.log("Form data:", data);
    reset(); // Rensar formuläret efter inskick
  };

  return (
    <>
      <WrapperTransparent>
        <H2White>Skriv ett meddelande till mig!</H2White>
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
