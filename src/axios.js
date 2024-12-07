import axios from "axios";

const api_url = "http://localhost:5000";

const HomePage = (navigate) => {
  const createAccount = async () => {
    try {
      const response = await axios.post(`${api_url}/createPage`);
      navigate("/createAccount");
      return response.data;
    } catch (error) {
      console.error("Error in createAccount:", error);
    }
  };

  const loginPage = async (data, setToken) => {
    try {
      const response = await axios.post(`${api_url}/loginPage`, data, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        setToken("login Successfully");
      } else {
        const error = await response.json();
        setToken(error.message || "Login failed");
      }
      return response.data;
    } catch (error) {
      console.error("Error in loginPage:", error);
    }
  };

  return {
    createAccount,
    loginPage,
  };
};

export default HomePage;
