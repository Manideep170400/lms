import "./App.css";
import SignIn from "./signIn";
import SignUp from "./signup";
import Logout from "./logout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/createAccount" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
