import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

import { ErrorText, LoginForm, LoginButton, LoginInput, TextStyleWhite, EyeButton } from "../components/login/LoginStyled";
import { WrapperTransparent } from "../components/styled/Wrappers";
import { getAdminSession, saveAdminSession } from "../services/CookieServiceAdmin";
import { H1WhiteSecond } from "../components/styled/Fonts";
import { SKUGGLILA } from "../components/styled/Variables";

export const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      <H1WhiteSecond>Tuvas Admin</H1WhiteSecond>
      <TextStyleWhite>Logga in som admin</TextStyleWhite>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Namn"
        />
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <LoginInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Lösenord"
            autoComplete="new-password"
            
          />
          <EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={20} color={SKUGGLILA} />
            ) : (
              <Eye size={20} color={SKUGGLILA} />
            )}
          </EyeButton>
        </div>
        <LoginButton type="submit">Logga in</LoginButton>
        {error && <ErrorText>{error}</ErrorText>}
      </LoginForm>
    </WrapperTransparent>
  );
};
