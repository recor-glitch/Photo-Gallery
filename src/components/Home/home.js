import { Navbar } from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import DrawerAppBar from "../Appbar/DrawerAppBar";
import Main from "../Main/Main";
import { createContext, useEffect, useState } from "react";
import "./home.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Routes, Route } from "react-router-dom";
import FavouritePage from "../Favourite/favouritePage";
import ProfilePage from "../Profile/profilePage";

export const drawercontext = createContext();
export const likeContext = createContext();

export const Home = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [isdrawer, setIsDrawer] = useState(matches);
  const value = { isdrawer, setIsDrawer };
  const [likelist, setLikelist] = useState([]);

  const contextvalue = { likelist, setLikelist };

  useEffect(() => {
    if (matches) setIsDrawer(true);
    else setIsDrawer(false);
  }, [matches]);

  const openstyle = {
    display: "block",
    transform: "none",
    transition: "all 0.3s ease-out",
    opacity: 1,
  };

  const closestyle = {
    opacity: 0,
    display: "block",
    transform: "TranslateX(-100%)",
    transition: "all 0.3s ease-in",
  };

  const defaultstyle = {
    display: "block",
  };

  return (
    <likeContext.Provider value={contextvalue}>
      <drawercontext.Provider value={value}>
        <>
          <Grid container spacing={2} className="main-div">
            <Grid item xs={12} lg={12} md={12}>
              <DrawerAppBar />
            </Grid>
            <Grid
              item
              xs={2}
              className="navbar-grid"
              style={
                !isdrawer
                  ? { ...closestyle }
                  : !matches
                  ? { ...openstyle }
                  : { ...defaultstyle }
              }
            >
              <Navbar />
            </Grid>
            <Grid item xs={12} lg={10} md={10} className="main-grid-div">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/favourite" element={<FavouritePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </Grid>
          </Grid>
        </>
      </drawercontext.Provider>
    </likeContext.Provider>
  );
};
