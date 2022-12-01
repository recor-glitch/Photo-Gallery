import axios from "axios";

const url = "https://dummyjson.com/auth/login";

const loginUser = async ({ name, pass }) => {
  const response = await axios.post(url, {
    username: "kminchelle",
    password: "0lelplR",
  });
  if(response) return response;
  else throw new Error("Server side error")
};

export { loginUser };
