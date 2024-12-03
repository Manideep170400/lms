import Card from "@mui/material/Card";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login successful:", data);
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
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
          <button onClick={login}> login</button>
          <button>Create Account</button>
        </Card>
      </header>
    </div>
  );
}

export default App;
