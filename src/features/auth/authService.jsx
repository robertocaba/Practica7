import axios from "axios";

const API_URL = "http://localhost:4000";
const user = JSON.parse(localStorage.getItem("user"));

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/register", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/users/login", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const logout = async () => {
  
  const res = await axios.put(API_URL + "/users/logout", {
    headers: {
      authorization: user?.token,
    },
  });
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};

const authService = {
  register,
  login,
  logout
};

export default authService;
