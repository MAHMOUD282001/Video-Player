import { Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants/constants";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <Stack
      py={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Container
        maxWidth = ""
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>

        <Searchbar />
      </Container>
    </Stack>
  );
}

export default Navbar;
