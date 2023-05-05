import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../constants/constants";
import { CheckCircle } from "@mui/icons-material";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card sx={{ width: { md: "360px", sm: "500px", xs: "300px"}, boxShadow: "none", borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: "100%" ,height: "200px" }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography sx={{display: 'flex', alignItems : "center"}} variant="subtitle2" fontWeight={"bold"} color={"gray"}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize : 12, color: 'gray', ml: "5px"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
