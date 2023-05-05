import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../constants/constants";

function Sidebar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack
      sx={{
        height: { xs: "auto", md: "100%" },
        flexDirection: {md: "column", xs: "row"},
        overflowY: "auto",
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          onClick={()=>setSelectedCategory(category.name)}
        >
          <span style={{
            color: category.name === selectedCategory? "white" : "red",
          }}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory? "1" : ".8", paddingLeft: "15px" }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
