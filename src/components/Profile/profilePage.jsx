import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import profile from "../../assets/women.png";
import CustomCard from "./components/CustomCard";
import "./profilePage.css";

const ProfilePage = () => {
  const tablet = useMediaQuery("(max-width: 768px)");
  const [isedit, setIsEdit] = useState(false);
  const detail = [
    {
      head: "Pro",
      title: "Name-Yours",
      subtitle: "Daniel Pinkman",
    },
    {
      head: "Age",
      title: "Age-Yours",
      subtitle: "23",
    },
    {
      head: "Desc",
      title: "Description-Yours",
      subtitle: "Hello my name is Daniel Pinkman, I am 23 years in age.",
    },
  ];
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: "4rem",
          minHeight: "90vh",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            position: "relative",
          }}
        >
          <Grid container sx={{ minHeight: "100%", minWidth: "100%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ border: "1px solid red" }}
            >
              
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                style={{
                  display: tablet ? "none" : "block",
                  position: "absolute",
                  left: "90%",
                  bottom: 0,
                  transform: "translateY(0.7%)",
                }}
              >
                <img src={profile} alt={profile} />
              </div>
              <div style={{ position: "absolute", right: "0", top: "30%" }}>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="h1" className="typo-div">
                    Daniel
                  </Typography>
                </div>
                <div>
                  <Typography className="typo-div" sx={{ fontSize: "6rem" }}>
                    Pinkman,
                  </Typography>
                </div>
                <Typography
                  sx={{
                    maxWidth: "350px",
                    color: "#73737d",
                    textAlign: "left",
                    display: tablet ? "none" : "block",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  minus obcaecati quam dolores expedita magni eaque numquam
                  debitis
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container sx={{ minHeight: "100%", minWidth: "100%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                bgcolor: "#deaddd",
                minHeight: "100%",
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                paddingLeft: "2rem",
                paddingTop: "1rem",
              }}
            >
              {detail.map((item, index) => (
                <CustomCard {...item} />
              ))}
              <Button
                variant="outlined"
                sx={{ marginTop: "1rem" }}
                onClick={() => setIsEdit((prev) => !prev)}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
