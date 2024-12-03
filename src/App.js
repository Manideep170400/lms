import Card from "@mui/material/Card";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./App.css";

function App() {
  return (
    <div className="App">
      <span>
        <p>Lagout</p>
        <LogoutOutlinedIcon />
      </span>
      <header className="App-header">
        <Card variant="outlined" className="card">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button> login</button>
          <button>Create Account</button>
        </Card>
      </header>
    </div>
  );
}

export default App;
