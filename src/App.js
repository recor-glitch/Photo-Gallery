import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/login";
import Registration from "./components/Auth/Registration/registration";
import FavouritePage from "./components/Favourite/favouritePage";
import { Home } from "./components/Home/home";
import Main from "./components/Main/Main";
import ProfilePage from "./components/Profile/profilePage";
import GuestRoute from "./Routes/GuestRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { theme } from "./Theme";

//Test
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <GuestRoute path="/" element={<Login />} />
          <GuestRoute path="/registration" element={<Registration />} />
          <ProtectedRoute path="/home" element={<Home />}>
            <Route path="" element={<Main />} />
            <Route path="favourite" element={<FavouritePage />} />
            <Route path="profile" element={<ProfilePage />} />
          </ProtectedRoute>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
