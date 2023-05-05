import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FetchData } from "../FetchData/FetchData";
import { useParams } from "react-router-dom";

function SearchFeed() {
  
  let {searchTerm} = useParams()
  
  let [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    FetchData(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data?.items);
    });
  }, [searchTerm]);

  

  return (
      <Box sx={{ overflowY: "auto", height: "90vh" }}>
        <Container maxWidth = "">
          <Typography
            variant="h4"
            fontWeight={"bold"}
            mb={2}
            sx={{ color: "#fff", marginTop: { md: 0, xs: "15px" } }}
          >
            Search Videos For:
            <span style={{ color: "#f31503" }}> {searchTerm}</span>
          </Typography>

          <Videos videos={videos} />
        </Container>
      </Box>
  );
}

export default SearchFeed;
