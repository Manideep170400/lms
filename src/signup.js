import React from "react";
import Card from "@mui/material/Card";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api_url = "http://localhost:5000";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [createPassword, setCreatePassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const payload = {
      email: email,
      password: password,
      createPassword: createPassword,
    };
    const response = await axios.post(`${api_url}/createPage`, payload);
    navigate("/");
    return response.data;
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
          <input
            type="password"
            placeholder="create Password"
            value={createPassword}
            onChange={(e) => {
              setCreatePassword(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Submit</button>
        </Card>
      </header>
    </div>
  );
};

export default SignUp;
