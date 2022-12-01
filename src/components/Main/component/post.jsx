import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar, CardHeader, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { likeContext } from "../../Home/home";
import CustomizedMenus from "./menubutton";
import "./post.css";

export default function Post({ data, index, changeindex, end }) {
  const { likelist, setLikelist } = React.useContext(likeContext);
  const [liked, setLiked] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line
    likelist?.map((item) => {
      if (item.id === data.id) setLiked(true);
    });
    // eslint-disable-next-line
  }, [likelist]);

  const keyhandle = (event) => {
    if (event.key === "ArrowRight" && index < end - 1) changeindex(index + 1);
    if (event.key === "ArrowLeft" && index !== 0) changeindex(index - 1);
  };

  React.useEffect(() => {
    window.addEventListener("keyup", keyhandle);
    return () => window.removeEventListener("keyup", keyhandle);
  });

  const handleClick = () => {
    setLiked((prev) => {
      if (prev) setLikelist(likelist?.filter((item) => item.id !== data.id));
      else setLikelist([...likelist, data]);
      return !prev;
    });
  };

  return (
    <div className="main-div">
      <div
        className="arrow-back"
        onClick={() => index !== 0 && changeindex(index - 1)}
      >
        <IconButton>
          <ArrowBackIosIcon sx={{ color: "white", fontSize: "4rem" }} />
        </IconButton>
      </div>
      <div
        className="arrow-forward"
        onClick={() => index < end - 1 && changeindex(index + 1)}
      >
        <IconButton>
          <ArrowForwardIosIcon sx={{ color: "white", fontSize: "4rem" }} />
        </IconButton>
      </div>
      <Card className="card-div">
        <Grid
          container
          justifyContent="space-around"
          spacing={1}
          sx={{ padding: "2rem" }}
        >
          <Grid item sx={12} lg={6}>
            <div className="content-div">
              <CardHeader
                disableTypography={true}
                title={
                  <Typography sx={{ color: "#4c4c4c" }}>
                    {data.user.name}
                  </Typography>
                }
                subheader={
                  <Typography
                    sx={{
                      color: "green",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <VerifiedIcon fontSize="small" />
                    Available for hire
                  </Typography>
                }
                avatar={<Avatar src={data.user.profile_image.medium} />}
              />
              <Grid container justifyContent="space-evenly" spacing={1}>
                <Grid item>
                  <div
                    onClick={handleClick}
                    style={{
                      border: "1px solid #4c4c4c",
                      display: "flex",
                      justifyContent: "center",
                      padding: "0.3rem",
                      borderRadius: "5px",
                    }}
                  >
                    <FavoriteIcon
                      fontSize="medium"
                      sx={{ color: liked ? "red" : "#4c4c4c" }}
                    />
                  </div>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<ShareIcon />}
                    sx={{
                      color: "#4c4c4c",
                      borderColor: "#4c4c4c",
                    }}
                  >
                    share
                  </Button>
                </Grid>
                <Grid item>
                  <CustomizedMenus header="Download" data={data} />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "#4c4c4c",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Downloads
                  </Typography>
                  <Typography sx={{ color: "#4c4c4c", fontSize: "12px" }}>
                    {data.downloads}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "#4c4c4c",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Likes
                  </Typography>
                  <Typography sx={{ color: "#4c4c4c", fontSize: "12px" }}>
                    {data.likes}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="image-div">
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  height: "50rem",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
                image={data.urls.regular}
                alt="Live from space album cover"
              />
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
