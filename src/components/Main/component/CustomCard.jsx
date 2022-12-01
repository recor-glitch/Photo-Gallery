import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./customCard.css";
import { likeContext } from "../../Home/home";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ data, handleClick }) {
  const [expanded, setExpanded] = React.useState(false);
  const [isclick, setIsclick] = React.useState(true);
  const { likelist, setLikelist } = React.useContext(likeContext);
  const [isliked, setIsliked] = React.useState(false);

  React.useLayoutEffect(() => {
    setIsliked(false);
  }, [likelist]);

  React.useEffect(() => {
    console.log("inside card useeffect");
    // eslint-disable-next-line
    likelist?.forEach((item) => {
      if (item.id === data.id) setIsliked(true);
    });
    // eslint-disable-next-line
  }, [likelist]);

  const handleLike = () => {
    setIsliked((prev) => {
      if (prev)
        setLikelist((list) => list.filter((item) => item.id !== data.id));
      else setLikelist((list) => [...list, data]);
      return !prev;
    });
  };
  console.log(likelist);

  const toggleClick = () => {
    setIsclick(!isclick);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ bgcolor: "#363636", textAlign: "left" }}
      className="custom-card"
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "white", color: "#363636", fontWeight: "bold" }}
            aria-label="recipe"
          >
            {data.user.name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        }
        title={data.user.name}
        subheader={
          <Typography>
            {new Date(data.user.updated_at).toLocaleString()}
          </Typography>
        }
      />
      <CardMedia
        onClick={handleClick}
        component="img"
        height="194"
        image={data.urls.regular}
        alt="Paella dish"
      />
      <CardContent>
        <AvatarGroup total={24} sx={{ justifyContent: "flex-end" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        </AvatarGroup>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="likes" onClick={handleLike}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <FavoriteIcon
              fontSize="small"
              style={{ color: isliked ? "red" : "white" }}
            />
          </div>
        </IconButton>

        <Typography>{data.likes}</Typography>
        <IconButton
          aria-label="views"
          onClick={toggleClick}
          sx={{ textAlign: "center" }}
        >
          {isclick ? (
            <>
              <VisibilityIcon style={{ marginRight: "5px", color: "white" }} />
            </>
          ) : (
            <VisibilityOffIcon sx={{ color: "white" }} />
          )}
        </IconButton>

        {isclick && <Typography>{data.views}</Typography>}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: "white" }} />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
