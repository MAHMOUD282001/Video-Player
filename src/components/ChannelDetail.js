import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../FetchData/FetchData";
import { Box, Container } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

function ChannelDetail() {
  let [channelDetail, setChannelDetail] = useState();
  let [videos, setVideos] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    FetchData(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items);
    });

    FetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184,1) 100%, rgba(0, 212, 255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard
          channelDetail={channelDetail ? channelDetail[0] : ""}
          marginTop={"-120px"}
        />
      </Box>

      <Container maxWidth = "">
        <Videos videos={videos} />
      </Container>
    </Box>
  );
}

export default ChannelDetail;
