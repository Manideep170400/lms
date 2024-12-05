import Card from "@mui/material/Card";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./axios";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const MainData = HomePage(navigate);

  const handleTogglePage = {
    createAccount: MainData.createAccount,
    loginPage: MainData.loginPage,
  };
  return (
    <div className="App">
      <span>
        <p>Lagout</p>
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
          <button onClick={handleTogglePage.loginPage}> login</button>
          <button onClick={handleTogglePage.createAccount}>
            Create Account
          </button>
        </Card>
      </header>
    </div>
  );
}

export default SignIn;
