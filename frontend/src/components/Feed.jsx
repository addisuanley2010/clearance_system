import { Box, Paper } from "@mui/material";
import React from "react";
import Home from "./comp/Home";
import Register from "./comp/Register";
import PageNotFound from "./PageNotFound";
import { Route, Routes } from "react-router-dom";
import Login from "./comp/Login";
const Feed = () => {
  return (
    <Box
      flex={6}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "69rem",
          minHeight: "35rem",
        },
      }}
    >
      <Paper elevation={10}>
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </Paper>
    </Box>
  );
};

export default Feed;
