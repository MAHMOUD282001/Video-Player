import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

function Videos({ videos, direction }) {
  
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={{ xl: "start", xs: "center" }}
      alignItems={"center"}
      gap={2}
    >
      {videos?.map((video, index) => (
        <Box key={index}>
          {video.id.channelId && <ChannelCard channelDetail={video} />}
          {video.id.videoId && <VideoCard video={video} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
