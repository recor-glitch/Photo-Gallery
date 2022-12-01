import { Typography } from "@mui/material";
import "./CustomCard.css";

const CustomCard = (props) => {
  return (
    <div style={{ minWidth: "100%", textAlign: "left", marginTop: "1rem" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#73737d",
        }}
        className="head-div"
      >
        {props.head}
      </Typography>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="h6" sx={{ color: "#73737d" }}>
        {props.subtitle}
      </Typography>
    </div>
  );
};

export default CustomCard;
