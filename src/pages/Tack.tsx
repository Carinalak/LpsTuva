import { useNavigate } from 'react-router-dom'; // Importera useNavigate
import { ButtonWrapper, Button } from "../components/styled/Buttons";
import { H2White } from "../components/styled/Fonts";
import { CenteredWrapperTransparent } from "../components/styled/Wrappers";

export const Tack = () => {
  const navigate = useNavigate(); // useNavigate hook

  // Funktion för att navigera tillbaka till formuläret
  const handleBackClick = () => {
    navigate('/kontakt'); // Navigera tillbaka till /kontakt-sidan
  };

  return ( <>
    <CenteredWrapperTransparent>
      <H2White>Meddelandet har skickats!</H2White>
        <ButtonWrapper>
          <Button type="button" onClick={handleBackClick}>
            Tillbaka
          </Button>
      </ButtonWrapper>
    </CenteredWrapperTransparent>


      </> );
};
