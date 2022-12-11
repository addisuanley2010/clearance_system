import { Box, Paper } from "@mui/material";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import Register from "../comp/Register";
import PageNotFound from "./PageNotFound";
import { Route, Routes } from "react-router-dom";
import Login from "../comp/Login";
import { parentContext } from "../../state/ContextState";
import { useContext } from "react";
const Feed = () => {

const feedContext=useContext(parentContext)



  return (
    <Box
      flex={6}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "69rem",
          minHeight: "37rem",
        },
      } }
    >
      <Paper elevation={10}>
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
          {feedContext.sideNavValue===1 && (
            <Route path="/register" exact element={<Register />}></Route>
          )}
          <Route  path="/login" exact element={<Login />}
          ></Route>
          <Route path="/" exact element={<Home />}></Route>
           <Route path="/about" exact element={<About />}></Route>
          <Route path="/help" exact element={<Help />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </Paper>
    </Box>
  );
};

export default Feed;
