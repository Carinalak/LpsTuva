import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { TextStyle, FormButton, ErrorText, FormInput, LoginForm } from "../components/login/LoginStyled";
import { WrapperTransparent } from "../components/styled/Wrappers";
import { getAdminSession, saveAdminSession } from "../services/CookieServiceAdmin";

export const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Kontrollera om admin redan är inloggad vid sidladdning
  useEffect(() => {
    const session = getAdminSession();
    if (session) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

    try {
      const response = await axios.post(`${API_URL}/auth/login_admin`, { name, password });

      if (response.status === 200) {
        const { admin, token } = response.data;
        saveAdminSession(admin, token);
        navigate("/admin");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Ett oväntat fel inträffade. Försök igen.");
      }
      setName("");
      setPassword("");
    }
  };

  return (
    <WrapperTransparent>
      <TextStyle>Logga in som admin</TextStyle>
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
        <FormButton type="submit">Logga in</FormButton>
        {error && <ErrorText>{error}</ErrorText>}
      </LoginForm>
    </WrapperTransparent>
  );
};
