import Masonry from "@mui/lab/Masonry";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import "./favouritepage.css";
import { Grid, IconButton, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";

const FavouritePage = () => {
  const demo_list = [
    "https://images.unsplash.com/photo-1668584339163-6de0f64a8ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80",
    "https://images.unsplash.com/photo-1668570000683-aa421ea758a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1668555980382-0f18f3699765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1668539094820-10a48a3fbcc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    "https://images.unsplash.com/photo-1668533633195-2210b91faa0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://plus.unsplash.com/premium_photo-1663013679542-b75bbc77fe93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1657214059169-c01172e56be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1668468232841-0b5b45ab758f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1659535915214-e7cbac112038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1665675241472-ef9b474be5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  ];

  const mobile = useMediaQuery("(max-width: 425px)");
  const tablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div
        style={{
          marginTop: "4rem",
          marginLeft: mobile ? "none" : tablet ? "3rem" : "none",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} lg={10} md={10}>
            <Masonry
              columns={mobile ? 1 : tablet ? 2 : 3}
              spacing={{ xs: 0, lg: 3, md: 2, sm: 1 }}
            >
              {demo_list.map((item, index) => (
                <div key={index} className="container-div">
                  <img
                    src={`${item}?w=162&auto=format`}
                    alt={item}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                    }}
                  />
                  <div className="footer-div">
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={
                        <div>
                          <IconButton>
                            <FavoriteIcon
                              fontSize="medium"
                              sx={{ color: "red" }}
                            />
                          </IconButton>
                          <IconButton>
                            <ShareIcon
                              fontSize="medium"
                              sx={{ color: "white" }}
                            />
                          </IconButton>
                          <IconButton>
                            <DeleteIcon
                              fontSize="medium"
                              sx={{ color: "white" }}
                            />
                          </IconButton>
                        </div>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader={<Typography>September 14, 2016</Typography>}
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm="none"
            xs="none"
            sx={{
              position: "fixed",
              right: 0,
              padding: "1rem",
              display: tablet ? "none" : "flex",
              height: "90vh",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "4rem",
                fontFamily: "sans-serif",
                color: "#73737d",
                transform: "rotate(90deg) translateX(50%)",
                height: "max-content",
                width: "max-content",
              }}
            >
              My Favourites
            </Typography>
            <Typography sx={{ color: "#73737d" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  height: "max-content",
                }}
              >
                <InstagramIcon color="#73737d" />
                <GoogleIcon color="#73737d" />
                <TwitterIcon color="#73737d" />
                <GitHubIcon color="#73737d" />
              </div>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FavouritePage;
