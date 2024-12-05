import "./App.css";
import SignIn from "./signIn";
import SignUp from "./signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/createAccount" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
