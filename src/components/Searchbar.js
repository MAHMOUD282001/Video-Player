import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  
  let [searchTerm, setSearchTerm] = useState() 
  
  let navigate = useNavigate()
  
  let handleSubmit = (e)=>{
    e.preventDefault();
    
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      
      setSearchTerm("")
    }
  }
  
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      
      <IconButton type="submit" sx={{p: "10px" , color: "red"}}>
        <Search/>
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
