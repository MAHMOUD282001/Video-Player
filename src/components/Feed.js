import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FetchData } from "../FetchData/FetchData";

function Feed() {
  let [selectedCategory, setSelectedCategory] = useState("New");
  let [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    FetchData(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data?.items);
    });
  }, [selectedCategory]);

  console.log(videos);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "#000",
        top: "0",
      }}
      className="feed"
    >
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box sx={{ overflowY: "auto", height: "92vh"}}>
        <Container>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            mb={2}
            sx={{ color: "#fff", marginTop: { md: 0, xs: "15px" } }}
          >
            {selectedCategory}
            <span style={{ color: "#f31503" }}> Videos</span>
          </Typography>

          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Feed;
