import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { first_list, second_list, third_list } from "../../constants";
import "./Navbar.css";
import { drawercontext } from "../Home/home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const CustomList = ({ items }) => {
  const navigate = useNavigate();
  return (
    <List>
      {items.map((item, index) => (
        <div
          onClick={() => {
            if (item.title === "Signout") {
              localStorage.removeItem("token");
              navigate(item.route);
            } else navigate(item.route);
          }}
          key={index}
        >
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <item.icon sx={{ color: "#73737d" }} />
              </ListItemIcon>
              <ListItemText primary={item.title} color="primary" />
            </ListItemButton>
          </ListItem>
        </div>
      ))}
    </List>
  );
};

export const Navbar = () => {
  const { isdrawer } = React.useContext(drawercontext);
  const matches = useMediaQuery("(min-width: 768px)");

  console.log(isdrawer, matches);
  return (
    <div
      className="nav-div"
      style={{
        marginTop: "50px",
        position: "fixed",
        zIndex: 9999,
        backgroundColor: isdrawer && matches ? "transparent" : "#4c4c4c",
      }}
    >
      <Toolbar />
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          textAlign: "left",
          marginLeft: "15px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          color: "#73737d",
        }}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          sx={{ marginRight: "10px" }}
        />
        Hi, Sophy
      </Typography>
      <Divider />
      <CustomList items={first_list} />
      <Divider />
      <CustomList items={second_list} />
      <Divider />
      <CustomList items={third_list} />
    </div>
  );
};
