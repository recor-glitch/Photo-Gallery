import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./DrawerAppBar.css";
import { drawercontext } from "../Home/home";

const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { setIsDrawer } = React.useContext(drawercontext);

  const handleDrawerToggle = () => {
    setIsDrawer((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="transparent" position="fixed">
        <Toolbar>
          <IconButton
            className="drawer-button"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              className="menu"
              sx={{
                color: "white",
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
            />
          </IconButton>
          <Typography
            color={"#73737d"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            DEMO APP
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#73737d" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DrawerAppBar;
