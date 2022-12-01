import { Skeleton } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import * as React from "react";
import { access_string, baseurl } from "../../constants";
import "./Header.css";

const fetchCategory = async () => {
  let result = await axios.get(
    `${baseurl}/search/photos/${access_string}&query="fashion"&page={1}`
  );
  if (result.status === 200) {
    return result;
  }
};

const Header = () => {
  React.useEffect(() => {
    fetchCategory().then((response) => {
      console.log(response.data);
      if (response.status === 200) setCategory(response.data.results);
    });
  }, []);

  const [category, setCategory] = React.useState([]);

  return (
    <Stack direction="row" spacing={2} sx={{ marginBottom: "1rem" }}>
      {category.length !== 0
        ? category.map((element, index) => {
            return (
              <div className="avatar-div">
                <div className="inner-avatar-div">
                  <img
                    className="avatar"
                    alt="fashion"
                    src={element.urls.regular}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              </div>
            );
          })
        : [...new Array(9)].map((item) => (
            <Skeleton
              variant="circular"
              width={"10rem"}
              height={"10rem"}
              animation="wave"
              sx={{ backgroundColor: "#333732" }}
            />
          ))}
    </Stack>
  );
};

export default React.memo(Header);
