import Card from "@mui/material/Card";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./axios";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const { loginPage, createAccount } = HomePage();
  const handleLogin = async () => {
    const data = { email, password };
    await loginPage(data, setToken);
  };

  const handleCreateAccount = async () => {
    await createAccount(navigate);
  };
  return (
    <div className="App">
      <span>
        <p>Logout</p>
        <LogoutOutlinedIcon />
      </span>
      <header className="App-header">
        <Card variant="outlined" className="card">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>{token}</p>
          <button onClick={handleLogin}> login</button>
          <button onClick={handleCreateAccount}>Create Account</button>
        </Card>
      </header>
    </div>
  );
}

export default SignIn;
