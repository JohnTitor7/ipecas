import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../services/firebase";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Preencha e-mail e senha.");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage("");

      await signInWithEmailAndPassword(auth, email, password);

      onLoginSuccess();
    } catch (error) {
      setErrorMessage("E-mail ou senha inválidos.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section style={pageStyle}>
      <div style={cardStyle}>
        <p style={labelStyle}>Área administrativa</p>

        <h2 style={titleStyle}>Entrar no painel</h2>

        <p style={descriptionStyle}>
          Acesse com o e-mail e senha cadastrados no Firebase.
        </p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={inputStyle}
          />

          {errorMessage && <p style={errorStyle}>{errorMessage}</p>}

          <button type="submit" style={buttonStyle} disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}

const pageStyle = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 16px",
};

const cardStyle = {
  width: "100%",
  maxWidth: "420px",
  backgroundColor: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: "18px",
  padding: "30px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)",
};

const labelStyle = {
  color: "#dc2626",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: "0 0 10px",
  fontSize: "13px",
};

const titleStyle = {
  color: "white",
  margin: 0,
  fontSize: "30px",
};

const descriptionStyle = {
  color: "#aaa",
  marginTop: "10px",
  marginBottom: "24px",
  lineHeight: "1.5",
};

const formStyle = {
  display: "grid",
  gap: "14px",
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid #333",
  backgroundColor: "#080808",
  color: "white",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const errorStyle = {
  color: "#f87171",
  margin: 0,
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
};

export default Login;