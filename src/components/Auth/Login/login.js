import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Lottie from "lottie-react";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../../assets/facebook.png";
import mobile2 from "../../../assets/landscape_mobile.json";
import { loginUser } from "../../../Infrastucture/userfacade";
import "./login.css";

const Login = () => {
  const navigator = useNavigate();
  const [username, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [nerror, setnError] = React.useState("");
  const [perror, setpError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleNameError = (props) => {
    setnError(props.error);
  };

  const handlePassError = (props) => {
    setpError(props.error);
  };

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const handlename = (event) => {
    setnError("");
    setName(event.target.value);
  };

  const handlepass = (event) => {
    setpError("");
    setPass(event.target.value);
  };

  const handleclick = async () => {
    toggleLoading();
    if (username !== "" && pass !== "") {
      try {
        const result = await loginUser({ name: username, pass: pass });
        if (result.status === 200) {
          localStorage.setItem("token", JSON.stringify(result.data.token));
          navigator("/home");
        } else {
          handleNameError({ error: "Invalid Credential" });
          handlePassError({ error: "Invalid Credential" });
        }
      } catch (exception) {
        handleNameError({ error: exception.message });
      }
    }
    if (username === "") {
      handleNameError({ error: "Field is empty" });
    }
    if (pass === "") {
      handlePassError({ error: "Field is empty" });
    }
    toggleLoading();
  };

  return (
    <div className="grid-container">
      <Grid container className="main-grid">
        <Grid item xs={12} sm={4} lg={4} md={4} className="lotie-div">
          <Lottie animationData={mobile2} loop={true} />
        </Grid>
        <Grid item xs={12} sm={10} lg={3} md={5}>
          <div className="form-div">
            <Typography
              sx={{
                color: "black",
                fontFamily: "Great Vibes",
                fontSize: "4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Instagram
            </Typography>
            <TextField
              error={nerror === "" ? false : true}
              helperText={nerror}
              onChange={handlename}
              id="outlined-basic"
              variant="outlined"
              placeholder="Phone number, username or email"
              sx={{ marginBottom: "1rem" }}
            />
            <OutlinedInput
              inputProps={{
                "aria-label": perror,
              }}
              placeholder="password"
              error={perror === "" ? false : true}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={handlepass}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Typography
              sx={{
                marginBottom: "1rem",
                color: "red",
                fontSize: "12px",
                textAlign: "left",
                marginLeft: "1rem",
                marginTop: "3px",
              }}
            >
              {perror}
            </Typography>

            <Button
              onClick={handleclick}
              variant="contained"
              sx={{
                backgroundColor: "rgba(0, 149, 246,0.7)",
                marginBottom: "1rem",
                ":hover": {
                  backgroundColor: "rgba(0, 149, 246,1.0)",
                },
              }}
            >
              {isLoading ? (
                <CircularProgress sx={{ color: "white" }} />
              ) : (
                <b style={{ fontSize: "18px" }}>Login</b>
              )}
            </Button>
            <Divider color="#323232" sx={{ zIndex: "9", marginBottom: "1rem" }}>
              <Typography sx={{ color: "#4c4c4c" }}>or</Typography>
            </Divider>
            <div className="facebook-div">
              <img
                src={facebook}
                alt="facebook"
                height="30px"
                width="30px"
                style={{ marginRight: "1rem" }}
              />
              <Typography
                sx={{ color: "#4c4c4c", fontSize: "18px", fontWeight: "bold" }}
              >
                Login with facebook
              </Typography>
            </div>
            <Typography sx={{ color: "#4c4c4c", fontSize: "12px" }}>
              Forgot password?
            </Typography>
          </div>
          <div className="signup-div">
            <Typography sx={{ color: "#4c4c4c", fontSize: "18px" }}>
              Don't have an account?
            </Typography>
            <Typography
              sx={{ color: "rgba(0, 149, 246,1)", marginLeft: "1rem" }}
            >
              <Link
                to={"/registration"}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <b>Sign up</b>
              </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
