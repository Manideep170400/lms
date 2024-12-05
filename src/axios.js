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

  const loginPage = async (data) => {
    try {
      const response = await axios.post(`${api_url}/loginPage`, data, {
        headers: { "Content-Type": "application/json" },
      });
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
