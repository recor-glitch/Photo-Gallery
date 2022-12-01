import CloseIcon from "@mui/icons-material/Close";
import { Grid, Modal } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect, useState } from "react";
import { access_string, baseurl } from "../../constants";
import Header from "../Header/Header";
import RecipeReviewCard from "./component/CustomCard";
import Post from "./component/post";
import SkeletonCard from "./component/skeleton_card";
import "./Main.css";

async function fetchData(count = 12, page = 1) {
  let response = await axios.get(
    `${baseurl}/photos/random${access_string}&count=${count}`
  );
  if (response.status === 200) {
    return response.data;
  }
}

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "next":
//     //something...
//     case "prev":
//     //something...
//     default:
//       return state;
//   }
// };

function Main() {
  useEffect(() => {
    fetchData().then((data) => {
      setPhotos(data);
    });
  }, []);

  const [photos, setPhotos] = useState([]);
  const [showpost, setShowpost] = useState(false);
  const [postdata, setPostData] = useState({});
  const [curindex, setCurindex] = useState(0);

  useEffect(() => {
    if (photos.length !== 0) setPostData(Object.values(photos)[curindex]);
    // eslint-disable-next-line
  }, [curindex]);

  const handleChange = (event, page) => {
    setPhotos([]);
    fetchData(12, page).then((response) => setPhotos(response));
  };

  const handlePostData = ({ data }) => {
    setPostData(data);
  };

  const handleClick = ({ data, curentindex }) => {
    setCurindex(curentindex);
    handlePostData({ data: data });
    setShowpost(true);
  };

  const handleClose = () => {
    setShowpost(false);
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, lg: 2, md: 2, sm: 2 }}
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid item xs={12} lg={12} className="header-div">
          <Header />
        </Grid>
        {photos.length > 0
          ? photos.map((element, index) => {
              return (
                <Grid item xs={12} lg={3} md={6} sm={6} key={index}>
                  <RecipeReviewCard
                    data={element}
                    handleClick={() =>
                      handleClick({
                        data: element,
                        curentindex: index,
                      })
                    }
                  />
                </Grid>
              );
            })
          : [...new Array(12)].map((item, index) => {
              return (
                <Grid item xs={12} lg={3} md={6} sm={6} key={index}>
                  <SkeletonCard />
                </Grid>
              );
            })}
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Pagination
              color="primary"
              count={10}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </Stack>
        </Grid>
      </Grid>
      <Modal
        open={showpost}
        onClose={handleClose}
        disableAutoFocus
        sx={{
          backdropFilter: "blur(20px)",
        }}
      >
        <>
          <Post
            data={postdata}
            index={curindex}
            changeindex={setCurindex}
            end={photos.length}
          />

          <div
            onClick={() => {
              setShowpost(false);
            }}
          >
            <CloseIcon
              sx={{
                position: "absolute",
                top: "2%",
                right: "2%",
                color: "white",
                fontSize: "2rem",
              }}
            />
          </div>
        </>
      </Modal>  
    </>
  );
}

export default Main;
