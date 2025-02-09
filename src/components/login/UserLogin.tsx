import { useState, useEffect } from "react";
import axios from "axios";
import { getUserSession, saveUserSession, removeUserSession } from "../../services/CookieService";
import { WrapperTransparent } from "../styled/Wrappers";
import { LogoutMessage, TextStyle, FormButton, ErrorText, FormInput, LoginForm } from "./LoginStyled";





interface LoginProps {
  onLogin: () => void;
}

export const UsernLogin = ({ onLogin }: LoginProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  const [passwordError] = useState("");


  // Kontrollera om användaren är inloggad via session-cookien vid sidladdning
  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  
    if (isRegistering && !passwordValidationRegex.test(password)) {
      
      window.alert(
        "Lösenordet måste vara minst 8 tecken, innehålla minst en stor och en liten bokstav samt en siffra."
      );
      return;
    }
  
    try {
      if (isRegistering) {
        const response = await axios.post(`${API_URL}/users/register`, {
          name,
          password,
        });
  
        if (response.status === 201) {
          const loginResponse = await axios.post(`${API_URL}/auth/login`, {
            name,
            password,
          });
  
          if (loginResponse.status === 200) {
            const { user, token } = loginResponse.data;
            saveUserSession(user, token);
            setIsLoggedIn(true);
            onLogin();
          }
        }
      } else {
        const response = await axios.post(`${API_URL}/auth/login`, {
          name,
          password,
        });
  
        if (response.status === 200) {
          const { user, token } = response.data;
          saveUserSession(user, token);
          setIsLoggedIn(true);
          onLogin();
        }
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response) {
        if (err.response.data && err.response.data.error) {
          window.alert(err.response.data.error);
        } else {
          window.alert("Ett oväntat fel inträffade. Försök igen.");
        }
      } else {
        window.alert("Ingen kontakt med servern. Försök igen senare.");
      }
      setName("");
      setPassword("");
    }
  };
  
  
  const handleLogout = () => {
    removeUserSession();
    setIsLoggedIn(false);
    setName(""); 
    setPassword("");
  };

  const handleStay = () => {
    onLogin();

  };

  if (isLoggedIn) {
    const session = getUserSession();
    const user = session ? session.user : null;

    return (
      <WrapperTransparent>
      <LogoutMessage>
        <TextStyle>Är du säker att du vill logga ut, {user?.name}?</TextStyle>
        <FormButton onClick={handleLogout}>Ja</FormButton>
        <FormButton onClick={handleStay}>Nej</FormButton>
      </LogoutMessage>
      </WrapperTransparent>
    );
  }

  return (
    <WrapperTransparent>
      <TextStyle>{isRegistering ? "Skapa konto" : "Logga in"}</TextStyle>
      <LoginForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Namn"
        />
        <FormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Lösenord"
          autoComplete="new-password"
        />
        <FormButton type="submit">{isRegistering ? "Registrera" : "Logga in"}</FormButton>
        {passwordError && <ErrorText>{passwordError}</ErrorText>}
        <div>
          {error && <ErrorText>{error}</ErrorText>}

          {isRegistering ? (
            <TextStyle>
              Har du redan ett konto?{" "}
              <span
                onClick={() => {
                  setIsRegistering(false);
                  setError("");
                }}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Logga in här.
              </span>
            </TextStyle>
          ) : (
            <TextStyle>
              Inget konto?{" "}
              <span
                onClick={() => {
                  setIsRegistering(true);
                  setError("");
                }}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Registrera dig.
              </span>
            </TextStyle>
          )}
        </div>
      </LoginForm>
    </WrapperTransparent>
  );
};