import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const stringToken = localStorage.getItem("token");
      const token = JSON.parse(stringToken);

      if (!token) navigate("/");
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

export default ProtectedRoute;
