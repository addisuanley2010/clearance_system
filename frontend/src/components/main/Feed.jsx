import { Box, Paper } from "@mui/material";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import Register from "../adminComp/Register";
import AllRequest from "../adminComp/AllRequest";
import AssignHead from "../adminComp/AssignHead";
import AddDepartment from "../adminComp/AddDepartment";
import PageNotFound from "./PageNotFound";
import { Route, Routes } from "react-router-dom";
import Login from "../comp/Login";
import { parentContext } from "../../state/ContextState";
import { useContext } from "react";
import StaffRequest from "../staffComp/StaffRequest";
import Officer from "../staffComp/Officer";
import Clearance from "../staffComp/Clearance";
import AllReq from "../../officer/AllReq";

const Feed = () => {
  const feedContext = useContext(parentContext);

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
      }}
    >
      <Paper elevation={10}>
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
          {feedContext.sideNavValue === 1 && (
            <>
              <Route path="/register" exact element={<Register />}></Route>
              <Route path="/Requests" exact element={<AllRequest />}></Route>
              <Route path="/Assign head" exact element={<AssignHead />}></Route>
              <Route path="/Add Dept" exact element={<AddDepartment />}></Route>
            </>
          )}
          {(feedContext.sideNavValue === 2 ||
            feedContext.sideNavValue === 3 ||
            feedContext.sideNavValue === 4) && (
            <>
              {(feedContext.sideNavValue === 4 || feedContext.sideNavValue === 3)&& (
                <Route path="/staff" element={<StaffRequest />}></Route>
              )}
              {feedContext.sideNavValue === 3 && (
                <Route path="/allreq" element={<AllReq />}></Route>
              )}
              <Route path="/officer" exact element={<Officer />}></Route>
              <Route path="/clearance" exact element={<Clearance />}></Route>
            </>
          )}
          <Route path="/login" exact element={<Login />}></Route>
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
