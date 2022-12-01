import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";
import * as React from "react";

export default function SkeletonCard() {

  return (
    <Card sx={{ bgcolor: "#363636", maxWidth: 345, m: 2, textAlign: "left" }}>
      <CardHeader
        avatar={
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          
        }
        action={null}
        title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          
        }
        subheader={
            <Skeleton animation="wave" height={10} width="40%" />
          
        }
      />
      {
        <Skeleton sx={{ height: 194 }} animation="wave" variant="rectangular" />
      }

      <CardContent>
        {
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
       }
      </CardContent>
    </Card>
  );
}
