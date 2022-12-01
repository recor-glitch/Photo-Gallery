import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const GuestRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const stringToken = localStorage.getItem("token");
      const token = JSON.parse(stringToken);

      if (token) navigate("/home");
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route {...props} />
    </Routes>
  );
};

export default GuestRoute;
