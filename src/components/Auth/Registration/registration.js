import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "./registration.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import facebook from "../../../assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import CircularProgress from "@mui/material/CircularProgress";

const Registration = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [perror, setpError] = React.useState("");
  const [emailorPhn, setEmailorPhn] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [emailorphn_error, setEmailorPhn_Error] = React.useState("");
  const [fname_error, setFname_error] = React.useState("");
  const [username_error, setUserName_error] = React.useState("");
  const [isLoading, setIsLoading] = React.useState("");

  const navigator = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClick = () => {
    toggleLoading();
    if (
      emailorPhn.length !== 0 &&
      fname.length !== 0 &&
      username.length !== 0 &&
      pass.length !== 0
    ) {
      navigator("/home");
    } else {
      handleemailorphnError({ error: "Invalid Credential" });
      handleFnameError({ error: "Invalid Credential" });
      handleusernameError({ error: "Invalid Credential" });
      handlePassError({ error: "Invalid Credential" });
    }
    if (emailorPhn.length === 0)
      handleemailorphnError({ error: "Field is empty" });
    if (fname.length === 0) handleFnameError({ error: "Field is empty" });
    if (username.length === 0) handleusernameError({ error: "Field is empty" });
    if (pass.length === 0) handlePassError({ error: "Field is empty" });
    toggleLoading();
  };

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const handlePassError = (props) => {
    setpError(props.error);
  };

  const handleFnameError = (props) => {
    setFname_error(props.error);
  };

  const handleusernameError = (props) => {
    setUserName_error(props.error);
  };

  const handleemailorphnError = (props) => {
    setEmailorPhn_Error(props.error);
  };

  const handleEmailorPhn = (event) => {
    setEmailorPhn_Error("");
    setEmailorPhn(event.target.value);
  };

  const handleFname = (event) => {
    setFname_error("");
    setFname(event.target.value);
  };

  const handleUserName = (event) => {
    setUserName_error("");
    setUsername(event.target.value);
  };

  const handlepass = (event) => {
    setpError("");
    setPass(event.target.value);
  };

  return (
    <div className="grid-container">
      <Grid container className="main-grid">
        <Grid item xs={12} sm={5} lg={2.5} md={3}>
          <div className="form-div">
            <Typography
              sx={{
                color: "black",
                fontFamily: "Great Vibes",
                fontSize: "4rem",
                fontWeight: "bold",
                padding: "1rem",
              }}
            >
              Instagram
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginBottom: "1rem",
                backgroundColor: "rgba(0, 149, 246,1.0)",
                ":hover": {
                  backgroundColor: "rgba(0, 149, 246,1.0)",
                  cursor: "pointer",
                },
              }}
              prefix={facebook}
            >
              Sign up with facebook
            </Button>
            <Divider color="#323232" sx={{ zIndex: "9", marginBottom: "1rem" }}>
              <Typography
                sx={{
                  color: "#4c4c4c",
                }}
              >
                or
              </Typography>
            </Divider>
            <TextField
              error={emailorphn_error.length === 0 ? false : true}
              onChange={handleEmailorPhn}
              id="outlined-basic"
              variant="outlined"
              helperText={emailorphn_error}
              placeholder="Mobile number or email"
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              error={fname_error.length === 0 ? false : true}
              onChange={handleFname}
              id="outlined-basic"
              variant="outlined"
              helperText={fname_error}
              placeholder="Full Name"
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              error={username_error.length === 0 ? false : true}
              onChange={handleUserName}
              helperText={username_error}
              id="outlined-basic"
              variant="outlined"
              placeholder="Username"
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
            <Typography
              sx={{ color: "#4c4c4c", fontSize: "12px", marginBottom: "1rem" }}
            >
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </Typography>
            <Typography
              sx={{ color: "#4c4c4c", fontSize: "12px", marginBottom: "1rem" }}
            >
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </Typography>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{
                marginBottom: "1rem",
                backgroundColor: "rgba(0, 149, 246,0.6)",
                ":hover": {
                  backgroundColor: "rgba(0, 149, 246,1.0)",
                  cursor: "pointer",
                },
              }}
            >
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Typography>Sign up</Typography>
              )}
            </Button>
          </div>
          <div className="signup-div">
            <Typography sx={{ color: "#4c4c4c", fontSize: "18px" }}>
              Have an account?
            </Typography>
            <Typography sx={{ color: "blue", marginLeft: "1rem" }}>
              <Link
                to={"/"}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <b>Log in</b>
              </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Registration;
